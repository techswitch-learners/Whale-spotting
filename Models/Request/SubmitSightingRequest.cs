using System;
using System.ComponentModel.DataAnnotations;

namespace whale_spotting.Models.Request
{
    public class SubmitSightingRequest
    {
        [Required]
        [StringLength(70)]
        public string Species { get; set; }
        [StringLength(70)]
        public string Quantity { get; set; }
        [StringLength(70)]
        public string Location { get; set; }
        [Required]
        public double Latitude { get; set; }
        [Required]
        public double Longitude { get; set; }
        [StringLength(100)]
        public string Description { get; set; }
        [Required]
        public DateTime SightedAt { get; set; }
        [Required]
        [StringLength(70)]
        public string SubmittedByName { get; set; }
        [Required]
        public string SubmittedByEmail { get; set; }
    }
}