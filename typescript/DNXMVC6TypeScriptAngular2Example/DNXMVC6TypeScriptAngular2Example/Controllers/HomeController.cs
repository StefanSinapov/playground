using System;
using Microsoft.AspNet.Mvc;

namespace DNXMVC6TypeScriptAngular2Example.MVC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Home()
        {
            return View();
        }
    }
}