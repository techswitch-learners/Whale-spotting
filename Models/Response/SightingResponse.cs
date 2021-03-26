using System;
using whale_spotting.Models.Database;

namespace whale_spotting.Models.Response
{
    public class SightingResponse
    {
        private readonly Sighting _sighting;

        public SightingResponse(Sighting sighting)
        {
            _sighting = sighting;
        }
        public int Id => _sighting.Id;
        public string Species => _sighting.Species;
        public int Quantity => _sighting.Quantity;
        public string Location => _sighting.Location;
        public double Latitude => _sighting.Latitude;
        public double Longitude => _sighting.Longitude;
        public string Description => _sighting.Description;
        public DateTime SightedAt => _sighting.SightedAt;
        public string SubmittedByName => _sighting.SubmittedByName;
        public string SubmittedByEmail => _sighting.SubmittedByEmail;
        
    }
}