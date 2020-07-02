using System;

namespace CheckpointInventoryStock.API.Models
{
    public class RequestLog
    {
    public int id { get; set; }
	public int ref_id { get; set; }
	public int qty { get; set; }
	public decimal price { get; set; }
	public int created_by { get; set; }
	public int status  { get; set; }
	public DateTime created_at { get; set; }
    }
}