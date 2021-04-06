using Microsoft.AspNetCore.Mvc;
using whale_spotting.Models.Response;
using whale_spotting.Repositories;
using whale_spotting.Request;
using PagedList;
using PagedList.Mvc;


namespace whale_spotting.Controllers
{
    [Route("api/search")]
    public class SearchController : ControllerBase
    {
        private readonly ISightingRepo _sightings;

        public SearchController(ISightingRepo sightings)
        {
            _sightings = sightings;
        }

        [HttpGet("")]
        public ActionResult<SearchResponse> Search([FromQuery] SightingSearchRequest searchRequest, int totalNumberOfItems)
        {
            var sightings = _sightings.Search(searchRequest);
            return SearchResponse.Create(searchRequest, sightings, totalNumberOfItems);
        }
    }
}
