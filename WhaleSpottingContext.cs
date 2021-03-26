using Microsoft.EntityFrameworkCore;
using whale_spotting.Models.Database;
using System;
using System.IO;

namespace whale_spotting
{
    public class WhaleSpottingContext : DbContext
    {
        public DbSet<Sighting> Sightings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { 
            // optionsBuilder.UseNpgsql(Environment.GetEnvironmentVariable("DATABASE_URL"));
            optionsBuilder.UseNpgsql("Server=localhost;port=5432;Database=WhaleSpottingDb;user id=postgres;password=techswitch;");
        }
    }
}