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
            var ConfirmedSighting = _sightings.ConfirmSighting(SightingToConfirm);
            return ConfirmedSighting;
        }

        [HttpPost("updateAndConfirmSighting/{id}")]
        public Sighting updateAndConfirmSighting([FromBody] Sighting SightingToUpdate)
        {
            var sightingUpdated =_sightings.UpdateAndConfirmSighting(SightingToUpdate);
            return sightingUpdated;
        }

        [HttpPost("deleteSighting/{id}")]
        public Sighting DeleteSighting([FromRoute] int id)
        {
            var sighting = _sightings.SelectSightingById(id);
            var sightingDeleted = _sightings.DeleteSighting(sighting);
            return sightingDeleted;
        }

        [HttpPost("restoreSighting/{id}")]
        public Sighting RestoreSighting([FromRoute] int id)
        {
            var sighting = _sightings.SelectSightingById(id);
            var sightingRestored = _sightings.RestoreSighting(sighting);
            return sightingRestored;
        }
    }
}