using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using whale_spotting.Models.ApiModels;

namespace whale_spotting.Models.Database
{
    public enum ConfirmState {
        Review,
        Confirmed,
        Deleted
    }
    public class Sighting
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string ApiId { get; set; }
        public string Species { get; set; }
        public string Quantity { get; set; }
        public string Location { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Description { get; set; }
        public DateTime SightedAt { get; set; }
        public string SubmittedByName { get; set; }
        public string SubmittedByEmail { get; set; }
        public ConfirmState ConfirmState { get; set; }

        public Sighting()
        {
            
        }
        public Sighting(SightingApiModel apiModel) 
        {
            ApiId = apiModel.Id;
            Species = apiModel.Species;
            Quantity = apiModel.Quantity;
            Location = apiModel.Location;
            Latitude = apiModel.Latitude;
            Longitude = apiModel.Longitude;
            Description = apiModel.Description;
            SightedAt = apiModel.SightedAt;
        }
    }
}
