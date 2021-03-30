using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using whale_spotting.Models.Request;
using whale_spotting.Models.Response;
using whale_spotting.Repositories;


namespace whale_spotting.Controllers
{
    [Route("api/submit-sighting")]
    public class SightingController : ControllerBase
    {   
        private readonly ISightingRepo _sighting;
         public SightingController(ISightingRepo sighting)
        {
            _sighting = sighting;
        }

        [HttpPost("submit")]
        public IActionResult Submit([FromBody] SubmitSightingRequest newSighting)
        {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                var sighting = _sighting.Submit(newSighting);
               

                var url = Url.Action("GetById", new { id = sighting.Id });
                var sightingResponse = new SightingResponse(sighting);
               
                return Created(url, sightingResponse);
                
        }
}
}