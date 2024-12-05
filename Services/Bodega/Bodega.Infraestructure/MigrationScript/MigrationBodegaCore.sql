IF OBJECT_ID(N'[bodega].[_EFMigrationBodegaHistory]') IS NULL
BEGIN
    IF SCHEMA_ID(N'bodega') IS NULL EXEC(N'CREATE SCHEMA [bodega];');
    CREATE TABLE [bodega].[_EFMigrationBodegaHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK__EFMigrationBodegaHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
IF NOT EXISTS (
    SELECT * FROM [bodega].[_EFMigrationBodegaHistory]
    WHERE [MigrationId] = N'20241203050304_initial1.0'
)
BEGIN
    IF SCHEMA_ID(N'bodega') IS NULL EXEC(N'CREATE SCHEMA [bodega];');
END;

IF NOT EXISTS (
    SELECT * FROM [bodega].[_EFMigrationBodegaHistory]
    WHERE [MigrationId] = N'20241203050304_initial1.0'
)
BEGIN
    CREATE TABLE [bodega].[Categorias] (
        [CategoriaId] uniqueidentifier NOT NULL,
        [Nombre] nvarchar(max) NOT NULL,
        [Descripcion] nvarchar(max) NOT NULL,
        [Codigo] nvarchar(max) NOT NULL,
        [Creado] datetime2 NOT NULL,
        [CreadoPor] datetime2 NOT NULL,
        [Modificado] datetime2 NULL,
        [ModificadoPor] datetime2 NULL,
        [Eliminado] datetime2 NULL,
        [EliminadoPor] datetime2 NULL,
        CONSTRAINT [PK_Categorias] PRIMARY KEY ([CategoriaId])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [bodega].[_EFMigrationBodegaHistory]
    WHERE [MigrationId] = N'20241203050304_initial1.0'
)
BEGIN
    CREATE TABLE [bodega].[Proveedores] (
        [ProveedorId] uniqueidentifier NOT NULL,
        [Ruc] nvarchar(max) NOT NULL,
        [NombreContacto] nvarchar(max) NOT NULL,
        [TelefonoContacto] nvarchar(max) NOT NULL,
        [Telefono] nvarchar(max) NOT NULL,
        [Email] nvarchar(max) NOT NULL,
        [Direccion] nvarchar(max) NOT NULL,
        [Creado] datetime2 NOT NULL,
        [CreadoPor] datetime2 NOT NULL,
        [Modificado] datetime2 NULL,
        [ModificadoPor] datetime2 NULL,
        [Eliminado] datetime2 NULL,
        [EliminadoPor] datetime2 NULL,
        CONSTRAINT [PK_Proveedores] PRIMARY KEY ([ProveedorId])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [bodega].[_EFMigrationBodegaHistory]
    WHERE [MigrationId] = N'20241203050304_initial1.0'
)
BEGIN
    CREATE TABLE [bodega].[Secciones] (
        [SeccionId] uniqueidentifier NOT NULL,
        [Nombre] nvarchar(max) NOT NULL,
        [Description] nvarchar(max) NULL,
        [Creado] datetime2 NOT NULL,
        [CreadoPor] datetime2 NOT NULL,
        [Modificado] datetime2 NULL,
        [ModificadoPor] datetime2 NULL,
        [Eliminado] datetime2 NULL,
        [EliminadoPor] datetime2 NULL,
        CONSTRAINT [PK_Secciones] PRIMARY KEY ([SeccionId])
    );
END;

IF NOT EXISTS (
    SELECT * FROM [bodega].[_EFMigrationBodegaHistory]
    WHERE [MigrationId] = N'20241203050304_initial1.0'
)
BEGIN
    CREATE TABLE [bodega].[Productos] (
        [ProductoId] uniqueidentifier NOT NULL,
        [Nombre] nvarchar(20) NOT NULL,
        [Descripcion] nvarchar(60) NOT NULL,
        [PrecioCompra] decimal(18,4) NOT NULL,
        [PrecioVenta] decimal(18,4) NOT NULL,
        [CategoriaId] uniqueidentifier NOT NULL,
        [StockMinimo] int NOT NULL,
        [Codigo] nvarchar(max) NOT NULL,
        [Creado] datetime2 NOT NULL,
        [CreadoPor] datetime2 NOT NULL,
        [Modificado] datetime2 NULL,
        [ModificadoPor] datetime2 NULL,
        [Eliminado] datetime2 NULL,
        [EliminadoPor] datetime2 NULL,
        CONSTRAINT [PK_Productos] PRIMARY KEY ([ProductoId]),
        CONSTRAINT [FK_Productos_Categorias_CategoriaId] FOREIGN KEY ([CategoriaId]) REFERENCES [bodega].[Categorias] ([CategoriaId]) ON DELETE NO ACTION
    );
END;

IF NOT EXISTS (
    SELECT * FROM [bodega].[_EFMigrationBodegaHistory]
    WHERE [MigrationId] = N'20241203050304_initial1.0'
)
BEGIN
    CREATE TABLE [bodega].[Inventarios] (
        [ProductoId] uniqueidentifier NOT NULL,
        [SeccionId] uniqueidentifier NOT NULL,
        [Cantidad] int NOT NULL,
        [Creado] datetime2 NOT NULL,
        [CreadoPor] datetime2 NOT NULL,
        [Modificado] datetime2 NULL,
        [ModificadoPor] datetime2 NULL,
        [Eliminado] datetime2 NULL,
        [EliminadoPor] datetime2 NULL,
        CONSTRAINT [PK_Inventarios] PRIMARY KEY ([ProductoId], [SeccionId]),
        CONSTRAINT [FK_Inventarios_Productos_ProductoId] FOREIGN KEY ([ProductoId]) REFERENCES [bodega].[Productos] ([ProductoId]) ON DELETE CASCADE,
        CONSTRAINT [FK_Inventarios_Secciones_SeccionId] FOREIGN KEY ([SeccionId]) REFERENCES [bodega].[Secciones] ([SeccionId]) ON DELETE CASCADE
    );
END;

IF NOT EXISTS (
    SELECT * FROM [bodega].[_EFMigrationBodegaHistory]
    WHERE [MigrationId] = N'20241203050304_initial1.0'
)
BEGIN
    CREATE TABLE [bodega].[ProveedoresProductos] (
        [ProveedorId] uniqueidentifier NOT NULL,
        [ProductoId] uniqueidentifier NOT NULL,
        [Precio] decimal(18,4) NOT NULL,
        [FechaSuministro] datetime2 NOT NULL,
        CONSTRAINT [PK_ProveedoresProductos] PRIMARY KEY ([ProveedorId], [ProductoId]),
        CONSTRAINT [FK_ProveedoresProductos_Productos_ProductoId] FOREIGN KEY ([ProductoId]) REFERENCES [bodega].[Productos] ([ProductoId]) ON DELETE NO ACTION,
        CONSTRAINT [FK_ProveedoresProductos_Proveedores_ProveedorId] FOREIGN KEY ([ProveedorId]) REFERENCES [bodega].[Proveedores] ([ProveedorId]) ON DELETE NO ACTION
    );
END;

IF NOT EXISTS (
    SELECT * FROM [bodega].[_EFMigrationBodegaHistory]
    WHERE [MigrationId] = N'20241203050304_initial1.0'
)
BEGIN
    CREATE INDEX [IX_Inventarios_SeccionId] ON [bodega].[Inventarios] ([SeccionId]);
END;

IF NOT EXISTS (
    SELECT * FROM [bodega].[_EFMigrationBodegaHistory]
    WHERE [MigrationId] = N'20241203050304_initial1.0'
)
BEGIN
    CREATE INDEX [IX_Productos_CategoriaId] ON [bodega].[Productos] ([CategoriaId]);
END;

IF NOT EXISTS (
    SELECT * FROM [bodega].[_EFMigrationBodegaHistory]
    WHERE [MigrationId] = N'20241203050304_initial1.0'
)
BEGIN
    CREATE INDEX [IX_ProveedorProducto_ProductoId] ON [bodega].[ProveedoresProductos] ([ProductoId]);
END;

IF NOT EXISTS (
    SELECT * FROM [bodega].[_EFMigrationBodegaHistory]
    WHERE [MigrationId] = N'20241203050304_initial1.0'
)
BEGIN
    CREATE INDEX [IX_ProveedorProducto_ProveedorId] ON [bodega].[ProveedoresProductos] ([ProveedorId]);
END;

IF NOT EXISTS (
    SELECT * FROM [bodega].[_EFMigrationBodegaHistory]
    WHERE [MigrationId] = N'20241203050304_initial1.0'
)
BEGIN
    INSERT INTO [bodega].[_EFMigrationBodegaHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20241203050304_initial1.0', N'9.0.0');
END;

COMMIT;
GO

