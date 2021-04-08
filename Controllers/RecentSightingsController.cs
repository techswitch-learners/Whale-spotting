using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RestSharp;
using whale_spotting.Models.ApiModels;
using whale_spotting.Models.Database;
using whale_spotting.Models.Response;
using whale_spotting.Repositories;

namespace whale_spotting.Controllers
{
    [Route("recentsightings")]
    public class RecentSightingsController : ControllerBase
    {
        private readonly ISightingRepo _sightings;

        public RecentSightingsController(ISightingRepo sightings)
        {
            _sightings = sightings;
        }

        [HttpGet("")]
        public ActionResult<RecentSightingsListResponse> GetRecentSightings()
        {
            var sightings = _sightings.GetRecentSightings();

            var sightingResponses =
                sightings
                    .Select(sighting => new SightingResponse(sighting))
                    .ToList();

            var recentSightingsListResponse =
                new RecentSightingsListResponse {
                    RecentSightingsList = sightingResponses
                };

            return recentSightingsListResponse;
        }
    }
}
