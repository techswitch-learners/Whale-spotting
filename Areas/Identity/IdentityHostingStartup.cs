using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RPauth.Data;
using whale_spotting.Models.Database;


[assembly: HostingStartup(typeof(whale_spotting.Areas.Identity.IdentityHostingStartup))]
namespace whale_spotting.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            var connectionString = ConnectionStringerHelper.GetConnectionString();
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<WhaleSpottingContext>(options =>
                    options
                         .UseNpgsql(connectionString));

                services.AddDefaultIdentity<AdminUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<WhaleSpottingContext>();

            });
        }
    }
}