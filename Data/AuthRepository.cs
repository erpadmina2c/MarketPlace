using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private readonly DataContext _context;
        public AuthRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<User> Login(string username, string password, int active)
        {
            var user = await _context.Users.Include(p => p.UserRoles).FirstOrDefaultAsync(x => x.username==username && x.active==active);
            if(user == null)
                return null;
            if(!verifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return null;

            return user;
        }

        public async Task<LoginLog> LoginLog(LoginLog request)
        {
            await _context.LoginLogs.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;
        }
        private bool verifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt)){
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for(int i= 0;  i<computedHash.Length; i++)
                {
                    if(computedHash[i] != passwordHash[i]) return false;
                }
            }
            return true;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passswordHash, passwordSalt;
            CreatePasswordHash(password, out passswordHash, out passwordSalt);

            user.PasswordHash =passswordHash;
            user.PasswordSalt = passwordSalt;
            user.DateOfBirth = DateTime.Now;
            user.CreatedDate = DateTime.Now;
            user.LastActive = DateTime.Now;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
            
            return user;
        }
        

        public async Task<UserRole> UserRole(UserRole userrole)
        {

            await _context.UserRoles.AddAsync(userrole);
            await _context.SaveChangesAsync();
            
            return userrole;
        }
        private void CreatePasswordHash(string password, out byte[] passswordHash, out byte[] passwordSalt)
        {
            using(var hmac = new System.Security.Cryptography.HMACSHA512()){
                passwordSalt = hmac.Key;
                passswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExists(string username)
        {
            if(await _context.Users.AnyAsync(x => x.username == username))
                return true;
            return false; 
        }
        public async Task<bool> EmailExists(string email)
        {
            if(await _context.Users.AnyAsync(x => x.Email == email))
                return true;
            return false; 
        }
        public async Task<bool> MobileExists(string mobile_no)
        {
            if(await _context.Users.AnyAsync(x => x.mobile_no == mobile_no))
                return true;
            return false; 
        }
        public async Task<bool> CheckPass(string username, string password)
        {
            var user = await _context.Users.Include(p => p.UserRoles).FirstOrDefaultAsync(x => x.username==username);
            if(user == null)
                return false;
            if(!verifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
                return false;
            return true; 
        }
         public async Task<Photo> Photo(Photo photo)
        {
            await _context.Photos.AddAsync(photo);
            await _context.SaveChangesAsync();
            
            return photo;
        }
    }
}