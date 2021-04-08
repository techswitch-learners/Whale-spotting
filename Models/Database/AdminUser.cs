using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using whale_spotting.Models.ApiModels;
using Microsoft.AspNetCore.Identity;

namespace whale_spotting.Models.Database
{
    public class AdminUser : IdentityUser
    {
    }
}
