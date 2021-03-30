using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using whale_spotting.Models.Response;
using whale_spotting.Repositories;


namespace whale_spotting.Controllers
{
    [Route("confirm-sighting")]
    public class ConfirmSightingController : ControllerBase
    {   
        private readonly ISightingRepo _confirmSighting;
         public ConfirmSightingController(ISightingRepo confirmSighting)
        {
            _confirmSighting = confirmSighting;
        }
        
        [HttpGet("")]
         public ActionResult <ConfirmListResponse> GetByConfirmState()
        {
            var unconfirmedSightings = _confirmSighting.GetByConfirmState();
            return new ConfirmListResponse(unconfirmedSightings);
        }
       
    }
}