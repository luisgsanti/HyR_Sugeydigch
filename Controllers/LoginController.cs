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

    public class LoginController : ControllerBase
    {
        private readonly SugeContext _context;
        public LoginController(SugeContext context)
        {
            _context = context;
            if (_context.Login.Count() == 0)
            {
                // Crea un nuevo item si la coleccion esta vacia,
                // lo que significa que no puedes borrar todos los Items.
                _context.Login.Add(new Login { Identificacion="2222", Usuario ="Luis", Clave="222", Rol="RECEPCIONISTA"});
                
                _context.SaveChanges();
            }
        }

        // GET: api/Login
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Login>>> GetTaskItems()
        {
        return await _context.Login.ToListAsync();
        }

        // GET: api/Login/5
        [HttpGet("{usuario}")]
        public async Task<ActionResult<Login>> GetTaskItem(string usuario)
        {
            var lista = await _context.Login.Where(p=>p.Usuario==usuario).ToListAsync();
            int id=0;
            
            foreach (var item in lista)
            {
                id = item.Id;
            }

            var user = await _context.Login.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        [HttpGet("Get/{id}")]
        public async Task<ActionResult<Login>> GetTaskItemLogin(string id)
        {
            var lista = await _context.Login.Where(p=>p.Identificacion==id).ToListAsync();
            int x=0;
            
            foreach (var item in lista)
            {
                x = item.Id;
            }

            var user = await _context.Login.FindAsync(x);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        // POST: api/Login
        [HttpPost]
        public async Task<ActionResult<Login>> PostTaskItem(Login item)
        {
            _context.Login.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTaskItem), new { id = item.Id }, item);
        }

        // PUT: api/Login/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTaskItem(int id, Login item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/Login/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTaskItem(int id)
        {
            var Login = await
            _context.Login.FindAsync(id);
            if (Login == null)
            {
                return NotFound();
            }
            _context.Login.Remove(Login);
            await _context.SaveChangesAsync();
            return NoContent();
        } 
    }
}