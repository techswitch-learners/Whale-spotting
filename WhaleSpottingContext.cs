using Microsoft.EntityFrameworkCore;
using WhaleSpotting.Models.Database;

namespace WhaleSpotting
{
    public class WhaleSpottingContext : DbContext
    {
        public DbSet<Sighting> Sightings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { 
            optionsBuilder.UseNpgsql(System.Environment.GetEnvironmentVariable("DATABASE_CONNECTION_STRING"));
        }
    }
}