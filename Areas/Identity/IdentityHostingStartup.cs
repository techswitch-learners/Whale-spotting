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
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<WhaleSpottingContext>(options =>
                    // options.UseSqlServer(
                    //     context.Configuration.GetConnectionString("WhaleSpottingContextConnection")));
                    options
                         .UseNpgsql(Environment.GetEnvironmentVariable("DATABASE_URL")));


                services.AddDefaultIdentity<AdminUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<WhaleSpottingContext>();
                    // .AddUserManager<ApplicationUserManager>()      // <- use only if use have custom implementation
                    // .AddSignInManager<ApplicationSignInManager>(); // <- use only if use have custom implementation
            });
        }
    }
}