using System;
using System.Collections.Generic;
using System.Linq;
using whale_spotting.Models.Database;
using whale_spotting.Models.Request;
using whale_spotting.Request;

namespace whale_spotting.Repositories
{
    public interface ISightingRepo
    {
        Sighting Submit(SubmitSightingRequest create);

        IEnumerable<Sighting> GetByConfirmState();

        void AddNewSightings(List<Sighting> sightingsToAdd);

        IEnumerable<Sighting> Search(SightingSearchRequest searchRequest);
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
                    .Add(new Sighting {
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

        public IEnumerable<Sighting> GetByConfirmState()
        {
            return _context
                .Sightings
                .Where(s => s.ConfirmState == ConfirmState.Review);
        }

        public void AddNewSightings(List<Sighting> sightingsToAdd)
        {
            var newSightingIds =
                sightingsToAdd.Select(s => s.ApiId).Distinct().ToArray();
            var SightingsInDb =
                _context
                    .Sightings
                    .Where(s => newSightingIds.Contains(s.ApiId))
                    .Select(s => s.ApiId)
                    .ToArray();
            var SightingsNotInDb =
                sightingsToAdd.Where(s => !SightingsInDb.Contains(s.ApiId));
            SightingsNotInDb
                .ToList()
                .ForEach(x => x.ConfirmState = ConfirmState.Confirmed);
            _context.Sightings.AddRange(SightingsNotInDb.ToArray());
            _context.SaveChanges();
        }

        public IEnumerable<Sighting> Search(SightingSearchRequest searchRequest)
        {
            IQueryable<Sighting> query = _context.Sightings;

            if (!string.IsNullOrEmpty(searchRequest.Species))
            {
                query =
                    query
                        .Where(e =>
                            e
                                .Species
                                .ToLower()
                                .Contains(searchRequest.Species.ToLower()));
            }
            if (searchRequest.SightedAt.HasValue)
            {
                query =
                    query
                        .Where(e =>
                            e.SightedAt >= searchRequest.SightedAt.Value &&
                            e.SightedAt <
                            searchRequest.SightedAt.Value.AddDays(1));
            }
            if (!string.IsNullOrEmpty(searchRequest.Location))
            {
                query =
                    query
                        .Where(e =>
                            e
                                .Location
                                .ToLower()
                                .Contains(searchRequest.Location.ToLower()));
            }
            return query
                .OrderByDescending(s => s.SightedAt)
                .Skip((searchRequest.Page - 1) * searchRequest.PageSize)
                .Take(searchRequest.PageSize);
        }
    }
}
