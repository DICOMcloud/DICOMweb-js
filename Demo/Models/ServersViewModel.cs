using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Demo.Models
{
    public class ServersViewModel : List<SelectListItem>
    {
        public ServersViewModel (  ) 
        {}

        public ServersViewModel ( IEnumerable<KeyValuePair<string,string>> servers  )
        {
            AddRange ( servers.Select ( n=> new SelectListItem ( ) { Text = n.Key, Value = n.Value } ) ) ;    
            
            if ( Count > 0 ) { this[0].Selected  = true ; }
        }
    }
}