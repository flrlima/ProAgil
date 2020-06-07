using Microsoft.EntityFrameworkCore.Migrations;

namespace ProAgil.WebAPI.Migrations
{
    public partial class inclusaocampos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DataEvento",
                table: "Eventos",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Local",
                table: "Eventos",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Lote",
                table: "Eventos",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "QtdPessoas",
                table: "Eventos",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Tema",
                table: "Eventos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DataEvento",
                table: "Eventos");

            migrationBuilder.DropColumn(
                name: "Local",
                table: "Eventos");

            migrationBuilder.DropColumn(
                name: "Lote",
                table: "Eventos");

            migrationBuilder.DropColumn(
                name: "QtdPessoas",
                table: "Eventos");

            migrationBuilder.DropColumn(
                name: "Tema",
                table: "Eventos");
        }
    }
}
