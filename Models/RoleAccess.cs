using System;

namespace CheckpointInventoryStock.API.Models
{
    public class RoleAccess
    {
        public int id {get; set;}
        public int menu_id {get; set;}
        public int role_id {get; set;}
        public int status {get; set;}
        public Boolean is_active {get; set;}
        public DateTime created_at {get; set;}
    }
}