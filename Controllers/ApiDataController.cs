using Microsoft.AspNetCore.Mvc;
using System;
using System.Text;
using System.Net;
using RestSharp;
using System.Collections.Generic;
using whale_spotting.Models.ApiModels;
using whale_spotting.Models.Database;
using System.Linq;

namespace whale_spotting.Controllers
{
    [ApiController]
    [Route("/getapidata")]
    public class ApiDataController : ControllerBase
    {
        [HttpPost("")]
        public async void GetApiData() 
        {
            int page = 1;
            bool Flag = true;
            var client = new RestClient("http://hotline.whalemuseum.org");
            List<Sighting> sightingsToAdd = new List<Sighting>();
            
            while (Flag == true)
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
                    Flag = false;
                }                
            }
            
            if (sightingsToAdd.Any())            
            {                
                using (var context = new WhaleSpottingContext())
                {
                    var newSightingIds = sightingsToAdd.Select(s => s.ApiId).Distinct().ToArray();
                    var SightingsInDb = context.Sightings.Where(s => newSightingIds.Contains(s.ApiId))
                                                         .Select(s => s.ApiId).ToArray();
                    var SightingsNotInDb = sightingsToAdd.Where(s => !SightingsInDb.Contains(s.ApiId));
                    context.Sightings.AddRange(SightingsNotInDb);
                    context.SaveChanges();        
                }   
            }          
        }
    }
}

