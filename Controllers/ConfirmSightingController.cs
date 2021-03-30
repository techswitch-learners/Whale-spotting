using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using whale_spotting.Models.Request;
using whale_spotting.Models.Response;
using whale_spotting.Repositories;


namespace whale_spotting.Controllers
{
    [Route("confirm-sighting")]
    public class ConfirmSightingController : ControllerBase
    {   
        private readonly ISightingRepo _confirmsSighting;
         public ConfirmSightingController(ISightingRepo confirmSighting)
        {
            _confirmSighting = confirmSighting;
        }
        
         public IActionResult <ConfirmResponse> GetByConfirmState([FromRoute] enum ConfirmState)
        {
            var unconfirmedSightings = _confirmSighting.GetByConfirmState(ConfirmState);
            return new ConfirmResponse(unconfirmedSightings);
        }

       // [HttpPost("submit")]
        // public IActionResult Submit([FromBody] SubmitSightingRequest newSighting)
        // {
        //         if (!ModelState.IsValid)
        //         {
        //             return BadRequest(ModelState);
        //         }

        //         var sighting = _sighting.Submit(newSighting);
               

        //         var url = Url.Action("GetById", new { id = sighting.Id });
        //         var sightingResponse = new SightingResponse(sighting);
               
        //         return Created(url, sightingResponse);
                
        // }
       
}
}