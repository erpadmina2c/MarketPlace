using System.Linq;
using AutoMapper;
using CheckpointInventoryStock.API.Dtos;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Helpers
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<User,UserForListDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                })
                .ForMember(dest => dest.RoleID, opt => {
                    opt.MapFrom(src => src.UserRoles.FirstOrDefault().RoleID);
                });
            CreateMap<User,UserForDetailedDto>()
                .ForMember(dest => dest.PhotoUrl, opt => {
                    opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url); 
                })
                .ForMember(dest => dest.Age, opt => {
                    opt.ResolveUsing(d => d.DateOfBirth.CalculateAge());
                })
                .ForMember(dest => dest.RoleID, opt => {
                    opt.MapFrom(src => src.UserRoles.FirstOrDefault().RoleID); 
                });
            CreateMap<Photo,PhotosForDetailedDto>();  
            CreateMap<UserForUpdateDto, User>();
            CreateMap<RequestForInsertDto,Request>();
            CreateMap<HistoryForInsertDto,History>();
        }
    }
}