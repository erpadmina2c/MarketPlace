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
using Microsoft.EntityFrameworkCore;

namespace CheckpointInventoryStock.API.Controllers
{   
    
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        private readonly IAuthRepository _auth;
        public AuthController(IAuthRepository repo, IConfiguration config, DataContext context, IAuthRepository auth)
        {
            _repo = repo;
            _config = config;
            _context = context;
            _auth = auth;

        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto UserForRegisterDto)
        {
            //UserForRegisterDto.Username = UserForRegisterDto.Username.ToLower();
            if( await _repo.UserExists(UserForRegisterDto.Username))
                return BadRequest("Username Already Registered");
            if(await _repo.EmailExists(UserForRegisterDto.Email))
                return BadRequest("Email Already Registered");
            if( await _repo.MobileExists(UserForRegisterDto.mobile_no) && UserForRegisterDto.RoleID == 12)
                return BadRequest("Mobile Already Registered");
            if(!await _context.Companyprofiles.AnyAsync(x => x.com_domain.Contains(UserForRegisterDto.email_ext)) && UserForRegisterDto.active == 1)
                return BadRequest("Company Domain Not Registered Yet");
            if(!await _context.Companyprofiles.AnyAsync(x => x.com_domain.Contains(UserForRegisterDto.email_ext) && x.status == 1) && UserForRegisterDto.active == 1)
                return BadRequest("Company Domain Not Approved Yet");

            var com =  _context.Companyprofiles.FirstOrDefault(x => x.com_domain.Contains(UserForRegisterDto.email_ext) && x.status == 1);

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
                Company = com.com_name,
                FirstName = UserForRegisterDto.FirstName,
                LastName = UserForRegisterDto.LastName,
                CompanyId = com.id,
                mobile_no = UserForRegisterDto.mobile_no,
                City = UserForRegisterDto.City,
                Country = UserForRegisterDto.Country,
                email_ext = UserForRegisterDto.email_ext,
                active = UserForRegisterDto.active,
                token = tokenHandler.WriteToken(token),
            };
            var createdUser = await _repo.Register(userToCreate, UserForRegisterDto.Password);
            var roleToCreate = new UserRole
            {
                UserID =userToCreate.Id,
                RoleID =UserForRegisterDto.RoleID

            };            
            var Createdrole = await _repo.UserRole(roleToCreate);            var crtphoto = new Photo
                    {
                        DateAdded = DateTime.Now,
                        IsMain = true,
                        UserId = userToCreate.Id,
                    };
            var crtphotoed =  _auth.Photo(crtphoto); 
            UserSuccessEmail(UserForRegisterDto.Email,userToCreate.username,userToCreate.token,UserForRegisterDto.active);

            
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
                        knownAs = user.FirstName,
                        createdDate = user.CreatedDate,
                        lastActive = user.LastActive,
                        city = user.City,
                        country = user.Country,
                        photoUrl = photo.Url,
                        roleID = role.RoleID,
                        rolename = role.RoleTitle,

                    };
                
                UserActivationEmail(UserForRegisterDto.Username,UserForRegisterDto.active,com.com_name,UserForRegisterDto.Email, UserForRegisterDto.FirstName, UserForRegisterDto.LastName);

            
             return Ok(UserForRegisterDto);
        }
        
        [HttpPost("addinternaluser")]
        public async Task<IActionResult> AddInternalUser(UserForRegisterDto UserForRegisterDto)
        {
            //UserForRegisterDto.Username = UserForRegisterDto.Username.ToLower();
            if( await _repo.UserExists(UserForRegisterDto.Username))
                return BadRequest("Username Already Registered");
            if(await _repo.EmailExists(UserForRegisterDto.Email))
                return BadRequest("Email Already Registered");

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
                Company = "A2C Services LLC",
                verify_email= UserForRegisterDto.active,
                active = UserForRegisterDto.active,
                token = tokenHandler.WriteToken(token),
            };
            var createdUser = await _repo.Register(userToCreate, UserForRegisterDto.Password);
            var roleToCreate = new UserRole
            {
                UserID =userToCreate.Id,
                RoleID =UserForRegisterDto.RoleID

            };            
            var Createdrole = await _repo.UserRole(roleToCreate);
            var crtphoto = new Photo
                    {
                        DateAdded = DateTime.Now,
                        IsMain = true,
                        UserId = userToCreate.Id,
                    };
            var crtphotoed =  _auth.Photo(crtphoto);
            
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
                        knownAs = user.FirstName,
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
        
        
        [HttpPost("registercompany")]
        public async Task<IActionResult> RegisterCompany([FromBody]Companyprofile request)
        {
            //UserForRegisterDto.Username = UserForRegisterDto.Username.ToLower();
            Uri myUri1 = new Uri("http://itad.circularcomputing.com/");
            if(await _context.Companyprofiles.AnyAsync(x => x.com_name == request.com_name && x.status !=2))
                return BadRequest("Company Already Exist");
            if(await _context.Companyprofiles.AnyAsync(x => x.com_tel == request.com_tel && x.status !=2))
                return BadRequest("Telephone Already Exist");
            try
            {
                myUri1 = new Uri(request.com_domain);                
            }
            catch (System.Exception)
            {
                return BadRequest("Domain Not Valid");
            }
            Uri myUri = myUri1;
            string host = myUri.Host;
            if(await _context.Companyprofiles.AnyAsync(x => x.com_domain.Contains(host)  && x.status !=2))
                return BadRequest("Domain Already Exist");
            var companyToCreate = new Companyprofile
                {
                    com_name = request.com_name,
                    com_tel = request.com_tel,
                    com_domain = request.com_domain,
                    com_street = request.com_street,
                    com_city = request.com_city,
                    country_id = request.country_id,
                    branch_num = request.branch_num,
                    laptop_num = request.laptop_num,
                    desk_num = request.desk_num,
                    monitor_num = request.monitor_num,
                    div_revenue = request.div_revenue,
                    staff_num = request.staff_num,
                    con_name = request.con_name,
                    con_email = request.con_email,
                    con_tel = request.con_tel,
                    con_mob = request.con_mob,
                    mar_con_name = request.mar_con_name,
                    mar_con_tel = request.mar_con_tel,
                    mar_con_email = request.mar_con_email,
                    comments = request.comments,
                    status = 0,
                    modified_at = DateTime.Now,
                    created_at = DateTime.Now,
                };
                var companyToCreated = await _repo.Companyprofile(companyToCreate);

                CompanySuccessEmail(companyToCreated.con_email,companyToCreated.con_name);
                CompanyActivationEmail(companyToCreated.com_name);
            
             return Ok(201);
        }

        [HttpPost("resetusername")]
        public async Task<IActionResult> ResetUser([FromBody]User request)
        {            
            if(!await _repo.EmailExists(request.Email))
                return BadRequest("Email does not exist");
            var entity =  _context.Users.FirstOrDefault(item => item.Email == request.Email);
            var newmessage = new MimeMessage();
            // From address
            newmessage.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

            // To address
            newmessage.To.Add(new MailboxAddress("User Reset", entity.Email));

            // Subject 
            
            newmessage.Subject = "User Reset";
            // Body 
            newmessage.Body =  new TextPart("html") {
                Text = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ;padding:10px;'><div style='color:#08ab9e ;text-align: center;'> <b>Reset User</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;; padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + entity.username + "</span> </div><div> Your username : " + entity.username + "</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html></body></html>",
            };

            using (var client = new SmtpClient()){

                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;

                client.Connect("mail.a2cuae.com", 465, true);

                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                client.Send(newmessage);

                client.Disconnect(true);
            }
                                
             return Ok(entity);
        }
        [HttpPost("resetpassotp")]
        public async Task<IActionResult> ResetPassOTP([FromBody]User request)
        {            
            if(!await _repo.EmailExists(request.Email))
                return BadRequest("Email does not exist");
             var entity =  _context.Users.FirstOrDefault(item => item.Email == request.Email);
             int num = new Random().Next(1000, 9999);
             if (entity != null)
                {
                    entity.otp = num;
                    entity.DateOfBirth = DateTime.Now;
                    _context.SaveChanges();
                }
            var newmessage = new MimeMessage();
            // From address
            newmessage.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

            // To address
            newmessage.To.Add(new MailboxAddress("OTP - Circular Computing", entity.Email));

            // Subject 
            
            newmessage.Subject = "OTP - Circular Computing";
            // Body 
            newmessage.Body =  new TextPart("html") {
                Text = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736;padding:10px;'><div style='font-size:13px; color:#08ab9e ;text-align: center;'> <b>Reset Password</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;padding:10px;'> <div style='font-size:12px;'> Dear <span style='text-transform:capitalize'>" + entity.username + "</span> </div><div style='font-size:12px;'> Your OTP : " + entity.otp + "</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html></body></html>",
            };

            using (var client = new SmtpClient()){

                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;

                client.Connect("mail.a2cuae.com", 465, true);

                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                client.Send(newmessage);

                client.Disconnect(true);
            }
                                
             return Ok(entity);
        }
        
        [HttpPost("verifyotp")]
        public async Task<IActionResult> VerifyOTP([FromBody]User request)
        {   
            var user = await _repo.EmailExists(request.Email);       
            var entity = _context.Users.FirstOrDefault(item => item.DateOfBirth.AddMinutes(2) >= DateTime.Now && item.otp == request.otp && item.Email == request.Email);
            if (entity == null)
                return BadRequest("Invalid OTP, Try Again");                   
            return Ok(entity);
        }
        
        [HttpPost("resetpasspost")]
        public async Task<IActionResult> Resetpasspost(UserForRegisterDto UserForRegisterDto)
        {   
            var user = await _context.Currency.ToListAsync();
            var entity = _context.Users.FirstOrDefault(item => item.Email == UserForRegisterDto.Email);
            
            byte[] passswordHash, passwordSalt;
            CreatePasswordHash(UserForRegisterDto.Password, out passswordHash, out passwordSalt);


            if (entity != null)
            {
                entity.PasswordHash = passswordHash;
                entity.PasswordSalt = passwordSalt;
                entity.otp = 0;
                _context.SaveChanges();
            }                  
            return Ok(entity);
        }
        private bool UserSuccessEmail(string email, string Username, string token, int active)
        {
            var myText = "";
            if (active == 0) {
                    myText = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body  style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'> <tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736;padding:10px;'><div style='color:#08ab9e ;text-align: center;'> <b>Email Verification</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + Username + "</span> </div><div> Please verify your email to activate your account. after email verification once your profile will get activated, you will get the notification alert from circular computing.</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736 ;'> <div style='color:#08ab9e ;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/api/auth/verifyuseremail/"+token+" style='color:#08ab9e ; text-decoration:underline;'>CLICK HERE</a> to verify the email </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html></body></html>";

                } else {
                    myText = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'> <tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736;padding:10px;'><div style='color:#08ab9e ;text-align: center;'> <b>Email Verification</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + Username + "</span> </div><div> Please verify your email to activate your account.</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'> <div style='color:#08ab9e ;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/api/auth/verifyuseremail/"+token+" style='color:#08ab9e ; text-decoration:underline;'>CLICK HERE</a> to verify the email </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html></body></html>";
                }
            var message = new MimeMessage();
                            // From address
            message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

            // To address
            message.To.Add(new MailboxAddress("Email Verification", email));

            // Subject 
            
            message.Subject = "Email Verification";
            // Body 
            message.Body =  new TextPart("html") {
                Text = myText,
            };

            using (var client = new SmtpClient()){

                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;

                client.Connect("mail.a2cuae.com", 465, true);

                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                client.Send(message);

                client.Disconnect(true);
            }
            return true;
;
        }
        private bool CompanySuccessEmail(string email, string Username)
        {
            var message = new MimeMessage();
                            // From address
            message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

            // To address
            message.To.Add(new MailboxAddress("Company Registration", email));

            // Subject 
            
            message.Subject = "Company Registration Alert";
            // Body 
            message.Body =  new TextPart("html") {
                Text = "<!DOCTYPE html><html><head><title>Circular Computing</title><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'> <tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ; font-family:Arial, Helvetica, sans-serif; padding:10px;'><div style='color:#08ab9e ;text-align: center;'> <b>Circular Computing Registration Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + Username + "</span> </div><div> Your company details have been submitted successfully. Will notify you once your profile is approved.</div><div> Thank you for your interest in Circular Computing. We look forward to working with you.</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736 ;'></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html>",
            };

            using (var client = new SmtpClient()){

                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;

                client.Connect("mail.a2cuae.com", 465, true);

                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                client.Send(message);

                client.Disconnect(true);
            }
            return true;
;
        }
        private bool UserActivationEmail(string Username, int active, string com_name, string email, string FirstName, string LastName)
        {
            var eusers = _context.Users.FirstOrDefault(e=> e.username=="Rod");
            var myText = "";
            if (active == 0) {
                    myText = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ; padding:10px;'><div style='color:#08ab9e ;text-align: center;'> <b>User Registration</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f; padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + eusers.username + "</span> </div><div> You have a new external user entry, Please login and approve the new user.</div></td></tr></table><table style='color:#03443f;padding:10px;' width='95%' align='center' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='' valign='middle'>User Name</td><td align='' valign='middle'>" + FirstName + " " + LastName + "</td></tr><tr><td align='' valign='middle'>Email Address</td><td align='' valign='middle'>" + email + "</td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr><td align='left' valign='middle' style='padding:15px; background-color:#062736;'> <div style='color:#08ab9e ;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e ; text-decoration:underline;'>CLICK HERE</a> to check user detail. </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html></body></html>";

                } else {
                    myText = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ; padding:10px;'><div style='color:#08ab9e ;text-align: center;'> <b>User Registration</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + eusers.username + "</span> </div><div> You have a new user entry for " + com_name + " Company, Please login for more details.</div></td></tr></table><table style='color:#03443f;padding:10px;' align='center' width='95%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td valign='middle'>Company Name</td><td valign='middle'>" + com_name + "</td></tr><tr><td valign='middle'>User Name</td><td valign='middle'>" + FirstName + " " + LastName + "</td></tr><tr><td valign='middle'>Email Address</td><td valign='middle'>" + email + "</td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr><td align='left' valign='middle' style='padding:15px; background-color:#062736 ;'> <div style='color:#08ab9e ;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e ; text-decoration:underline;'>CLICK HERE</a> to check user detail. </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html></body></html>";
                }
                        
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
                return false;
            }

            var newmessage = new MimeMessage();
            // From address
            newmessage.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

            // To address
            newmessage.To.Add(new MailboxAddress("User Registration", eusers.Email));

            // Subject 
            
            newmessage.Subject = "NEW ITAD User Registration";
            // Body 
            newmessage.Body =  new TextPart("html") {
                Text = myText,
            };

            using (var client = new SmtpClient()){

                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;

                client.Connect("mail.a2cuae.com", 465, true);

                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                client.Send(newmessage);

                client.Disconnect(true);
            }
            return true;
