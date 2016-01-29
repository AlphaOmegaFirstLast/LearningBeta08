using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace WebBasics.Migrations
{
    public partial class empdates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Salary",
                table: "Employee",
                nullable: false);
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Employee",
                nullable: false);
            migrationBuilder.AlterColumn<DateTime>(
                name: "GraduationDate",
                table: "Employee",
                nullable: false);
            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Employee",
                nullable: false);
            migrationBuilder.AlterColumn<DateTime>(
                name: "BirthDate",
                table: "Employee",
                nullable: false);
            migrationBuilder.AddColumn<string>(
                name: "Experience",
                table: "Employee",
                nullable: true);
            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Employee",
                nullable: true);
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Department",
                nullable: false);
            migrationBuilder.RenameColumn(
                name: "Website",
                table: "Employee",
                newName: "WebSite");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Experience", table: "Employee");
            migrationBuilder.DropColumn(name: "Password", table: "Employee");
            migrationBuilder.AlterColumn<string>(
                name: "Salary",
                table: "Employee",
                nullable: true);
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Employee",
                nullable: true);
            migrationBuilder.AlterColumn<string>(
                name: "GraduationDate",
                table: "Employee",
                nullable: true);
            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Employee",
                nullable: true);
            migrationBuilder.AlterColumn<string>(
                name: "BirthDate",
                table: "Employee",
                nullable: true);
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Department",
                nullable: true);
            migrationBuilder.RenameColumn(
                name: "WebSite",
                table: "Employee",
                newName: "Website");
        }
    }
}
