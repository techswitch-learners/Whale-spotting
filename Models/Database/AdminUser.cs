using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using whale_spotting.Models.ApiModels;

namespace whale_spotting.Models.Database
{
    //IdentityUser is found in the metadata of the login app :S//
    public class AdminUser : IdentityUser
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Username { get; set; }
        public string HashedPassword { get; set; }
        public string Salt { get; set; }
        public string  Email { get; set; }
    }
}
