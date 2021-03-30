using System;
using whale_spotting.Models.Database;

namespace whale_spotting.Models.Response
{
    public class ConfirmResponse
    {
        private readonly Sighting _sighting;

        public ConfirmResponse(Sighting sighting)
        {
            _sighting = sighting;
        }
         public int Id => _sighting.Id;

        public string Species => _sighting.Species;

        public DateTime SightedAt => _sighting.SightedAt;

        public string SubmittedByName => _sighting.SubmittedByName;

        public string SubmittedByEmail => _sighting.SubmittedByEmail;
        
    }
}