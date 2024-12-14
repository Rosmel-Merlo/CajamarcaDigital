using Bodega.Application.Command.Proveedor.Crear;
using Bodega.Application.Queries.Proveedores.ListarProveedores;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Bodega.Api.Controller
{
    [Route("api/v1/[controller]")]
    public class ProveedorController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ProveedorController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet("ListarProveedores")]
        public async Task<ActionResult<string>> ListarProveedores([FromQuery] ListarProveedoresQuery query)
        {
            var response = await _mediator.Send(query);
            return Ok(response);
        }
        [HttpPost("CrearProveedor")]
        public async Task<ActionResult<string>> CrearProveedor([FromBody] CrearProveedorCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }

    }
}