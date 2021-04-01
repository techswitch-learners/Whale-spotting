using System;
using System.Collections.Generic;
using whale_spotting.Models.Database;

namespace whale_spotting.Models.Response
{
    public class ConfirmListResponse
    {
        
        public IEnumerable<Sighting> sightings { get;set; }
        
        public ConfirmListResponse(IEnumerable<Sighting> Sightings)
        {
            sightings = Sightings;
        }
    }
}