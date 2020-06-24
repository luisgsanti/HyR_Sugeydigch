using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace HyR_Sugeydigch.Models
{
    public class Producto
    {
        public int Id { get; set; }
        [Required] public string NombreProdcuto { get; set; }
        [Required] public decimal Precio { get; set; }
    }
}