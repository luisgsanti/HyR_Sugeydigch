using Microsoft.EntityFrameworkCore;

namespace HyR_Sugeydigch.Models
{
    public class SugeContext: DbContext
    {
        public SugeContext(DbContextOptions <SugeContext> options):base(options) {

        }
        public DbSet <Cliente> Clientes {get;set;}

        public DbSet <Habitacion> Habitaciones {get;set;}

        public DbSet <Reserva> Reservas {get;set;}
        
        public DbSet<Login> Login { get; set; }

        public DbSet<Servicio> Servicios { get; set; }

        public DbSet<Producto> Productos { get; set; }
    }
}