using System;
using System.Collections.Generic;
using whale_spotting.Models.Database;

namespace whale_spotting.Models.Response
{
    public class RecentSightingsListResponse
    {
         public List<SightingResponse> RecentSightingsList {get; set;}

    }
}



        // public SightingResponse(Sighting sighting)
        // {
        //     _sighting = sighting;
        // }

        // public int Id => _sighting.Id;

        // public string Species => _sighting.Species;

