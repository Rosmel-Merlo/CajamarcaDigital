

using Bodega.Application.Command.Inventarios.Actualizar;
using Bodega.Application.Command.Inventarios.Crear;
using Bodega.Application.Queries.Inventarios.ListarInventarios;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Bodega.Api.Controller
{
    [Route("api/v1/[controller]")]
    public class InventarioController : ControllerBase
    {
        private readonly IMediator _mediator;
        public InventarioController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet("ListarInventario")]
        public async Task<ActionResult<List<ListarInventariosDTO>>> ListarInventario()
        {
            ListarInventariosQuery query = new ListarInventariosQuery();
            var response = await _mediator.Send(query);
            return Ok(response);
        }
        [HttpPost("CrearInventario")]
        public async Task<ActionResult<string>> CrearProducto([FromBody] CrearInventarioCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }
        [HttpPut("ActualizarInventario")]
        public async Task<ActionResult<string>> ActualizarInventario([FromBody] ActualizarInventarioCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }
    }
}