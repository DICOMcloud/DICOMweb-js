using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo.Models
{
    public class ToolbarFactory
    {
        private static ToolbarViewModel _defaultInstanceDetails = InstanceToolbarBuilder.Build ( ) ;

        public static ToolbarViewModel DefaultInstanceDetails
        {
            get
            {
                return _defaultInstanceDetails ;
            }
        }

        private static class InstanceToolbarBuilder
        {
            private static ToolbarViewModel _instance = null ;

            public static ToolbarViewModel Build ( )
            {

                if ( null == _instance )
                {
                    _instance = new ToolbarViewModel ( ) ;

                    ToolbarGroup framesGroup   = new ToolbarGroup ( ) { Name="WADO-RS-Frames*" }; 
                    ToolbarGroup WadoUriGroup  = new ToolbarGroup ( ) { Name="WADO-URI" }; 
                                    

                    framesGroup.Add ( new ToolbarInput ( "frame list (e.g. 1,4,6)", "text", "data-rs-frames-input" )) ;
                    framesGroup.Add ( new ToolbarLink ( "Uncompressed", "data-rs-frames", MimeTypes.UncompressedData )) ;
            
                    WadoUriGroup.Add ( new ToolbarInput ( "single frame number (optional)", "text", "data-uri-frame-input" )) ;
                    WadoUriGroup.Add ( new ToolbarLink ( "DICOM", "data-uri-instance", MimeTypes.DICOM )) ;

                    _instance.Add ( framesGroup ) ;
                    _instance.Add (WadoUriGroup ) ;
                }

                return _instance ;
            }
        }        
    }

    public class ToolbarViewModel : List<ToolbarGroup>
    {
    }
    
    public interface IToolbarItem
    {
        IHtmlString Render ( ) ;
    }

    public class ToolbarLink : IToolbarItem
    {
        public ToolbarLink ( string text, string dataAttribute, string dataArgs )
        {
            Text          = text ;
            DataAttribute = dataAttribute ;
            DataArgs      = dataArgs ;
        }

        public string Text { get; set; }
        public string DataAttribute { get; set; }
        public string DataArgs { get; set; }

        public IHtmlString Render ( ) 
        {
          
            return new HtmlString ( string.Format ( LinkHtmlFormat, DataAttribute, DataArgs, Text ) ) ;
        }

        private static string LinkHtmlFormat = "<span {0} data-pacs-args=\"{1}\" class=\"input-group-addon\">{2}</span>" ;
    }

    public class ToolbarInput : IToolbarItem
    {
        public ToolbarInput ( string text, string inputType, string dataAttribute )
        {
            Text          = text ;
            InputType     = inputType ;
            DataAttribute = dataAttribute ;
        }

        public string Text { get; set; }
        public string InputType { get; set; }
        public string DataAttribute { get; set; }
        

        public IHtmlString Render ( ) 
        {
            return new HtmlString ( "<input type=\"" + InputType + "\" " + DataAttribute + " class=\"form-control\" placeholder=\"" + Text + "\"/>") ;
        }
    }

    public class ToolbarGroup : List<IToolbarItem>
    {
        public string Name { get; set; }
    }
}