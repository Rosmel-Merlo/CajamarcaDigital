using Bodega.Application.Command.Productos.Actualizar;
using Bodega.Application.Command.Productos.Crear;
using Bodega.Application.Queries.Productos.LIstarComboProducto;
using Bodega.Application.Queries.Productos.ListarProductos;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Bodega.Api.Controller
{
    [Route("api/v1/[controller]")]
    public class ProductoController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ProductoController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet("ListarProductos")]
        public async Task<ActionResult<List<ListarProductosDTO>>> ListarProductos([FromQuery] ListarProductosQuery query)
        {
            var response = await _mediator.Send(query);
            return Ok(response);
        }
        [HttpGet("ListarComboProductos")]
        public async Task<ActionResult<List<LIstarComboProductoDTO>>> ListarComboProductos([FromQuery] LIstarComboProductoQuery query)
        {
            var response = await _mediator.Send(query);
            return Ok(response);
        }
        [HttpPost("CrearProducto")]
        public async Task<ActionResult<string>> CrearProducto([FromBody] CrearProductosCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }
        [HttpPost("ActualizarProducto")]
        public async Task<ActionResult<string>> ActualizarProducto([FromBody] ActualizarProductoCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }
    }
}