;
        }
        private bool CompanyActivationEmail(string Username)
        {
            var eusers = _context.Users.FirstOrDefault(e=> e.username=="Rod");
                        
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
                return false;
            }

            var newmessage = new MimeMessage();
            // From address
            newmessage.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

            // To address
            newmessage.To.Add(new MailboxAddress("Company Registration", eusers.Email));

            // Subject 
            
            newmessage.Subject = "NEW ITAD Company Registration";
            // Body 
            newmessage.Body =  new TextPart("html") {
                Text = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ;padding:10px;'><div style='color:#08ab9e ;text-align: center;'> <b>ITAD Company Registration</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + eusers.username + "</span> </div><div> New ITAD Company ( " + Username + " ) Details has been submitted on circular computing. kindly login and check the detail.</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'><div style='color:#08ab9e;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/#/itad_company_list' style='color:#08ab9e; text-decoration:underline;'>CLICK HERE</a> TO LOGIN </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html></body></html>",
            };

            using (var client = new SmtpClient()){

                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;

                client.Connect("mail.a2cuae.com", 465, true);

                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                client.Send(newmessage);

                client.Disconnect(true);
            }
            return true;
;
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login (UserForLoginDto userForLoginDto)
        {   
            if(!await _repo.UserExists(userForLoginDto.Username))
                return BadRequest("Invalid Username");
            if(!await _repo.CheckPass(userForLoginDto.Username, userForLoginDto.Password))
                return BadRequest("Wrong Password");            
            if(!await _context.Users.AnyAsync(x => x.username== userForLoginDto.Username && x.verify_email==1))
                return BadRequest("Your Email Not Verified Yet.");
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
        // POST api/values

        [HttpPut("activateuser")]
        public async Task<IActionResult> ActivateUser([FromBody]Companyprofile request)
        {   
            var values = await _context.RoleAccess.ToListAsync();
            var entity =  _context.Users.FirstOrDefault(item => item.Id == request.id);

            if (entity != null)
            {                
                entity.active = 1;
                _context.SaveChanges();
                ActivateUserEmail(entity.Email,entity.username);
            }
            
            return Ok(201);
        }

        private bool ActivateUserEmail(string con_email, string con_name)
        {
            var eusers = _context.Users.FirstOrDefault(e=> e.username=="Rod");
                        
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
                return false;
            }

            var newmessage = new MimeMessage();
            // From address
            newmessage.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

            // To address
            newmessage.To.Add(new MailboxAddress("Account Activation", con_email));

            // Subject 
            
            newmessage.Subject = "ITAD - Account Activation";
            // Body 
            newmessage.Body =  new TextPart("html") {
                Text = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736;padding:10px;'><div style='color:#08ab9e ;text-align: center;'> <b>ITAD Account Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + con_name + "</span> </div><div> Your account has been successfully activated on Circular Computing. Now you can proceed.</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'> <div style='color:#08ab9e ;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/api/auth/verifyuseremail/ style='color:#08ab9e ; text-decoration:underline;'>CLICK HERE</a> to login</div></td></tr></table></td></tr></table></body></html></body></html>",
            };

            using (var client = new SmtpClient()){

                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;

                client.Connect("mail.a2cuae.com", 465, true);

                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                client.Send(newmessage);

                client.Disconnect(true);
            }
            return true;
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
                    knownAs = user.FirstName,
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
                entity.verify_email = 1;
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
                entity.tel_no = request.tel_no;
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
                    knownAs = user.FirstName,
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