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
    [Route("/populatedatabase")]
    public class ApiDataController : ControllerBase
    {
        [HttpGet("")]
        public async void PopulateDatabase() {
            // make a call to the API to get the json. save it in json.
            var client = new RestClient("http://hotline.whalemuseum.org");
            var request = new RestRequest("api.json", DataFormat.Json);
            // var response = client.Get<List<SightingApiModel>>(request);
            var apiSightings = await client.GetAsync<List<SightingApiModel>>(request);

            List<Sighting> sightingsToAdd = new List<Sighting>();
            foreach(var apiSighting in apiSightings)
            {
                // map the class list to database class
                Sighting sighting = new Sighting(apiSighting);
                sightingsToAdd.Add(sighting);
            }
            Console.WriteLine(sightingsToAdd[0].ApiId);

            using (var context = new WhaleSpottingContext())
            {
                if (!context.Sightings.Any())
                {
                    context.Sightings.AddRange(sightingsToAdd);
                    context.SaveChanges();
                }
            }          
        }
    }
}