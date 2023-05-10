using Backend.Helpers.JwtUtils;
using Backend.Repositories.GameRepository;
using Backend.Repositories.MessageRepository;
using Backend.Repositories.ReviewRepository;
using Backend.Repositories.UserRepository;
using Backend.Services.GameService;
using Backend.Services.MessageService;
using Backend.Services.ReviewService;
using Backend.Services.UserService;

namespace Backend.Helpers.Extensions
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IMessageRepository, MessageRepository>();
            services.AddTransient<IGameRepository, GameRepository>();
            services.AddTransient<IReviewRepository, ReviewRepository>();
            return services;
        }

        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IMessageService, MessageService>();
            services.AddTransient<IGameService, GameService>();
            services.AddTransient<IReviewService, ReviewService>();
            return services;
        }

        public static IServiceCollection AddUtils(this IServiceCollection services)
        {
            services.AddScoped<IJwtUtils, JwtUtils.JwtUtils>();
            return services;
        }
    }
}
