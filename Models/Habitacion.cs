using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace HyR_Sugeydigch.Models
{
    public class Habitacion
    {
        public int Id { get; set; }
        
        [Required] public int NumeroHabitacion { get; set; }
        [Required] public string TipoDeHabitacion { get; set; }
        [Required] public string Estado { get; set; }
        [Required] public int Precio { get; set; }
        [Required] public int NumeroCamas { get; set; }
       
    }
}