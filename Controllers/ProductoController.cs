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

    public class ProductoController  : ControllerBase
    {
        private readonly SugeContext _context;

        public ProductoController(SugeContext context)
        {
            _context = context;
            
             if (_context.Productos.Count() == 0)
            {
                
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Productos.Add(new Producto { NombreProdcuto = "DESAYUNO", Precio = 7000});
                _context.Productos.Add(new Producto { NombreProdcuto = "ALMUERZO", Precio = 10000});
                _context.Productos.Add(new Producto { NombreProdcuto = "COCACOLA(LITRO)", Precio = 3000});
                _context.Productos.Add(new Producto { NombreProdcuto = "COCACOLA(PERSONAL)", Precio = 1500});
                _context.Productos.Add(new Producto { NombreProdcuto = "DETODITO", Precio = 2000});
                _context.Productos.Add(new Producto { NombreProdcuto = "PAPA-RIZADA", Precio = 1500});
                _context.Productos.Add(new Producto { NombreProdcuto = "POSTOBON(LITRO)", Precio = 2000});

                _context.SaveChanges();
            }
            
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Producto>>> GetTaskItems()
        {
        return await _context.Productos.ToListAsync();
        }

        [HttpGet("{nombreProducto}")]
        public async Task<ActionResult<Producto>> GetTaskItem(string nombreProducto)
        {
            var lista = await _context.Productos.Where(p=>p.NombreProdcuto==nombreProducto).ToListAsync();
            int x=0;
            
            foreach (var item in lista)
            {
                x = item.Id;
            }

            var user = await _context.Productos.FindAsync(x);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

       /* [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Producto>>> GetTaskItem(int id)
        {
            return await _context.Productos.Where(p=>p.Id==id).ToListAsync();
        } */

        [HttpPost]
        public async Task<ActionResult<Producto>> PostTaskItem(Producto item)
        {
            _context.Productos.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Id }, item);
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Producto item)
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
            var Producto = await
            _context.Productos.FindAsync(id);
            if (Producto == null)
            {
                return NotFound();
            }
            _context.Productos.Remove(Producto);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        
    }
}