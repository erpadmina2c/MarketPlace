using System;
using System.Linq;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using CheckpointInventoryStock.API.Data;
using CheckpointInventoryStock.API.Dtos;
using CheckpointInventoryStock.API.Models;
using MailKit.Net.Smtp;
using MailKit;
using MimeKit;

namespace CheckpointInventoryStock.API.Controllers
{   
    
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        public AuthController(IAuthRepository repo, IConfiguration config, DataContext context)
        {
            _repo = repo;
            _config = config;
            _context = context;

        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto UserForRegisterDto)
        {
            //UserForRegisterDto.Username = UserForRegisterDto.Username.ToLower();
            if( await _repo.UserExists(UserForRegisterDto.Username))
                return BadRequest("Username Already Registered");
            if( await _repo.EmailExists(UserForRegisterDto.Email))
                return BadRequest("Email Already Registered");
            if( await _repo.MobileExists(UserForRegisterDto.mobile_no))
                return BadRequest("Mobile Already Registered");

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, UserForRegisterDto.mobile_no.ToString()),
                new Claim(ClaimTypes.Name, UserForRegisterDto.Username)
            };

            var key = new SymmetricSecurityKey(Encoding
                            .UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);  
            
            var userToCreate = new User
            {
                username = UserForRegisterDto.Username,
                Email = UserForRegisterDto.Email,
                Company = UserForRegisterDto.Company,
                mobile_no = UserForRegisterDto.mobile_no,
                City = UserForRegisterDto.City,
                Country = UserForRegisterDto.Country,
                token = tokenHandler.WriteToken(token),
            };
                
            var createdUser = await _repo.Register(userToCreate, UserForRegisterDto.Password);

            var roleToCreate = new UserRole
            {
                UserID =userToCreate.Id,
                RoleID =UserForRegisterDto.RoleID

            };
            
            var Createdrole = await _repo.UserRole(roleToCreate);

            var message = new MimeMessage();
                    // From address
                    message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                    // To address
                    message.To.Add(new MailboxAddress("Email Verification", UserForRegisterDto.Email));

                    // Subject 
                    
                    message.Subject = "Email Verification";
                    // Body 
                    message.Body =  new TextPart("html") {
                        Text = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#80808057;'> <br><br><table width='600' border='0' cellspacing='0' cellpadding='0'> <tr><td height='70' align='left' valign='middle'></td></tr><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ; font-family:Arial, Helvetica, sans-serif; padding:10px;'><div style='font-size:13px; color:#08ab9e ;text-align: center;font-family: sans-serif;'> <b>Email Verification</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f; font-family:Arial, Helvetica, sans-serif; padding:10px;'> <div style='font-size:16px;'> Dear <span style='text-transform:capitalize'>" + UserForRegisterDto.Username + "</span>, </div><div style='font-size:12px;'> Please verify your email to activate your account.</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736 ; font-family:Arial, Helvetica, sans-serif;'> <div style='font-size:13px; color:#08ab9e ;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/api/auth/verifyuseremail/"+userToCreate.token+" style='color:#08ab9e ; text-decoration:underline;'>CLICK HERE</a> to verify the email </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html></body></html>",
                    };

                    using (var client = new SmtpClient()){

                        //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
        
                        client.Connect("mail.a2cuae.com", 465, true);

                        client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                        client.Send(message);

                        client.Disconnect(true);
                    }

            var users =from user in _context.Users
                        join photo in _context.Photos 
                        on user.Id equals photo.UserId
                        into Photo
                        from photo in Photo.DefaultIfEmpty()
                        join userrole in _context.UserRoles 
                        on user.Id equals userrole.UserID
                        into UserRole
                        from userrole in UserRole.DefaultIfEmpty()
                        join role in _context.Roles 
                        on userrole.RoleID equals role.RoleID
                        into Role
                        from role in Role.DefaultIfEmpty()
               select new
                {
                    id = user.Id,
                    username = user.username,
                    email = user.Email,
                    gender = user.Gender,
                    age = 0,
                    knownAs = user.KnownAs,
                    createdDate = user.CreatedDate,
                    lastActive = user.LastActive,
                    city = user.City,
                    country = user.Country,
                    photoUrl = photo.Url,
                    roleID = role.RoleID,
                    rolename = role.RoleTitle,

                };
                
                var eusers = users.Where(e=> e.roleID==1 || e.roleID==2 || e.roleID==3 || e.roleID==11).ToList();
                    
                var flag = "";
                try{
                    var smtp = new SmtpClient();
                    smtp.Connect("mail.a2cuae.com", 465, true);
                    smtp.Disconnect(true);
                    flag = "pass";
                } catch (Exception ex)
                {   
                    ex.ToString();
                    flag = "fail";
                }  
                if(flag == "fail"){
                    return Ok(201);
                }

                foreach (var item in eusers)
                {
                    
                        var newmessage = new MimeMessage();
                        // From address
                        newmessage.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                        // To address
                        newmessage.To.Add(new MailboxAddress("User Registeration", item.email));

                        // Subject 
                        
                        newmessage.Subject = "NEW ITAD User Registeration";
                        // Body 
                        newmessage.Body =  new TextPart("html") {
                            Text = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#80808057;'> <br><br><table width='600' border='0' cellspacing='0' cellpadding='0'> <tr><td height='70' align='left' valign='middle'></td></tr><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ; font-family:Arial, Helvetica, sans-serif; padding:10px;'><div style='font-size:13px; color:#08ab9e ;text-align: center;font-family: sans-serif;'> <b>User Registeration</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f; font-family:Arial, Helvetica, sans-serif; padding:10px;'> <div style='font-size:16px;'> Dear <span style='text-transform:capitalize'>" + item.username + "</span>, </div><div style='font-size:12px;'> New ITAD user ( " + UserForRegisterDto.Username + " ) registered on circular computing. kindly login and check the detail</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736 ; font-family:Arial, Helvetica, sans-serif;'> <div style='font-size:13px; color:#08ab9e ;'> <br><a href='http://a2cshops.com' style='color:#08ab9e ; text-decoration:underline;'>CLICK HERE</a> to verify the email </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html></body></html>",
                        };

                        using (var client = new SmtpClient()){

                            //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
            
                            client.Connect("mail.a2cuae.com", 465, true);

                            client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                            client.Send(newmessage);

                            client.Disconnect(true);
                        }
                    
                } 

            return Ok(users);
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login (UserForLoginDto userForLoginDto)
        {   
            if(!await _repo.UserExists(userForLoginDto.Username))
                return BadRequest("Invalid Username");
            if(!await _repo.CheckPass(userForLoginDto.Username, userForLoginDto.Password))
                return BadRequest("Wrong Password");
            var userFromRepo = await _repo.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password,1);
            if(userFromRepo==null)
                return BadRequest("This account has not been activated yet.");
            
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.username)
            };

            var key = new SymmetricSecurityKey(Encoding
                            .UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();

            var token = tokenHandler.CreateToken(tokenDescriptor);
            userFromRepo.LastActive =DateTime.Now;
            _context.SaveChanges();

            var LoginLogTocreate = new LoginLog
            {
                user_id = userFromRepo.Id,
                login = DateTime.Now
            };
                
            var LoginLogTocreateed = await _repo.LoginLog(LoginLogTocreate);

            return Ok(new {                
                token=tokenHandler.WriteToken(token), user=userFromRepo
            });
        }
        [HttpPut("resetpassword")]
        public async Task<IActionResult> resetPassword(UserForRegisterDto UserForRegisterDto)
        {
            
            var values1 = await _repo.UserExists(UserForRegisterDto.Username);
            
            var entity = _context.Users.FirstOrDefault(item => item.Id == UserForRegisterDto.Id);
            
            byte[] passswordHash, passwordSalt;
            CreatePasswordHash(UserForRegisterDto.Password, out passswordHash, out passwordSalt);


            if (entity != null)
            {
                entity.PasswordHash = passswordHash;
                entity.PasswordSalt = passwordSalt;
                entity.username = UserForRegisterDto.Username;
                entity.Email = UserForRegisterDto.Email;
                _context.SaveChanges();
            }

            
            var myrole = _context.UserRoles.FirstOrDefault(item => item.UserID == UserForRegisterDto.Id);

            if (entity != null)
            {
                myrole.RoleID = UserForRegisterDto.RoleID;
                _context.SaveChanges();
            }

            var users =from user in _context.Users
                        join photo in _context.Photos 
                        on user.Id equals photo.UserId
                        into Photo
                        from photo in Photo.DefaultIfEmpty()
                        join userrole in _context.UserRoles 
                        on user.Id equals userrole.UserID
                        into UserRole
                        from userrole in UserRole.DefaultIfEmpty()
                        join role in _context.Roles 
                        on userrole.RoleID equals role.RoleID
                        into Role
                        from role in Role.DefaultIfEmpty()
               select new
                {
                    id = user.Id,
                    username = user.username,
                    email = user.Email,
                    gender = user.Gender,
                    age = 0,
                    knownAs = user.KnownAs,
                    createdDate = user.CreatedDate,
                    lastActive = user.LastActive,
                    city = user.City,
                    country = user.Country,
                    photoUrl = photo.Url,
                    roleID = role.RoleID,
                    rolename = role.RoleTitle,

                };   

            return Ok(users);
        }

        [HttpGet("verifyuseremail/{token}")]
        public async Task<IActionResult> VerifyUserEmail(string token)
        {
            
            var values1 = await _repo.UserExists(token);
            
            var entity = _context.Users.FirstOrDefault(item => item.token == token);
            if (entity != null)
            {
                entity.active = 1;
                _context.SaveChanges();
            }

            return Redirect("/#/login");

            //return Ok("Email Successfully verified");
        }
        [HttpPut("edituserinfopost")]
        public async Task<IActionResult> EdituserInfo([FromBody]User request)
        {
            var values1 = await _repo.UserExists(request.username);

            var entity =  _context.Users.FirstOrDefault(item => item.Id == request.Id);
            
            if (entity != null)
            {
                entity.Company = request.Company;
                entity.Reg_no = request.Reg_no;
                entity.mobile_no = request.mobile_no;
                entity.City = request.City;
                entity.Country = request.Country;
                _context.SaveChanges();
            }
            
            var users =from user in _context.Users
                        join photo in _context.Photos 
                        on user.Id equals photo.UserId
                        into Photo
                        from photo in Photo.DefaultIfEmpty()
                        join userrole in _context.UserRoles 
                        on user.Id equals userrole.UserID
                        into UserRole
                        from userrole in UserRole.DefaultIfEmpty()
                        join role in _context.Roles 
                        on userrole.RoleID equals role.RoleID
                        into Role
                        from role in Role.DefaultIfEmpty()
               select new
                {
                    id = user.Id,
                    username = user.username,
                    email = user.Email,
                    gender = user.Gender,
                    age = 0,
                    knownAs = user.KnownAs,
                    createdDate = user.CreatedDate,
                    lastActive = user.LastActive,
                    city = user.City,
                    country = user.Country,
                    photoUrl = photo.Url,
                    roleID = role.RoleID,
                    rolename = role.RoleTitle,

                };   

            return Ok(users);
        }
        private void CreatePasswordHash(string password, out byte[] passswordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512()){
                passwordSalt = hmac.Key;
                passswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}