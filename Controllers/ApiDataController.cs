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

namespace whale_spotting.Controllers
{
    [ApiController]
    [Route("/getapidata")]
    public class ApiDataController : ControllerBase
    {     
        private readonly ISightingsRepo _sightings;
        public ApiDataController(ISightingsRepo sightings)
        {
            _sightings = sightings;
        }

        [HttpPost("")]
        public async Task<IActionResult> GetApiData() 
        {
            int page = 1;
            bool pageHasResults = true;
            var client = new RestClient("http://hotline.whalemuseum.org");
            List<Sighting> sightingsToAdd = new List<Sighting>();
            
            while (pageHasResults == true)
            {
                var request = new RestRequest($"api.json?limit=1000&page={page}", DataFormat.Json);
                var apiSightings = await client.GetAsync<List<SightingApiModel>>(request);
                if (apiSightings.Any())
                {
                    sightingsToAdd.AddRange(apiSightings.Select(apiSighting => new Sighting(apiSighting)).ToList());
                    page++;                              
                }
                else 
                {
                    pageHasResults = false;
                }                
            }          

            if (sightingsToAdd.Any())            
            {    
                _sightings.AddNewSightings(sightingsToAdd);
            }      
            return NoContent();  
        }
    }
}

