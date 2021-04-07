using whale_spotting.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using whale_spotting.Models.Database;
using System;
using System.IO;

namespace whale_spotting
{
    public class WhaleSpottingContext : ApiAuthorizationDbContext<AdminUser>
    {
        public DbSet<Sighting> Sightings { get; set; }

        public WhaleSpottingContext(DbContextOptions<WhaleSpottingContext> options, IOptions<OperationalStoreOptions> operationalStoreOptions): base(options, operationalStoreOptions){}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { 
            optionsBuilder.UseNpgsql(Environment.GetEnvironmentVariable("DATABASE_URL"));            
        }
    }
}
