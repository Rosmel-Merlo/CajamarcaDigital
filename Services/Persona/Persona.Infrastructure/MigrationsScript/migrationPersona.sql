IF OBJECT_ID(N'[Persona].[__EFMigrationHistory]') IS NULL
BEGIN
    IF SCHEMA_ID(N'Persona') IS NULL EXEC(N'CREATE SCHEMA [Persona];');
    CREATE TABLE [Persona].[__EFMigrationHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS (
    SELECT * FROM [Persona].[__EFMigrationHistory]
    WHERE [MigrationId] = N'20240807022146_initial0.0.1'
)
BEGIN
    IF SCHEMA_ID(N'per') IS NULL EXEC(N'CREATE SCHEMA [per];');
END;
GO

IF NOT EXISTS (
    SELECT * FROM [Persona].[__EFMigrationHistory]
    WHERE [MigrationId] = N'20240807022146_initial0.0.1'
)
BEGIN
    CREATE TABLE [per].[Personas] (
        [PersonaId] nvarchar(450) NOT NULL,
        [Created] datetime2 NOT NULL,
        [Modified] datetime2 NULL,
        [Deleted] datetime2 NULL,
        CONSTRAINT [PK_Personas] PRIMARY KEY ([PersonaId])
    );
END;
GO

IF NOT EXISTS (
    SELECT * FROM [Persona].[__EFMigrationHistory]
    WHERE [MigrationId] = N'20240807022146_initial0.0.1'
)
BEGIN
    INSERT INTO [Persona].[__EFMigrationHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20240807022146_initial0.0.1', N'8.0.7');
END;
GO

COMMIT;
GO

