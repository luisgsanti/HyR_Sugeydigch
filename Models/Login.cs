using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace HyR_Sugeydigch.Models
{
    public class Login
    {
        public int Id { get; set; }
        [Required] public string Identificacion { get; set; }
        [Required] public string Usuario { get; set; }
        [Required] public string Clave { get; set; }
        [Required] public string Rol { get; set; }
    }
}