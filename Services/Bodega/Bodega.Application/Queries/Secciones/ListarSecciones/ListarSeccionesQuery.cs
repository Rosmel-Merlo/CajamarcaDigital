using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;

namespace Bodega.Application.Queries.Secciones.ListarSecciones
{
    public class ListarSeccionesQuery : IRequest<List<ListarSeccionesDTO>>
    {

    }
}