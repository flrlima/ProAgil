using System.Collections.Generic;

namespace ProAgil.WebAPI.Dtos
{
    public class PalestranteDto
    {
        public string Nome { get; set; }
        public string MiniCurriculo { get; set; }
        public string ImagemURL { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public IEnumerable<RedeSocialDto> RedesSociais { get; set; }
        public IEnumerable<EventoDto> Eventos { get; set; }
    }
}