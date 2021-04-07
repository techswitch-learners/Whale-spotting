using System.Collections.Generic;
using System.Linq;
using whale_spotting.Models.Database;
using whale_spotting.Request;

namespace whale_spotting.Models.Response
{
    public class ListResponse
    {
        private readonly string _path;

        private readonly string _filters;

        public IEnumerable<SightingResponse> Sightings { get; }

        public int TotalNumberOfItems { get; }

        public int Page { get; }

        public int PageSize { get; }

        public string NextPage =>
            !HasNextPage()
                ? null
                : $"/{_path}?page={Page + 1}&pageNumber={PageSize}{_filters}";

        public string PreviousPage =>
            Page <= 1
                ? null
                : $"/{_path}?page={Page - 1}&pageNumber={PageSize}{_filters}";

        public ListResponse(
            SearchRequest search,
            IEnumerable<SightingResponse> sightings,
            int totalNumberOfItems,
            string path
        )
        {
            Sightings = sightings;
            TotalNumberOfItems = totalNumberOfItems;
            Page = search.Page;
            PageSize = search.PageSize;
            _path = path;
            _filters = search.Filters;
        }

        private bool HasNextPage()
        {
            return Page * PageSize < TotalNumberOfItems;
        }
    }

    public class SearchResponse : ListResponse
    {
        private SearchResponse(
            SearchRequest search,
            IEnumerable<SightingResponse> sightings,
            int totalNumberOfItems
        ) :
            base(search, sightings, totalNumberOfItems, "sightings")
        {
        }

        public static SearchResponse
        Create(
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
