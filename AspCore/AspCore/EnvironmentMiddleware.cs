﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace AspCore
{
  internal class EnvironmentMiddleware
  {
    public EnvironmentMiddleware(RequestDelegate next, IHostingEnvironment env)
    {
      this.Next = next;
      this.EnvironmentName = env.EnvironmentName;
    }

    public RequestDelegate Next { get; private set; }
    public string EnvironmentName { get; private set; }

    public async Task Invoke(HttpContext context)
    {
      var myTimer = System.Diagnostics.Stopwatch.StartNew();
      context.Response.Headers.Add("X-HostingEnvironmentName", new[] { EnvironmentName });

      await Next(context);

      if(context.Response.ContentType != null && context.Response.ContentType.Contains("html"))
      {
        await context.Response.WriteAsync($"<p> From {EnvironmentName} in {myTimer.ElapsedMilliseconds} ms </p>");
      }
    }
  }
}