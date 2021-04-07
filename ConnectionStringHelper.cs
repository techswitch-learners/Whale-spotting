using System;
using Npgsql;

namespace whale_spotting
{
    public class ConnectionStringerHelper
    {
        public static string GetConnectionString()
        {
            if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Development") {
                return Environment.GetEnvironmentVariable("DATABASE_URL");
            }

            var databaseUrl = Environment.GetEnvironmentVariable("DATABASE_URL");
            var uri = new Uri(databaseUrl);
            var username = uri.UserInfo.Split(':')[0];
            var password = uri.UserInfo.Split(':')[1];
            var connectionString = 
            "; Database=" + uri.AbsolutePath.Substring(1) +
            "; Username=" + username +
            "; Password=" + password + 
            "; Port=" + uri.Port +
            "; SSL Mode=Require; Trust Server Certificate=true;";

            return connectionString;
        }
    }
}
