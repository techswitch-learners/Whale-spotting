﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using whale_spotting;

namespace whale_spotting.Migrations
{
    [DbContext(typeof(WhaleSpottingContext))]
    partial class WhaleSpottingContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.4")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("WhaleSpotting.Models.Database.Sighting", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<double>("Latitude")
                        .HasColumnType("double precision");

                    b.Property<string>("Location")
                        .HasColumnType("text");

                    b.Property<double>("Longitude")
                        .HasColumnType("double precision");

                    b.Property<int>("Quantity")
                        .HasColumnType("integer");

                    b.Property<DateTime>("SightedAt")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Species")
                        .HasColumnType("text");

                    b.Property<string>("SubmittedByEmail")
                        .HasColumnType("text");

                    b.Property<string>("SubmittedByName")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Sightings");
                });
#pragma warning restore 612, 618
        }
    }
}
