using Microsoft.EntityFrameworkCore.Migrations;

namespace whale_spotting.Migrations
{
    public partial class AddConfirmedColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ConfirmState",
                table: "Sightings",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ConfirmState",
                table: "Sightings");
        }
    }
}
