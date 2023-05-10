using AutoMapper;
using Backend.Models;
using Backend.Models.DTOs;

namespace Backend.Helpers
{
    public class Mapper : Profile
    {
        public Mapper()
        {
            CreateMap<User, UserDTO>();
            CreateMap<User, UserRequestDTO>();
            CreateMap<User, UserResponseDTO>();
            CreateMap<UserDTO, User>();
            CreateMap<UserRequestDTO, User>();
            CreateMap<UserResponseDTO, User>();
            CreateMap<GameDTO, Game>();
            CreateMap<Game, GameDTO>();
            CreateMap<Review, ReviewDTO>();
            CreateMap<ReviewDTO, Review>();
        }
    }
}
