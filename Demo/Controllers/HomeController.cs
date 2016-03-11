using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CloudPacs.WebApp.Controllers
{
    public class HomeController : Controller
    {
        // GET: Demo
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult _StudyItem()
        {
            return PartialView();
        }

        public ActionResult _SeriesItem()
        {
            return PartialView();
        }

        public ActionResult _InstanceItem()
        {
            return PartialView();
        }
    }
}