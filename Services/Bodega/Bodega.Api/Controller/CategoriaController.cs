
using Bodega.Application.Command.Categorias.Crear;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Bodega.Api.Controller
{

    [Route("api/v1/[controller]")]
    public class CategoriaController : ControllerBase
    {
        private readonly IMediator _mediator;
        public CategoriaController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<string>> CrearCategoria([FromBody] CrearCategoriaCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }
    }
}