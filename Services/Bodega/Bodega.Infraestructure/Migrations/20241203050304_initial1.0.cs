using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bodega.Infraestructure.Migrations
{
    /// <inheritdoc />
    public partial class initial10 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "bodega");

            migrationBuilder.CreateTable(
                name: "Categorias",
                schema: "bodega",
                columns: table => new
                {
                    CategoriaId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Codigo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Creado = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreadoPor = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modificado = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ModificadoPor = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Eliminado = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EliminadoPor = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorias", x => x.CategoriaId);
                });

            migrationBuilder.CreateTable(
                name: "Proveedores",
                schema: "bodega",
                columns: table => new
                {
                    ProveedorId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Ruc = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NombreContacto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TelefonoContacto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Telefono = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Direccion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Creado = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreadoPor = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modificado = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ModificadoPor = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Eliminado = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EliminadoPor = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proveedores", x => x.ProveedorId);
                });

            migrationBuilder.CreateTable(
                name: "Secciones",
                schema: "bodega",
                columns: table => new
                {
                    SeccionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Creado = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreadoPor = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modificado = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ModificadoPor = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Eliminado = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EliminadoPor = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Secciones", x => x.SeccionId);
                });

            migrationBuilder.CreateTable(
                name: "Productos",
                schema: "bodega",
                columns: table => new
                {
                    ProductoId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Nombre = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Descripcion = table.Column<string>(type: "nvarchar(60)", maxLength: 60, nullable: false),
                    PrecioCompra = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    PrecioVenta = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    CategoriaId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    StockMinimo = table.Column<int>(type: "int", nullable: false),
                    Codigo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Creado = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreadoPor = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modificado = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ModificadoPor = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Eliminado = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EliminadoPor = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Productos", x => x.ProductoId);
                    table.ForeignKey(
                        name: "FK_Productos_Categorias_CategoriaId",
                        column: x => x.CategoriaId,
                        principalSchema: "bodega",
                        principalTable: "Categorias",
                        principalColumn: "CategoriaId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Inventarios",
                schema: "bodega",
                columns: table => new
                {
                    ProductoId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    SeccionId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Cantidad = table.Column<int>(type: "int", nullable: false),
                    Creado = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreadoPor = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Modificado = table.Column<DateTime>(type: "datetime2", nullable: true),
                    ModificadoPor = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Eliminado = table.Column<DateTime>(type: "datetime2", nullable: true),
                    EliminadoPor = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Inventarios", x => new { x.ProductoId, x.SeccionId });
                    table.ForeignKey(
                        name: "FK_Inventarios_Productos_ProductoId",
                        column: x => x.ProductoId,
                        principalSchema: "bodega",
                        principalTable: "Productos",
                        principalColumn: "ProductoId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Inventarios_Secciones_SeccionId",
                        column: x => x.SeccionId,
                        principalSchema: "bodega",
                        principalTable: "Secciones",
                        principalColumn: "SeccionId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProveedoresProductos",
                schema: "bodega",
                columns: table => new
                {
                    ProveedorId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductoId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Precio = table.Column<decimal>(type: "decimal(18,4)", nullable: false),
                    FechaSuministro = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProveedoresProductos", x => new { x.ProveedorId, x.ProductoId });
                    table.ForeignKey(
                        name: "FK_ProveedoresProductos_Productos_ProductoId",
                        column: x => x.ProductoId,
                        principalSchema: "bodega",
                        principalTable: "Productos",
                        principalColumn: "ProductoId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_ProveedoresProductos_Proveedores_ProveedorId",
                        column: x => x.ProveedorId,
                        principalSchema: "bodega",
                        principalTable: "Proveedores",
                        principalColumn: "ProveedorId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Inventarios_SeccionId",
                schema: "bodega",
                table: "Inventarios",
                column: "SeccionId");

            migrationBuilder.CreateIndex(
                name: "IX_Productos_CategoriaId",
                schema: "bodega",
                table: "Productos",
                column: "CategoriaId");

            migrationBuilder.CreateIndex(
                name: "IX_ProveedorProducto_ProductoId",
                schema: "bodega",
                table: "ProveedoresProductos",
                column: "ProductoId");

            migrationBuilder.CreateIndex(
                name: "IX_ProveedorProducto_ProveedorId",
                schema: "bodega",
                table: "ProveedoresProductos",
                column: "ProveedorId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Inventarios",
                schema: "bodega");

            migrationBuilder.DropTable(
                name: "ProveedoresProductos",
                schema: "bodega");

            migrationBuilder.DropTable(
                name: "Secciones",
                schema: "bodega");

            migrationBuilder.DropTable(
                name: "Productos",
                schema: "bodega");

            migrationBuilder.DropTable(
                name: "Proveedores",
                schema: "bodega");

            migrationBuilder.DropTable(
                name: "Categorias",
                schema: "bodega");
        }
    }
}
