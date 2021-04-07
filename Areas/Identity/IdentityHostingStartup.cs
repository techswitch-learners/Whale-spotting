using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using RPauth.Data;

[assembly: HostingStartup(typeof(whale_spotting.Areas.Identity.IdentityHostingStartup))]
namespace whale_spotting.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<WhaleSpottingContext>(options =>
                    options.UseSqlServer(
                        context.Configuration.GetConnectionString("WhaleSpottingContextConnection")));

                services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
                    .AddEntityFrameworkStores<WhaleSpottingContext>();
            });
        }
    }
}