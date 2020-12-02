using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public static class StudentsDbMOCK
    {
        public static List<Student> students = new List<Student>(){
            new Student(1, "avi", 100),
            new Student(2, "ben", 98),
            new Student(3, "charlie", 97),
            new Student(4, "dora", 99),
        };
    }
}