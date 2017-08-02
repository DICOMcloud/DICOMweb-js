using System.Web;
using System.Web.Optimization;

namespace CloudPacs.Demo
{
    public class BundleDemo
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/dicomweb").Include(
                        "~/Scripts/DICOMweb*"));

            bundles.Add ( new ScriptBundle("~/bundles/cornerstornViewer").Include (
            "~/bower_components/cornerstone/dist/cornerstone.min.js",    
            "~/bower_components/dicomParser/dist/dicomParser.min.js",
            "~/bower_components/cornerstoneWADOImageLoader/dist/cornerstoneWADOImageLoader.min.js",
            "~/bower_components/cornerstoneMath/dist/cornerstoneMath.min.js",
            "~/bower_components/cornerstoneTools/dist/cornerstoneTools.min.js" )) ;

            bundles.Add(new ScriptBundle("~/bundles/app").IncludeDirectory(
                       "~/JSLib/", "*.js", true));

            bundles.Add(new StyleBundle("~/Content/dicomweb-js").Include(
                      "~/Content/demo.css",
                      "~/Content/cornerstone.min.css"));
        }
    }
}
