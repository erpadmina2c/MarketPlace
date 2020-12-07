using System;

namespace CheckpointInventoryStock.API.Models
{
    public class Companyprofile
    {
       public int id { get; set; }
        public string com_name { get; set; }
        public string com_tel { get; set; }
        public string com_domain { get; set; }
        public string com_street { get; set; }
        public string com_city { get; set; }
        public int country_id { get; set; }
        public int branch_num { get; set; }
        public int laptop_num { get; set; }
        public int desk_num { get; set; }
        public int monitor_num { get; set; }
        public string div_revenue { get; set; }
        public int staff_num { get; set; }
        public string con_name { get; set; }
        public string con_email { get; set; }
        public string con_tel { get; set; }
        public string con_mob { get; set; }
        public string mar_con_name { get; set; }
        public string mar_con_tel { get; set; }
        public string mar_con_email { get; set; }
        public string comments { get; set; }
        public int status { get; set; }
        public DateTime modified_at { get; set; }
        public DateTime created_at { get; set; }

    }
}