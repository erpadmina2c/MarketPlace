using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using CheckpointInventoryStock.API.Data;
using CheckpointInventoryStock.API.Dtos;

namespace CheckpointInventoryStock.API.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IWorkshopRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(IWorkshopRepository repo, IMapper mapper, DataContext context)
        {
            _mapper = mapper;
            _repo = repo;
            _context = context;

        }
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var user1 = await _repo.GetUsers();
            
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
                    company = user.Company,
                    reg_no = user.Reg_no,
                    mobile_no = user.mobile_no,
                    dateOfBirth = user.DateOfBirth,
                    createdDate = user.CreatedDate,
                    lastActive = user.LastActive,
                    city = user.City,
                    country = user.Country,
                    photoUrl = photo.Url,
                    roleId = role.RoleID,
                    rolename = role.RoleTitle,
                    active = user.active,

                };   

            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user1 = await _repo.GetUser(id);
            var result =from user in _context.Users
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
                        where user.Id == id 
               select new
                {
                    id = user.Id,
                    username = user.username,
                    email = user.Email,
                    gender = user.Gender,
                    age = 0,
                    company = user.Company,
                    reg_no = user.Reg_no,
                    mobile_no = user.mobile_no,
                    tel_no = user.tel_no,
                    city = user.City,
                    country = user.Country,
                    photoUrl = photo.Url,
                    knownAs = user.FirstName,
                    lastActive = user.LastActive,
                    roleId = role.RoleID,
                    rolename = role.RoleTitle,
                    createdDate = user.CreatedDate,

                };   
            return Ok(result.FirstOrDefault());
        }

         [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UserForUpdateDto userForUpdateDto)
        {   
            if(id != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value))
                return Unauthorized();
            var userFromRepo = await _repo.GetUser(id);
            _mapper.Map(userForUpdateDto, userFromRepo);

            if(await _repo.SaveAll())
                return NoContent();
            throw new Exception($"updating user {id} failed on save");
        }
    }
}