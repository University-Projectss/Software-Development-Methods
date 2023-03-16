using Backend.Helpers.JwtUtils;
using Backend.Services.UserService;

namespace Backend.Helpers.Middleware
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _requestDelegate;

        public JwtMiddleware(RequestDelegate requestDelegate)
        {
            _requestDelegate = requestDelegate;
        }

        public async Task Invoke(HttpContext httpContext, IUserService userService, IJwtUtils jwtUtils)
        {
            var token = httpContext.Request.Headers["Authorization"].FirstOrDefault()?.Split("").Last();
            var userId = jwtUtils.ValidateJwtToken(token);
            if (userId != Guid.Empty)
            {
                httpContext.Items["User"] = userService.GetById(userId);
            }

            await _requestDelegate(httpContext);
        }
    }
}
