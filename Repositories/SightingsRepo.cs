using whale_spotting.Models.Database;
using whale_spotting.Models.ApiModels;
using System.Collections.Generic;
using System;
using System.Linq;

namespace whale_spotting.Repositories
{
    public interface ISightingsRepo
    {
        void AddNewSightings(List<Sighting> sightingsToAdd);
    }

    public class SightingsRepo : ISightingsRepo
    {
        
        private readonly WhaleSpottingContext _context;

        public SightingsRepo(WhaleSpottingContext context)
        {
            _context = context;
        }

        public void AddNewSightings(List<Sighting> sightingsToAdd)
        {
            var newSightingIds = sightingsToAdd.Select(s => s.ApiId).Distinct().ToArray();
            var SightingsInDb = _context.Sightings.Where(s => newSightingIds.Contains(s.ApiId))
                                                    .Select(s => s.ApiId).ToArray();
            var SightingsNotInDb = sightingsToAdd.Where(s => !SightingsInDb.Contains(s.ApiId));
            _context.Sightings.AddRange(SightingsNotInDb);
            _context.SaveChanges();  
        }
    }
}