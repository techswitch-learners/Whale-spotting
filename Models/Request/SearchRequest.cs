using whale_spotting.Models.Database;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;
using System;

namespace whale_spotting.Request
{
    public class SearchRequest
    {
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
       
    }
    
    public class SightingSearchRequest : SearchRequest
    {
        public string Species {get; set; }
        public string Location {get; set; }
         
        public DateTime? SightedAt { get; set; }

              
    }

}