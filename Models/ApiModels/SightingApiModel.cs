using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace whale_spotting.Models.ApiModels
{
    public class SightingApiModel
    {
        public string id { get; set; }
        public string species { get; set; }
        public string quantity { get; set; }
        public string description { get; set; }
        public string url { get; set; }
        public double latitude { get; set; }
        public double longitude { get; set; }
        public string location { get; set; }
        public DateTime sighted_at { get; set; }
        public DateTime created_at { get; set; }       
        public DateTime updated_at { get; set; }
        public string orca_type { get; set; }
    }
}