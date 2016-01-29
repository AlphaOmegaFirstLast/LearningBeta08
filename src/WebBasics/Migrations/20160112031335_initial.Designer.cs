using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using WebBasics.BusinessEntityFrameWork;

namespace WebBasics.Migrations
{
    [DbContext(typeof(BusinessContext))]
    [Migration("20160112031335_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Annotation("ProductVersion", "7.0.0-beta8-15964")
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebBasics.BusinessModels.Department", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("WebBasics.BusinessModels.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address");

                    b.Property<string>("BirthDate");

                    b.Property<int>("DepartmentId");

                    b.Property<string>("Email");

                    b.Property<string>("GraduationDate");

                    b.Property<string>("Name");

                    b.Property<string>("Phone");

                    b.Property<string>("Salary");

                    b.Property<string>("Website");

                    b.HasKey("Id");
                });

            modelBuilder.Entity("WebBasics.BusinessModels.Employee", b =>
                {
                    b.HasOne("WebBasics.BusinessModels.Department")
                        .WithMany()
                        .ForeignKey("DepartmentId");
                });
        }
    }
}
