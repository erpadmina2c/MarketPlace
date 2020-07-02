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
                return BadRequest("Username Already Exist");
            var userToCreate = new User
            {
                username = UserForRegisterDto.Username,
                Email = UserForRegisterDto.Email,
            };
                
            var createdUser = await _repo.Register(userToCreate, UserForRegisterDto.Password);

            var roleToCreate = new UserRole
            {
                UserID =userToCreate.Id,
                RoleID =UserForRegisterDto.RoleID

            };
            
            var Createdrole = await _repo.UserRole(roleToCreate);

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
        [HttpPost("login")]
        public async Task<IActionResult> Login (UserForLoginDto userForLoginDto)
        {   
            var userFromRepo = await _repo.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);
            if(userFromRepo==null)
                return Unauthorized();
            
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
        private void CreatePasswordHash(string password, out byte[] passswordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512()){
                passwordSalt = hmac.Key;
                passswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }
    }
}