using Microsoft.AspNetCore.Mvc;
using System;
using System.Text;
using System.Net;
using RestSharp;
using System.Collections.Generic;
using whale_spotting.Models.ApiModels;
using whale_spotting.Models.Database;
using whale_spotting.Repositories;
using System.Linq;
using System.Threading.Tasks;
using whale_spotting.Models.Response;


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
        public  ActionResult<RecentSightingsListResponse> GetRecentSightings()
        {

            var sightings = _sightings.GetRecentSightings();

            var sightingResponses = sightings.Select(sighting => new SightingResponse(sighting)).ToList();
            
            var recentSightingsListResponse = new RecentSightingsListResponse{RecentSightingsList = sightingResponses};

            return  recentSightingsListResponse;

           
        }
    }
}