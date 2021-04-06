using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using whale_spotting.Models.Request;
using whale_spotting.Models.Response;
using whale_spotting.Repositories;
using whale_spotting.Models.Database;

namespace whale_spotting.Controllers
{
    [Route("admin")]
    public class AdminController : ControllerBase
    {
        private readonly ISightingRepo _sightings;
        public AdminController(ISightingRepo sightings)
        {
            _sightings = sightings;
        }

        [HttpGet("getSighting/{id}")]
        public Sighting GetSightingDetails([FromRoute] int id)
        {
            var sighting = _sightings.SelectSightingById(id);
            return sighting;
        }

        [HttpPost("confirmSighting/{id}")]
        public Sighting ConfirmSighting([FromRoute] int id)
        {
            var SightingToConfirm = _sightings.SelectSightingById(id);
            SightingToConfirm.ConfirmState = ConfirmState.Confirmed;
            var ConfirmedSighting = _sightings.ConfirmSighting(SightingToConfirm);
            return ConfirmedSighting;
        }
    }
}