using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public static class StudentsDbSQL
    {
        public static List<Student> students = new List<Student>(){
            new Student(1, "avi", 100),
            new Student(2, "ben", 98),
            new Student(3, "charlie", 97),
            new Student(4, "dora", 99),
        };

        public static List<Student> GetALLStudentds()
        {
            string conStr = ConfigurationManager.ConnectionStrings["RuppinSQLServer"].ConnectionString;
            SqlConnection con = new SqlConnection(conStr);
            SqlCommand comm = new SqlCommand("SELECT * FROM TBUsers", con);
            con.Open();
            SqlDataReader reader = comm.ExecuteReader();
            List<Student> ls = null;
            if (reader.HasRows)
            {
                ls = new List<Student>();
                while (reader.Read())
                {
                    ls.Add(new Student(
                        (int)reader["ID"],
                        (string)reader["Name"],
                        (int)reader["Grade"]));
                }
            }
            con.Close();
            return ls;
        }
    }
}