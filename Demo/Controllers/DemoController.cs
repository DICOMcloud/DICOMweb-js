using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Demo.Models ;


namespace Demo
{
    public class DemoController : Controller
    {
        // GET: Demo
        public ActionResult Index()
        {
            var serverUrl = ConfigurationManager.AppSettings["app:serverUrl"];
            
            
            serverUrl = serverUrl ?? "" ;

            //ViewBag.serverUrl = serverUrl ;
            
            return View ( new ServersViewModel ( serverUrl.Split ( new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries ).
                                                Select ( (string x )=> 
                                                { 
                                                    string[] keyValue = x.Split (';') ;

                                                    if ( keyValue.Length == 2 )
                                                    {
                                                        return new KeyValuePair<string,string> ( keyValue[0], keyValue[1] ) ; 
                                                    }
                                                    else
                                                    {
                                                        return new KeyValuePair<string,string> ( x, x );
                                                    }
                                                } ).ToArray ( ) ) ) ;
        }

        [Route("_StudyItem")]
        [Route("dicomwebjs/_StudyItem")]
        public ActionResult _StudyItem()
        {
            return PartialView();
        }

        [Route("_SeriesItem")]
        [Route("dicomwebjs/_SeriesItem")]
        public ActionResult _SeriesItem()
        {
            return PartialView();
        }

        [Route("_InstanceItem")]
        [Route("dicomwebjs/_InstanceItem")]
        public ActionResult _InstanceItem()
        {
            return PartialView();
        }
    }
}