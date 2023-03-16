using Backend.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Backend.Helpers.JwtUtils
{
    public class JwtUtils : IJwtUtils
    {
        public readonly AppSettings _appSettings;

        public JwtUtils(IOptions<AppSettings> appSettings, IConfiguration configuration)
        {
            _appSettings = appSettings.Value;
        }

        public string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var appPrivateKey = Encoding.UTF8.GetBytes(_appSettings.JwtToken);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new[] { new Claim("id", user.Id.ToString()) }
                    ),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(appPrivateKey), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        public Guid ValidateJwtToken(string token)
        {
            if (token == null)
            {
                return Guid.Empty;
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var appPrivateKey = Encoding.ASCII.GetBytes(_appSettings.JwtToken);

            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(appPrivateKey),
                ValidateIssuer = true,
                ValidateAudience = false,
                ClockSkew = TimeSpan.Zero
            };

            try
            {
                tokenHandler.ValidateToken(token, tokenValidationParameters, out SecurityToken validatedToken);
                var jwtToken = (JwtSecurityToken)validatedToken;
                var CustomerId = new Guid(jwtToken.Claims.FirstOrDefault(x => x.Type == "id").Value);
                return CustomerId;
            }
            catch (Exception)
            {
                return Guid.Empty;
            }
        }

    }
}
