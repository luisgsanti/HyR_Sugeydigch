using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace HyR_Sugeydigch.Models
{
    public class Servicio
    {
        public int Id { get; set; }
        [Required] public int IdReserva { get; set; }
        
        [Required] public string NombreServicio { get; set; }
        [Required] public decimal Precio { get; set; }
        [Required] public int Cantidad { get; set; }
        
        
                   public int Monto { get; set; }


        //[Required] public string Fecha { get; set; }
    }
}