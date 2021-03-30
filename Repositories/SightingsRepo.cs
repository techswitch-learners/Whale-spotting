using System;
using System.Collections.Generic;
using System.Linq;
using whale_spotting.Models.Database;


namespace whale_spotting.Repositories
{
    public interface ISightingRepo
    {
      //  Sighting Submit(SubmitSightingRequest create);
         IEnumerable<Sighting> GetByConfirmState();
         
    }

    public class SightingRepo : ISightingRepo
    {
        private readonly WhaleSpottingContext _context;

        public SightingRepo(WhaleSpottingContext context)
        {
            _context = context;
        }
        public IEnumerable<Sighting> GetByConfirmState()
        {
            return _context.Sightings
            .Where(s => s.ConfirmState == ConfirmState.Review);
        }

        // public Sighting Submit(SubmitSightingRequest create)
        // {
        //     var insertResponse =
        //         _context
        //             .Sightings
        //             .Add(new Sighting {
        //                 Species = create.Species,
        //                 Quantity = create.Quantity,
        //                 Location = create.Location,
        //                 Latitude = create.Latitude,
        //                 Longitude = create.Longitude,
        //                 Description = create.Description,
        //                 SightedAt = create.SightedAt,
        //                 SubmittedByName = create.SubmittedByName,
        //                 SubmittedByEmail = create.SubmittedByEmail
        //             });
        //     _context.SaveChanges();

        //     return insertResponse.Entity;
        // }
    }
}