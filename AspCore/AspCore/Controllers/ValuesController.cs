using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspCore.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace AspCore.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [EnableCors("CorsPolicy")]
        [HttpGet("postings")]
        public IEnumerable<Post> GetAllPostings()
        {
            return new Post[] {
                new Post { Url = "http://www.gstatic.com/webp/gallery/1.jpg" },
                new Post { Url = "http://www.gstatic.com/webp/gallery/2.webp" }
            };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
