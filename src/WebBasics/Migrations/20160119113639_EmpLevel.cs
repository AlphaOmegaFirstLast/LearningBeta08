using System;
using System.Collections.Generic;
using Microsoft.Data.Entity.Migrations;

namespace WebBasics.Migrations
{
    public partial class EmpLevel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Level",
                table: "Employee",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(name: "Level", table: "Employee");
        }
    }
}
