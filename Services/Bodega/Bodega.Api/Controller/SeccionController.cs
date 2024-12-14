
using Bodega.Application.Command.Seccion.Crear;
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
        [HttpPost("CrearSeccion")]
        public async Task<ActionResult<string>> CrearProveedor([FromBody] CrearSeccionCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }

    }
}