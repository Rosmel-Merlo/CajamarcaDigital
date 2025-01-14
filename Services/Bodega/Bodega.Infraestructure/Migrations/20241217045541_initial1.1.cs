using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bodega.Infraestructure.Migrations
{
    /// <inheritdoc />
    public partial class initial11 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Creado",
                schema: "bodega",
                table: "ProveedoresProductos",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "CreadoPor",
                schema: "bodega",
                table: "ProveedoresProductos",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "Eliminado",
                schema: "bodega",
                table: "ProveedoresProductos",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "EliminadoPor",
                schema: "bodega",
                table: "ProveedoresProductos",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "Modificado",
                schema: "bodega",
                table: "ProveedoresProductos",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "ModificadoPor",
                schema: "bodega",
                table: "ProveedoresProductos",
                type: "datetime2",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Creado",
                schema: "bodega",
                table: "ProveedoresProductos");

            migrationBuilder.DropColumn(
                name: "CreadoPor",
                schema: "bodega",
                table: "ProveedoresProductos");

            migrationBuilder.DropColumn(
                name: "Eliminado",
                schema: "bodega",
                table: "ProveedoresProductos");

            migrationBuilder.DropColumn(
                name: "EliminadoPor",
                schema: "bodega",
                table: "ProveedoresProductos");

            migrationBuilder.DropColumn(
                name: "Modificado",
                schema: "bodega",
                table: "ProveedoresProductos");

            migrationBuilder.DropColumn(
                name: "ModificadoPor",
                schema: "bodega",
                table: "ProveedoresProductos");
        }
    }
}
