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
            var connectionString = "User ID=" + username + 
                ";Password=" + password + 
                ";Host=" + uri.Host + 
                ";Port=" + uri.Port + 
                ";Database=" + uri.AbsolutePath.Substring(1) +
                ";Pooling=true;SSL Mode=Require;TrustServerCertificate=True;";
            Console.WriteLine(connectionString);
            return connectionString;
        }
    }
}
