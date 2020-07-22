using System.Linq;
using AutoMapper;
using ProAgil.Domain;
using ProAgil.WebAPI.Dtos;

namespace ProAgil.WebAPI.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Evento, EventoDto>()
            .ForMember(
                para => para.Palestrantes, opt =>{
                opt.MapFrom(de => de.PalestrantesEventos.Select(x => x.Palestrante).ToList());
            })
            .ReverseMap();
            CreateMap<Palestrante, PalestranteDto>()
            .ForMember(
                para => para.Eventos, opt => {
                    opt.MapFrom(de => de.PalestrantesEventos.Select(x => x.Evento).ToList());
                }
            )
            .ReverseMap();
            CreateMap<Lote, LoteDto>().ReverseMap();
            CreateMap<RedeSocial, RedeSocialDto>().ReverseMap();
        }        
    }
}