IF OBJECT_ID(N'__EFMigrationsHistory') IS NULL
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK_HistoryRow] PRIMARY KEY ([MigrationId])
    );

GO

CREATE TABLE [Department] (
    [Id] int NOT NULL IDENTITY,
    [Name] nvarchar(max),
    CONSTRAINT [PK_Department] PRIMARY KEY ([Id])
);

GO

CREATE TABLE [Employee] (
    [Id] int NOT NULL IDENTITY,
    [Address] nvarchar(max),
    [BirthDate] nvarchar(max),
    [DepartmentId] int NOT NULL,
    [Email] nvarchar(max),
    [GraduationDate] nvarchar(max),
    [Name] nvarchar(max),
    [Phone] nvarchar(max),
    [Salary] nvarchar(max),
    [Website] nvarchar(max),
    CONSTRAINT [PK_Employee] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Employee_Department_DepartmentId] FOREIGN KEY ([DepartmentId]) REFERENCES [Department] ([Id])
);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20160112031335_initial', N'7.0.0-beta8-15964');

GO

