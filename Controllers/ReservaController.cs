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

    public class ReservaController : ControllerBase
    {
        private readonly SugeContext _context;

        public ReservaController(SugeContext context)
        {
            
            _context = context;
            
            /*if (_context.Clientes.Count() == 0)
            {
                
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.TaskItems.Add(new TaskItem { Id = 1, Title = "Priorizar el proyecto", Description = "Priorizar", Priority = true });
                _context.TaskItems.Add(new TaskItem { Id = 2, Title = "Calendario el proyecto", Description = "Priorizar", Priority = true });
                _context.SaveChanges();
            }*/
            
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reserva>>> GetTaskItems()
        {
        return await _context.Reservas.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Reserva>>> GetTaskItem(string id)
        {
            return await _context.Reservas.Where(p=>p.IdCliente==id).ToListAsync();
        }

        [HttpGet("Reservas/{id}")]
        public async Task<ActionResult<IEnumerable<Reserva>>> GetTaskReservas(string id)
        {
            return await _context.Reservas.Where(p=>p.IdCliente==id).ToListAsync();
        }

        [HttpGet("Activas")]
        public async Task<ActionResult<IEnumerable<Reserva>>> GetTaskActivas()
        {
            return await _context.Reservas.Where(p=>p.Estado=="ACTIVA" || p.Estado=="EN ESPERA").ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Reserva>> PostTaskItem(Reserva item)
        {
            _context.Reservas.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Id }, item);
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Reserva item)
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
            var Reserva = await
            _context.Reservas.FindAsync(id);
            if (Reserva == null)
            {
                return NotFound();
            }
            _context.Reservas.Remove(Reserva);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}