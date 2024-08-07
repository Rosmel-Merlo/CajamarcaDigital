using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persona.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class initial001 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "per");

            migrationBuilder.CreateTable(
                name: "Personas",
                schema: "per",
                columns: table => new
                {
                    PersonaId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Created = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modified = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Deleted = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Personas", x => x.PersonaId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Personas",
                schema: "per");
        }
    }
}
