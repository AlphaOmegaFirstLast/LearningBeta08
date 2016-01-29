using System;
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;
using Microsoft.Data.Entity.Metadata;
using Microsoft.Data.Entity.Migrations;
using WebBasics.BusinessEntityFrameWork;

namespace WebBasics.Migrations
{
    [DbContext(typeof(BusinessContext))]
    [Migration("20160119113639_EmpLevel")]
    partial class EmpLevel
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

                    b.Property<string>("Name")
                        .IsRequired();

                    b.HasKey("Id");
                });

            modelBuilder.Entity("WebBasics.BusinessModels.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Address")
                        .Annotation("MaxLength", 10);

                    b.Property<DateTime>("BirthDate");

                    b.Property<int>("DepartmentId");

                    b.Property<string>("Email")
                        .IsRequired();

                    b.Property<string>("Experience");

                    b.Property<DateTime>("GraduationDate");

                    b.Property<int>("Level");

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Password");

                    b.Property<string>("Phone");

                    b.Property<int>("Salary");

                    b.Property<string>("WebSite");

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
