using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace whale_spotting.Migrations
{
    public partial class createdatcolumnadd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Sightings",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: DateTime.Now);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Sightings");
        }
    }
}
