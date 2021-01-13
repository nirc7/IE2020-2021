using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Student
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public int Grade { get; set; }

        public Student() { }

        public Student(int i, string n, int g)
        { ID = i; Name = n; Grade = g; }

        public override string ToString()
        {
            return $"id={ID}, name={Name}, grade= {Grade}";
        }

    }
}