using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Department
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Department Name is required")]
        [StringLength(50, ErrorMessage = "Department Name can not exceed 50 characters")]
        public string Name { get; set; }  
    }

    public class Employee
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Employee Name is required")]
        public int Name { get; set; }

        [ForeignKey("Department")]
        [Required(ErrorMessage = "DepartmentId is required")]

        public int DepartmentId { get; set; }

    }

}
