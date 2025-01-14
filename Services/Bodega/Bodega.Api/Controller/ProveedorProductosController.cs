using Bodega.Application.Queries.ProveedorProductos.Listar.ListarProveedoresPorProducto;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Bodega.Api.Controller
{
    [Route("api/v1/[controller]")]
    public class ProveedorProductosController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ProveedorProductosController(IMediator mediator)
        {
            _mediator = mediator;
        }
        [HttpGet("ListarProveedoresPorProducto", Name = "Listar proveedor por Producto")] 
        public async Task<ActionResult<List<ListarProveedoresPorProductoDTO>>> ListarProveedoresPorProducto([FromQuery] ListarProveedoresPorProductoQuery query)
        {
            var response = await _mediator.Send(query);
            return Ok(response);
        }

    }
}