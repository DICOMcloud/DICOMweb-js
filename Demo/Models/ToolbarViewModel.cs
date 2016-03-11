using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Demo.Models
{
    public class ToolbarViewModel : List<ToolbarItem>
    {
        //public ToolbarViewModel ( ) 
        //{
        //    Items = new List<ToolbarItem> ( ) ;
        //}

        //private ICollection<ToolbarItem> Items { get; set;}
    }

    public class ToolbarItem
    {
        public ToolbarItem ( string text, string dataAttribute )
        {
            Text          = text ;
            DataAttribute = dataAttribute ;
        }

        public string Text { get; set; }
        public string DataAttribute { get; set; }

    }
}