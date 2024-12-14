
using Bodega.Application.Command.Categorias.Crear;
using Bodega.Application.Queries.Categorias.ListarCategoria;
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

        [HttpGet("ListarCategorias")]
        public async Task<ActionResult<string>> ListarCategoria()
        {
            ListarCategoriaQuery query = new ListarCategoriaQuery();
            var response = await _mediator.Send(query);
            return Ok(response);
        }
        [HttpPost("CrearCategoria")]
        public async Task<ActionResult<string>> CrearCategoria([FromBody] CrearCategoriaCommand command)
        {
            var response = await _mediator.Send(command);
            return Ok(response);
        }
    }
}