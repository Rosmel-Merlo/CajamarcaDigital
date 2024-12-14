using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bodega.Application.Repositories;
using MediatR;

namespace Bodega.Application.Queries.Proveedores.ListarProveedores
{
    public class ListarProveedoresQueryHandler : IRequestHandler<ListarProveedoresQuery, List<ListarProveedoresDTO>>
    {
        private readonly IProveedorRepository _proveedorRepository;
        public ListarProveedoresQueryHandler(
            IProveedorRepository proveedorRepository
        )
        {
            _proveedorRepository = proveedorRepository;
        }

        public async Task<List<ListarProveedoresDTO>> Handle(ListarProveedoresQuery request, CancellationToken cancellationToken)
        {
            try
            {
                var dataCategorias = await _proveedorRepository.GetAllAsync();
                List<ListarProveedoresDTO> data = (from x in dataCategorias
                                                   select new ListarProveedoresDTO
                                                   {
                                                       ProveedorId = x.ProveedorId.ToString(),
                                                       Ruc = x.Ruc,
                                                       NombreContactor = x.NombreContacto,
                                                       TelefonoContacto = x.TelefonoContacto,
                                                       Telefono = x.Telefono,
                                                       Email = x.Email,
                                                       Direccion = x.Direccion
                                                   }).ToList();

                return data;
            }
            catch (System.Exception ex)
            {
                throw new System.Exception($"Error en la API {ex.ToString()}");
            }
        }
    }
}