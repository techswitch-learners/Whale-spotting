using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using whale_spotting.Models.Request;
using whale_spotting.Models.Response;
using whale_spotting.Repositories;
using whale_spotting.Request;

namespace whale_spotting.Controllers
{
    [Route("api/search")]
    public class SearchController : ControllerBase
    {
        private readonly ISightingRepo _sighting;

        public SearchController(ISightingRepo sighting)
        {
            _sighting = sighting;
        }

        [HttpGet("")]
        public ActionResult<SightingsListResponse> Search([FromQuery] SightingSearchRequest searchRequest)
        {
            var sightings = _sighting.Search(searchRequest);
            return SightingsListResponse.Create(searchRequest, sightings);
        }
    }
}
