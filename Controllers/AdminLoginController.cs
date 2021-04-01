using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using whale_spotting.Models.Request;
using whale_spotting.Models.Response;
using whale_spotting.Repositories;
using Microsoft.AspNetCore.Authorization;

namespace whale_spotting.Controllers{
    
    [ApiController]
    [Route("/admin")]
    // [Authorize]
    public class AdminLoginController : ControllerBase {
        private readonly IAdminRepo _admins;
        public AdminLoginController(IAdminRepo admins)
        {
            _admins = admins;
        }
    }
}