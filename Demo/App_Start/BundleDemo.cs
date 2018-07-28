using System.Web;
using System.Web.Optimization;

namespace DICOMwebJS.Demo
{
    public class BundleDemo
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/dicomweb").Include(
                        "~/Scripts/DICOMweb*"));

            bundles.Add(new ScriptBundle("~/bundles/app").Include (
                       "~/JSLib/uids.js",
                       "~/dicomwebjs-demo.js"));

            bundles.Add(new StyleBundle("~/Content/dicomweb-js").Include(
                      "~/Content/demo.css",
                      "~/Content/cornerstone.min.css"));
        }
    }
}
