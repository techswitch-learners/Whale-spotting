using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using whale_spotting.Models.Request;
using whale_spotting.Models.Response;
using whale_spotting.Repositories;

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

        [HttpGet("confirm-sighting/{id}")]
        public IActionResult ConfirmSighting([FromRoute] int id)
        {
            // get sighting by id from database
            var sighting = _sightings.SelectSightingById(id);
            // populate form with it (create a front end form and pass it a class object)
            // make fields editable
            return StatusCode(200);
        }
    }
}