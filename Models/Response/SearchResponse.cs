using System.Collections.Generic;
using System.Linq;
using whale_spotting.Models.Database;
using whale_spotting.Request;

namespace whale_spotting.Models.Response
{
    public class SearchResponse
    {
        public IEnumerable<SightingResponse> Sightings { get; }

        public SearchResponse(SearchRequest search, IEnumerable<SightingResponse> sightings)
        {
            Sightings = sightings;
        }
        public static SearchResponse Create(SearchRequest search, IEnumerable<Sighting> sightings)
        {
            var sightingModels = sightings.Select(sighting => new SightingResponse(sighting));
            return new SearchResponse(search, sightingModels);
        }
    }
}
