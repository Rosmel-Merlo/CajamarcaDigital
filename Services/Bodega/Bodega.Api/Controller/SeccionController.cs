
using Bodega.Application.Command.Seccion.Crear;
using Bodega.Application.Command.Seccion.Eliminar;
using Bodega.Application.Queries.Secciones.ListarComboBoxSecciones;
using Bodega.Application.Queries.Secciones.ListarSecciones;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Bodega.Api.Controller
{
    [Route("api/v1/[controller]")]
    public class SeccionController : ControllerBase
    {
        private readonly IMediator _mediator;
        public SeccionController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet("ListarSecciones")]
        public async Task<ActionResult<List<ListarSeccionesDTO>>> ListarSecciones([FromQuery] ListarSeccionesQuery query)
        {
            var response = await _mediator.Send(query);
            return Ok(response);
        }
        [HttpGet("ListarComboBoxSecciones")]
        public async Task<ActionResult<List<ListarComboBoxSeccionesDTO>>> ListarComboBoxSecciones([FromQuery] ListarComboBoxSeccionesQuery query)
        {
            var response = await _mediator.Send(query);
            return Ok(response);
        }
        [HttpPost("CrearSeccion")]
        public async Task<ActionResult<string>> CrearProveedor([FromBody] CrearSeccionCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }
        [HttpDelete("EliminarSeccion")]
        public async Task<ActionResult<string>> EliminarProveedor([FromBody] EliminarSeccionCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }
    }
}