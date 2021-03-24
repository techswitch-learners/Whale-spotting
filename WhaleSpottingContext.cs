using Microsoft.EntityFrameworkCore;
using WhaleSpotting.Models.Database;

namespace WhaleSpotting
{
    public class WhaleSpottingContext : DbContext
    {
        public DbSet<Sighting> Sightings { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        { 
            optionsBuilder.UseNpgsql($"Server=localhost;port=5432;Database=WhaleSpottingDb;user id=postgres;password=techswitch");
        }
    }
}