using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace HyR_Sugeydigch.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        
        [Required] public string Identificacion { get; set; }
        [Required] public string Nombre { get; set; }
        [Required] public string Apellido { get; set; }
        [Required] public string FechaNacimiento { get; set; }
        public string Telefono { get; set; }
        public string Correo { get; set; }
      
    }
}