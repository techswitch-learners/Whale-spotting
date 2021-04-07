using System.Collections.Generic;
using System.Linq;
using whale_spotting.Models.Database;
using whale_spotting.Request;

namespace whale_spotting.Models.Response
{
    public class SearchResponse
    {
        public IEnumerable<SightingResponse> Sightings { get; }

        public int TotalNumberOfItems { get; }

        public int Page { get; }

        public int PageSize { get; }

        public SearchResponse(
            SearchRequest search,
            IEnumerable<SightingResponse> sightings,
            int totalNumberOfItems
        )
        {
            Sightings = sightings;
            TotalNumberOfItems = totalNumberOfItems;
            Page = search.Page;
            PageSize = search.PageSize;
        }

        public static SearchResponse Create(
            SearchRequest search,
            IEnumerable<Sighting> sightings,
            int totalNumberOfItems
        )
        {
            var sightingModels =
                sightings.Select(sighting => new SightingResponse(sighting));
            return new SearchResponse(search,
                sightingModels,
                totalNumberOfItems);
        }
    }
}
