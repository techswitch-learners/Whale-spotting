using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace whale_spotting.Models.ApiModels
{
    public class SightingApiModel
    {
        public string Id { get; set; }
        public string Species { get; set; }
        public string Quantity { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Location { get; set; }
        public DateTime SightedAt { get; set; }
        public DateTime CreatedAt { get; set; }       
        public DateTime UpdatedAt { get; set; }
        public string OrcaType { get; set; }
    }
}