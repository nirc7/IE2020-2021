using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class StudentsController : ApiController
    {
        public IHttpActionResult Get()
        {
            try
            {
                List<Student> sa = StudentsDbMOCK.students;
                return Ok(sa);
            }
            catch (Exception e)
            {
                //return BadRequest(e.Message);
                return Content(HttpStatusCode.BadRequest, e);
            }
        }

        public IHttpActionResult get() { }

        public IHttpActionResult Get(int id)
        {
            try
            {
                Student s = StudentsDbMOCK.students.FirstOrDefault(stu => stu.ID == id);
                if (s == null)
                {
                    return Content(HttpStatusCode.NotFound,
                        $"student with id ={id} was not found for Get!!!");
                }
                return Ok(s);
            }
            catch (Exception e)
            {
                //return BadRequest(e.Message);
                return Content(HttpStatusCode.BadRequest, e);
            }
        }

        public IHttpActionResult Post([FromBody] Student value)
        {
            try
            {
                StudentsDbMOCK.students.Add(value);
                return Created(new Uri(Request.RequestUri.AbsoluteUri + value.ID), value);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        public IHttpActionResult Put(int id, [FromBody]Student value)
        {
            try
            {
                //int.Parse("avi");
                Student s2update = StudentsDbMOCK.students.FirstOrDefault(stu => stu.ID == id);
                if (s2update != null)
                {
                    s2update.Name = value.Name;
                    s2update.Grade = value.Grade;
                    return Ok(s2update);
                }
                return Content(HttpStatusCode.NotFound,
                    $"student not found with id={id} for updating!!!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                Student s2Delete = StudentsDbMOCK.students.FirstOrDefault(stu => stu.ID == id);
                if (s2Delete != null)
                {
                    StudentsDbMOCK.students.Remove(s2Delete);
                    return Ok();
                }
                return Content(HttpStatusCode.NotFound,
                    $"student not found with id={id} for deleting!!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
