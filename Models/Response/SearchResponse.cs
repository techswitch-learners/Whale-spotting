using System.Collections.Generic;
using System.Linq;
using whale_spotting.Models.Database;
using whale_spotting.Request;

namespace whale_spotting.Models.Response
{
    public class SearchResponse
    {
        private readonly string _path;

        public IEnumerable<SightingResponse> Sightings { get; }

        public SearchResponse(
            SearchRequest search,
            IEnumerable<SightingResponse> sightings,
            string path
        )
        {
            Sightings = sightings;
            _path = path;
        }
    }

    public class SightingsListResponse : SearchResponse
    {
        private SightingsListResponse(
            SearchRequest search,
            IEnumerable<SightingResponse> sightings
        ) :
            base(search, sightings, "sightings")
        {
        }

        public static SightingsListResponse Create(SearchRequest search, IEnumerable<Sighting> sightings)
        {
            var sightingModels =
                sightings.Select(sighting => new SightingResponse(sighting));
            return new SightingsListResponse(search, sightingModels);
        }
    }
}
