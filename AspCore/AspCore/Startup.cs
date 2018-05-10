using AspNetCoreSignalr.SignalRHubs;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Linq;

namespace AspCore
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddSignalR();
      services.AddCors(options =>
      {
        options.AddPolicy("CorsPolicy",
          builder => builder.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
      });

      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
    {
      loggerFactory.AddConsole(LogLevel.Information);
      var logger = loggerFactory.CreateLogger("Middleware Demo");

      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseCors("CorsPolicy");
      app.UseSignalR(routes =>
      {
        routes.MapHub<LoopyHub>("loopy");
      });


      app.UseMvc();

      app.Use(async (context, next) =>
      {
        var myTimer = System.Diagnostics.Stopwatch.StartNew();
        logger.LogInformation($"Beginning {env.EnvironmentName} environment");
        await next();
        logger.LogInformation($"Ending {myTimer.ElapsedMilliseconds} ms");
      });

      app.Map("/stuff", a => a.Run(async context =>
      {
        context.Response.ContentType = "text/html";
        await context.Response.WriteAsync("Here is your stuff");// and terminate right here, no next() call
      }));

      app.MapWhen(context => context.Request.Headers["User-Agent"].Contains("Apple-Iphone"), IPhoneRoute);

      //app.UseMiddleware<EnvironmentMiddleware>();

      //throw new Exception("this is a mistake");
      //app.Run(async (context) =>
      //{
      //  context.Response.ContentType = "text/html";
      //  await context.Response.WriteAsync("Hello");

      //  //throw new Exception("this is a mistake");
      //});

      //app.Run(async (context) =>
      //{
      //  await context.Response.WriteAsync("Hello2");  // nothing can happen after a Run statement - this should be the last on pipeline
      //});
    }

    private void IPhoneRoute(IApplicationBuilder obj)
    {
      throw new NotImplementedException();
    }
  }
}
