using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Data.Entity;
using Microsoft.Dnx.Runtime;
using Microsoft.Framework.Configuration;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using WebBasics.BusinessEntityFrameWork;
using WebBasics.BusinessInterfaces;
using WebBasics.BusinessRepository;
using WebBasics.SystemInterfaces;
using WebBasics.SystemManagers;

namespace WebBasics
{
    public class Startup
    {
        public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv)
        {
            // Setup configuration sources.
            var builder = new ConfigurationBuilder()
                .SetBasePath(appEnv.ApplicationBasePath)
                .AddJsonFile("appsettings.json")
                .AddJsonFile("config.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }
        //------------------------------------------------------------------------------------------------------
        public IConfigurationRoot Configuration { get; set; }
        //------------------------------------------------------------------------------------------------------

        // This method gets called by the runtime.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add MVC services to the services container.
            services.AddMvc();
            services.AddCaching();  //added by suzette
            services.AddSession();  //added by suzette
            services.AddEntityFramework()
                .AddSqlServer()
                .AddDbContext<BusinessContext>(options => options.UseSqlServer(Configuration["Data:ConnectionString"]));

            // Uncomment the following line to add Web API services which makes it easier to port Web API 2 controllers.
            // You will also need to add the Microsoft.AspNet.Mvc.WebApiCompatShim package to the 'dependencies' section of project.json.
            //services.AddWebApiConventions();

            var serviceDescriptor = new ServiceDescriptor(typeof(IApplicationCache), typeof(ApplicationCache), ServiceLifetime.Transient);
            services.Add(serviceDescriptor);
            services.Add(new ServiceDescriptor(typeof(ISessionCache), typeof(SessionCache), ServiceLifetime.Transient));
            services.AddTransient<IRepoDepartment, RepoDepartment>();
            services.AddTransient<ISerializer, NewtonSoftSerializer>();
            services.AddTransient<IRequestClient, RequestClient>();
            services.AddTransient<IXmlFileManager, XmlFileManager>();
            services.AddTransient<ITextFileManager, TextFileManager>();
            services.AddTransient<IReportManager, ReportManager>();
        }

        //------------------------------------------------------------------------------------------------------

        // Configure is called after ConfigureServices is called.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.MinimumLevel = LogLevel.Information;
            loggerFactory.AddConsole();
            loggerFactory.AddDebug();

            // IMPORTANT: This session call MUST go before UseMvc()
            app.UseSession();

            // Configure the HTTP request pipeline.

            // Add the following to the request pipeline only in development environment.
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // Add Error handling middleware which catches all application specific errors and
                // send the request to the following path or controller action.
                app.UseExceptionHandler("/Home/Error");
            }

            // Add the platform handler to the request pipeline.
            app.UseIISPlatformHandler();

            // Add static files to the request pipeline.
            app.UseStaticFiles();

            // Add MVC to the request pipeline.
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute(
                    name: "defaultApi",
                    template: "api/{controller}/{action}/{id?}");

                // Uncomment the following line to add a route for [PORTING/MIGRATION] OLD Web API 2 controllers.
                // routes.MapWebApiRoute("DefaultApi", "api/{controller}/{id?}");
            });
        }
    }

  
}
