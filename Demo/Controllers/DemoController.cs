using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Demo
{
    public class DemoController : Controller
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