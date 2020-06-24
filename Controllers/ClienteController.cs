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

    public class ClienteController : ControllerBase
    {
        private readonly SugeContext _context;

        public ClienteController(SugeContext context)
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
        public async Task<ActionResult<IEnumerable<Cliente>>> GetTaskItems()
        {
        return await _context.Clientes.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> GetTaskItem(string id)
        {
            var lista = await _context.Clientes.Where(p=>p.Identificacion==id).ToListAsync();
            int x=0;
            
            foreach (var item in lista)
            {
                x = item.Id;
            }

            var user = await _context.Clientes.FindAsync(x);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpPost]
        public async Task<ActionResult<Cliente>> PostTaskItem(Cliente cliente)
        {
            var lista = await _context.Clientes.ToListAsync();
            int x=0;
            
            foreach (var item in lista)
            {
                if(item.Identificacion == cliente.Identificacion){
                    x = x+1;
                }
            }

            if(x!=0){
                return null;
            }else{
                _context.Clientes.Add(cliente);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetTaskItem), new { id = cliente.Id }, cliente);
            }

            
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Cliente item)
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
            var Cliente = await
            _context.Clientes.FindAsync(id);
            if (Cliente == null)
            {
                return NotFound();
            }
            _context.Clientes.Remove(Cliente);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}