using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HyR_Sugeydigch.Models;

namespace HyR_Sugeydigch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class HabitacionController : ControllerBase
    {
        private readonly SugeContext _context;

        public HabitacionController(SugeContext context)
        {
            
            _context = context;
            
            if (_context.Habitaciones.Count() == 0)
            {
                
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Habitaciones.Add(new Habitacion {NumeroHabitacion = 1, TipoDeHabitacion = "SIMPLE",
                                                       Estado = "DISPONIBLE",  Precio = 40000,
                                                      NumeroCamas = 1 });
                _context.Habitaciones.Add(new Habitacion {NumeroHabitacion = 2, TipoDeHabitacion = "DOBLE",
                                                       Estado = "DISPONIBLE",  Precio = 60000,
                                                      NumeroCamas = 1 });
                _context.Habitaciones.Add(new Habitacion {NumeroHabitacion = 3, TipoDeHabitacion = "SIMPLE",
                                                       Estado = "DISPONIBLE",  Precio = 40000,
                                                      NumeroCamas = 1 });
                _context.Habitaciones.Add(new Habitacion {NumeroHabitacion = 4, TipoDeHabitacion = "SIMPLE",
                                                       Estado = "DISPONIBLE",  Precio = 60000,
                                                      NumeroCamas = 2 });
                _context.SaveChanges();
            }
            
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Habitacion>>> GetTaskItems()
        {
        return await _context.Habitaciones.ToListAsync();
        }

        [HttpGet("Disponibles")]
        public async Task<ActionResult<IEnumerable<Habitacion>>> GetTaskDisponibles()
        {
            return await _context.Habitaciones.Where(p=>p.Estado=="DISPONIBLE").ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Habitacion>>> GetTaskItem(int id)
        {
            return await _context.Habitaciones.Where(p=>p.NumeroHabitacion==id).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Habitacion>> PostTaskItem(Habitacion item)
        {
            _context.Habitaciones.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Id }, item);
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Habitacion item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskItem(int id)
        {
            var Habitacion = await
            _context.Habitaciones.FindAsync(id);
            if (Habitacion == null)
            {
                return NotFound();
            }
            _context.Habitaciones.Remove(Habitacion);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        
    }
    
}