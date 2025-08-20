namespace MVCExample.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int categId { get; set; }

        public Category categ { get; set; }
    }
}
