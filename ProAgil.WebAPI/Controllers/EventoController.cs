using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProAgil.Domain;
using ProAgil.Repository;
using ProAgil.WebAPI.Dtos;

namespace ProAgil.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventoController : ControllerBase
    {
        private readonly IProAgilRepository _proAgilRepository;
        private readonly IMapper _mapper;

        public EventoController(IProAgilRepository proAgilRepository, IMapper mapper)
        {
            _mapper = mapper;
            _proAgilRepository = proAgilRepository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var eventos = await _proAgilRepository.GetAllEventoAsync(true);

                var result = _mapper.Map<IEnumerable<EventoDto>>(eventos);

                return Ok(result);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> Get(int Id)
        {
            try
            {
                var evento = await _proAgilRepository.GetAllEventoAsyncById(Id, true);
                var result = _mapper.Map<EventoDto>(evento);
                return Ok(result);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }
        }

        [HttpGet("getByTema/{tema}")]
        public async Task<IActionResult> Get(string tema)
        {
            try
            {
                var eventos = await _proAgilRepository.GetAllEventoAsyncByTeme(tema, true);
                var result = _mapper.Map<IEnumerable<EventoDto>>(eventos);
                return Ok(result);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post(EventoDto model)
        {
            try
            {
                var evento = _mapper.Map<Evento>(model);
                _proAgilRepository.Add(evento);

                if (await _proAgilRepository.SaveChangesAsync())
                    return Created($"/api/evento/{model.Id}", _mapper.Map<EventoDto>(evento));
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

            return BadRequest();
        }

        [HttpPut("{EventoId}")]
        public async Task<IActionResult> Put(int EventoId, EventoDto model)
        {
            try
            {
                var evento = await _proAgilRepository.GetAllEventoAsyncById(EventoId, false);
                if (evento == null) return NotFound();

                _mapper.Map(model, evento);

                _proAgilRepository.Update(model);

                if (await _proAgilRepository.SaveChangesAsync())
                    return Created($"/api/evento/{model.Id}", _mapper.Map<EventoDto>(evento));
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

            return BadRequest();
        }

        [HttpDelete("{EventoId}")]
        public async Task<IActionResult> Delete(int EventoId)
        {
            try
            {
                var evento = await _proAgilRepository.GetAllEventoAsyncById(EventoId, false);
                if (evento == null) return NotFound();

                _proAgilRepository.Delete(evento);

                if (await _proAgilRepository.SaveChangesAsync())
                    return Ok();
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Banco de Dados Falhou");
            }

            return BadRequest();
        }
    }
}