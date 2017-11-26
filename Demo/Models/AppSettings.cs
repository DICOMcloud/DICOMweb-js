using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace DICOMwebJS.Demo.Models
{
    public class AppSettings
    {
        private static AppSettings _current = new AppSettings ( ) ;

        public AppSettings ( ) 
        {
            
            ServerUrl = ConfigurationManager.AppSettings["app:serverUrl"];
            OhifViewerUrl = ConfigurationManager.AppSettings["app:ohifViewer"];
            MaxUpload = -1 ;
            SupportAnonymizer = true; 

            var maxUploadValue = ConfigurationManager.AppSettings["app:maxUpload"];
            var supportAnonymizerValue = ConfigurationManager.AppSettings["app:supportAnonymizer"];

            
            if ( !string.IsNullOrEmpty (maxUploadValue))
            {
                MaxUpload = int.Parse (maxUploadValue);
            }

            if ( !string.IsNullOrEmpty ( supportAnonymizerValue))
            {
                SupportAnonymizer = bool.Parse ( supportAnonymizerValue) ;
            }
        }

        public static AppSettings Current 
        {
            get 
            {
                return _current ;
            }

            set
            {
                _current = value ;
            }
        }

        public string ServerUrl { get; set; }

        public string OhifViewerUrl { get; set; }

        public bool SupportAnonymizer { get; set; }

        public int MaxUpload { get; set; }
    }
}