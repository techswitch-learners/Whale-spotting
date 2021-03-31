using System;
using System.Collections.Generic;
using System.Linq;
using whale_spotting.Models.Database;
using whale_spotting.Models.Request;
using whale_spotting.Models.Response;

using whale_spotting.Models.ApiModels;

namespace whale_spotting.Repositories
{
    public interface ISightingRepo
    {
        Sighting Submit(SubmitSightingRequest create);

        List<Sighting> GetRecentSightings();
        void AddNewSightings(List<Sighting> sightingsToAdd);
    }

    public class SightingRepo : ISightingRepo
    {
        private readonly WhaleSpottingContext _context;

        public SightingRepo(WhaleSpottingContext context)
        {
            _context = context;
        }

        public Sighting Submit(SubmitSightingRequest create)
        {
            var insertResponse =
                _context
                    .Sightings
                    .Add(new Sighting
                    {
                        Species = create.Species,
                        Quantity = create.Quantity,
                        Location = create.Location,
                        Latitude = create.Latitude,
                        Longitude = create.Longitude,
                        Description = create.Description,
                        SightedAt = create.SightedAt,
                        SubmittedByName = create.SubmittedByName,
                        SubmittedByEmail = create.SubmittedByEmail
                    });
            _context.SaveChanges();

            return insertResponse.Entity;
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

        public List<Sighting> GetRecentSightings()
        {

            var sightingList = _context.Sightings.OrderByDescending(x => x.SightedAt)
                                                                 .Take(5)
                                                               .ToList();
            return sightingList;

        }
        
    };
}
