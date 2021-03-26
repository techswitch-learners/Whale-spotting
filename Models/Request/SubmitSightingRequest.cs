using System;
using System.ComponentModel.DataAnnotations;

namespace whale_spotting.Models.Request
{
    public class SubmitSightingRequest
    {
        [Required]
        
        public string Species { get; set; }
        public int Quantity { get; set; }
        public string Location { get; set; }
        [Required]
        public double Latitude { get; set; }
        [Required]
        public double Longitude { get; set; }
        public string Description { get; set; }
        [Required]
        public DateTime SightedAt { get; set; }
        [Required]
        public string SubmittedByName { get; set; }
        [Required]
        public string SubmittedByEmail { get; set; }
    }
}