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

    public class ServicioController : ControllerBase
    {
        private readonly SugeContext _context;

        public ServicioController(SugeContext context)
        {
            _context = context;            
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Servicio>>> GetTaskItems()
        {
        return await _context.Servicios.ToListAsync();
        }

        [HttpGet("Reserva/{id}")]
        public async Task<ActionResult<IEnumerable<Servicio>>> GetTaskReserva(int id)
        {
            return await _context.Servicios.Where(p=>p.IdReserva==id).ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Servicio>>> GetTaskItem(int id)
        {
            return await _context.Servicios.Where(p=>p.Id==id).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Servicio>> PostTaskItem(Servicio item)
        {
            _context.Servicios.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Id }, item);
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Servicio item)
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
            var Servicio = await
            _context.Servicios.FindAsync(id);
            if (Servicio == null)
            {
                return NotFound();
            }
            _context.Servicios.Remove(Servicio);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        
    }
}