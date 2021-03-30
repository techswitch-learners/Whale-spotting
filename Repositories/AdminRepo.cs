using System;
using System.Collections.Generic;
using System.Linq;
using whale_spotting.Models.Database;
using whale_spotting.Models.Request;

using whale_spotting.Models.ApiModels;

namespace whale_spotting.Repositories
{
    public interface IAdminRepo
    {
        
    }

    public class AdminRepo : IAdminRepo
    {
        private readonly WhaleSpottingContext _context;

        public AdminRepo(WhaleSpottingContext context)
        {
            _context = context;
        }

       
    }
}
