using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using CheckpointInventoryStock.API.Dtos;
using CheckpointInventoryStock.API.Models;
using AutoMapper;
using System.Security.Claims;
using System.IO;
using System.Net.Http.Headers;
using MailKit.Net.Smtp;
using MailKit;
using MimeKit;
using System.Data.SqlClient;

namespace CheckpointInventoryStock.API.Controllers
{   
    //[Authorize]
    [Route("api/[controller]")] 
    [ApiController]
    
    public class RequestsController : ControllerBase
    {
        
        private readonly DataContext _context;
        private readonly IAuthRepository _auth;
        private readonly IRequestRepository _repo;
        private readonly IChatboxRepository _chat;
        private readonly IViewchatRepository _viewchat;
        private readonly IHistoryRepository _hisrepo;
        private readonly IMapper _mapper;
        private readonly IWorkshopRepository _repo1;
        private readonly IShareDealRepository _sharedeal;
        public RequestsController(IRequestRepository repo, IHistoryRepository hisrepo, IChatboxRepository chat,
         IWorkshopRepository repo1, DataContext context,IMapper mapper, IViewchatRepository viewchat,
         IShareDealRepository sharedeal, IAuthRepository auth)
        {
            _hisrepo = hisrepo;
            _repo = repo;
            _context = context;
            _mapper = mapper;
            _repo1 = repo1;
            _chat = chat;
            _viewchat = viewchat;
            _sharedeal = sharedeal;
            _auth = auth;

        }

        

        // POST api/values
        [HttpPost("requirementpost")]
        public async Task<IActionResult> SubmitRequest([FromBody]Request request)
        {
            string Subject = "Requirement";
            string mytext = "";
            string Text = "New requirement posted on Marketplace kindly check and update as per your stock. check specification details below";
            var users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "Laptop Requirement"), new SqlParameter("option", 1)).ToList();
            if (request.Type == 1){
                Subject = "Stock";
                Text = "Available stock posted on Marketplace. check specification details below";
                users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "New Available Stock"), new SqlParameter("option", 1)).ToList();
            }

            var values = await _context.PartProducts.ToListAsync();
            var requestToCreate = new Request
            {
                MakeId =request.MakeId,
                ModelId =request.ModelId,
                ProcessorId =request.ProcessorId,
                HDD =request.HDD,
                RAM =request.RAM,
                Adapter =request.Adapter,
                gen_id = request.gen_id,
                loc_id = request.loc_id,
                Cname =request.Cname,
                Qty = request.Qty,
                Price = request.Price,
                Comment = request.Comment,
                UserId =request.UserId,
                Status =request.Status,
                Type =request.Type,
                req_type = request.req_type,
                CreatedDate =DateTime.Now

            };
            var createdRequest = await _repo.Request(requestToCreate);

            var requestlogToCreate = new RequestLog
            {
                ref_id =createdRequest.Id,
                qty =request.Qty,
                price =request.Price,
                created_by =request.UserId,
                created_at = DateTime.Now

            };
            var createdRequestlog = await _repo.RequestLog(requestlogToCreate);

            var user_id = new SqlParameter("user_id", request.UserId);

            List<RequirementList> availableStock = new List<RequirementList>();

            var result = _context.RequirementLists.FromSql<RequirementList>("EXEC spgetrequirements @user_id", @user_id).ToList();
            
            var flag = "";
            try{
                var smtp = new SmtpClient();
                smtp.Connect("mail.a2cuae.com", 465, true);
                smtp.Disconnect(true);
                flag = "pass";
            } catch (Exception ex)
            {   
                ex.ToString();
                flag = "fail";
            }  
            if(flag == "fail"){
                return Ok(result);
            }
            var result1 = result.Where(e=> e.RequestID==createdRequest.RequestID).FirstOrDefault();
            
              
            foreach (var item in users)
            {
                
                    if (request.Type == 1){
                            mytext = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736;padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>"+Subject+" Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#21355C;font-weight:bold'><small>"+Subject+" No #"+result1.RequestID+".</small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#062736;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + item.username + "</span></div><div> "+Text+"</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><div style='color:#08ab9e;background: #062736;text-align: center;padding: 19px 1px;'><b>"+Subject+" Specification.</b></div><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin: 18px 20px;margin-bottom:15px;color:#062736;'> <tr> <th style='color:#21355C;text-align: left;width: 20%;'>Make:</th> <td style='color:#21355C;text-align: left;'>" + result1.MakeName + "</td><th style='color:#21355C;text-align: left;width: 20%;'>HDD:</th> <td style='text-align: left;'>" + result1.HddName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Model:</th> <td style='color:#21355C;text-align: left;'>" + result1.ModelName + "</td><th style='color:#21355C;text-align: left;width: 20%;'>RAM:</th> <td style='text-align: left;'>" + result1.RAMName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Processor:</th> <td style='text-align: left;'>" + result1.Processor + "</td><th style='color:#21355C;text-align: left;width: 20%;'>Gen:</th><td style='text-align: left;'>" + result1.GenName + "</td></tr><tr> <th style='color:#21355C;text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>" + result1.Qty + "</td><th style='text-align: left;width: 20%;'>Type:</th> <td style='text-align: left;'>" + result1.TypeName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Adapter:</th> <td style='text-align: left;'>"+result1.AdapterName+"</td><th style='text-align: left;width: 20%;'>CreatedBy:</th><td style='color:#21355C;text-align: left;'>" + result1.Username + "</td></tr><tr> <th style='color:#21355C;text-align: left;width: 20%;'>Price:</th> <td style='color:#21355C;text-align: left;'>"+result1.Price+"</td><th style='color:#21355C;text-align: left;width: 20%;'></th><td style='color:#21355C;text-align: left;'></td></tr></table> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'> <div style='color:#08ab9e;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>CLICK HERE</a> TO CHECK "+Subject+" </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html>";
                    }else {
                            mytext = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736;padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>"+Subject+" Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#21355C;font-weight:bold'><small>"+Subject+" No #"+result1.RequestID+".</small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#525252;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + item.username + "</span></div><div> "+Text+"</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><div style='color:#08ab9e;background: #062736;text-align: center;padding: 19px 1px;'><b>"+Subject+" Specification.</b></div><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin: 18px 20px;margin-bottom:15px;color:#21355C;'> <tr> <th style='text-align: left;width: 20%;'>Make:</th> <td style='text-align: left;'>" + result1.MakeName + "</td><th style='text-align: left;width: 20%;'>HDD:</th> <td style='text-align: left;'>" + result1.HddName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Model:</th> <td style='text-align: left;'>" + result1.ModelName + "</td><th style='text-align: left;width: 20%;'>RAM:</th> <td style='text-align: left;'>" + result1.RAMName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Processor:</th> <td style='text-align: left;'>" + result1.Processor + "</td><th style='text-align: left;width: 20%;'>Gen:</th><td style='text-align: left;'>" + result1.GenName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>" + result1.Qty + "</td><th style='text-align: left;width: 20%;'>Type:</th> <td style='text-align: left;'>" + result1.TypeName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Adapter:</th> <td style='text-align: left;'>"+result1.AdapterName+"</td><th style='text-align: left;width: 20%;'>CreatedBy:</th><td style='text-align: left;'>" + result1.Username + "</td><td></td></tr></table> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'> <div style='color:#08ab9e;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>CLICK HERE</a> TO CHECK "+Subject+" </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html>";
                        
                    } 
                    var message = new MimeMessage();
                    // From address
                    message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                    // To address
                    message.To.Add(new MailboxAddress(item.Email));

                    // Subject 
                    
                    message.Subject = "New " + Subject + " " + result1.MakeName + " " + result1.ModelName + " / " + result1.Processor + " / " + result1.RAMName + " / " + result1.HddName;
                    // Body 
                    message.Body =  new TextPart("html") {
                        Text = mytext,
                    };

                    using (var client = new SmtpClient()){

                        //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
        
                        client.Connect("mail.a2cuae.com", 465, true);

                        client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                        client.Send(message);

                        client.Disconnect(true);
                    }
                
            }  

             return Ok(result);
        }

        // Get api/getprice
        [AllowAnonymous]
        [HttpGet("getprice")]
        public async Task<IActionResult> GetPrice()
        {
             var price = await _context.Pricings.ToListAsync();

            List<PricingList> availableStock = new List<PricingList>();

            var result = _context.PricingLists.FromSql<PricingList>("EXEC spgetpricing").ToList();
            

            return Ok(result);
        }

        // Get api/getprice
        [AllowAnonymous]
        [HttpPut("searchaverageprice")]
        public async Task<IActionResult> SearchAveragePrice([FromBody]PricingParameter request)
        {
             var price = await _context.Pricings.ToListAsync();

             var make_id= new SqlParameter("make_id", request.make_id);
             var model_id = new SqlParameter("model_id", request.model_id);
             var proc_id = new SqlParameter("proc_id", request.proc_id);
             var hdd_id = new SqlParameter("hdd_id", request.hdd_id);
            var ram_id = new SqlParameter("ram_id", request.ram_id);
            var supplier_id = new SqlParameter("supplier_id", request.supplier_id);
            var type_id = new SqlParameter("type_id", request.type);
            var p_start = new SqlParameter("p_start", request.start);
            var p_end = new SqlParameter("p_end", request.end);
            

            var result = _context.AvgPriceLists.FromSql("EXECUTE dbo.spgetavegpricing @make_id,@model_id,@proc_id,@hdd_id,@ram_id,@supplier_id,@type_id,@p_start,@p_end", make_id,model_id,proc_id,hdd_id,ram_id,supplier_id,type_id,p_start,p_end);            

            return Ok(result);
        }

        // POST api/values
        [HttpPost("postprice")]
        public async Task<IActionResult> PostPrice([FromBody]Pricing request)
        {

            var priceTocreate = new Pricing
            {
                po_num =request.po_num,
                make_id =request.make_id,
                model_id =request.model_id,
                proc_id =request.proc_id,
                hdd_id =request.hdd_id,
                ram_id =request.ram_id,
                supplier_id =request.supplier_id,
                price = request.price,
                qty = request.qty,
                user_id = request.user_id,
                purchase_date = request.purchase_date,
                created_at =DateTime.Now

            };
            var createdPrice = await _repo.Pricing(priceTocreate);

            return Ok(201);
        }

        [HttpPost("addpurchaseorderpost")]
        public async Task<IActionResult> addPurchaseOrderpost([FromBody]PurchaseOrder request)
        {

            var values = await _context.PartProducts.ToListAsync();
            var poToCreate = new PurchaseOrder
            {
                po_num =request.po_num,
                emp_id =request.emp_id,
                make_id =request.make_id,
                model_id =request.model_id,
                proc_id =request.proc_id,
                hdd_id =request.hdd_id,
                ram_id =request.ram_id,
                adp_id =request.adp_id,
                gen_id = request.gen_id,
                po_qty = request.po_qty,
                po_price =request.po_price,
                po_type = request.po_type,
                s_name = request.s_name,
                po_status = 1,
                po_eta = request.po_eta,
                comment =request.comment,
                created_at =DateTime.Now,
                updated_at =DateTime.Now

            };
            var poToCreated = await _repo.PurchaseOrder(poToCreate);
            


            // List<POList> availableStock = new List<POList>();

            // var result = _context.POLists.FromSql<POList>("EXEC spgetpurchaseorders").ToList();
            
            //var result1 = result.Where(e=> e.id==poToCreated.id).FirstOrDefault();
            
            // var users =from user in _context.Users
            //             join role in _context.UserRoles 
            //             on user.Id equals role.UserID
            //             into Role
            //             from role in Role.DefaultIfEmpty()
            //             where role.RoleID == 1 || role.RoleID == 2
            //    select new
            //     {
            //         username = user.username,
            //         Email = user.Email
            //     };   
            // foreach (var item in users)
            // {

            //     var message = new MimeMessage();
            //     // From address
            //     message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

            //     // To address
            //     message.To.Add(new MailboxAddress("PO Added", item.Email));

            //     // Subject 
                
            //     message.Subject = "PO Added " + result1.make_name + " " + result1.model_name + " / " + result1.proc_name + " / " + result1.ram_name + " / " + result1.hdd_name;
            //     // Body 
            //     message.Body =  new TextPart("html") {
            //         Text = "<!DOCTYPE html><html><head><title>Circular Computing/title></head><body><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#80808057;'> <br><br><table width='600' border='0' cellspacing='0' cellpadding='0'> <tr><td height='70' align='left' valign='middle'></td></tr><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#21355C ; font-family:Arial, Helvetica, sans-serif; padding:10px;'><div style='font-size:13px; color:#fff;text-align: center;font-family: sans-serif;'> <b>PO Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#21355C ; font-size:28px; font-family:Georgia, 'Times New Roman', Times, serif;'><small>PO No #"+result1.po_num+".</small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#525252; font-family:Arial, Helvetica, sans-serif; padding:10px;'> <div style='font-size:16px;'> Dear <span style='text-transform:capitalize'>" + item.username + "</span>, </div><div style='font-size:12px;'> New purchase order has been posted on Marketplace kindly check specification details below</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><div style='font-size:20px;color:#fff;background: #21355C ;font-family:Arial, Helvetica, sans-serif;text-align: center;padding: 19px 1px;'><b>PO Specification.</b></div><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin: 18px 51px;margin-bottom:15px;font-family:Arial, Helvetica, sans-serif;'> <tr> <th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>Make:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.make_name + "</td><th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>HDD:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.hdd_name + "</td></tr><tr> <th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>Model:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.model_name + "</td><th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>RAM:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.ram_name + "</td></tr><tr> <th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>Processor:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.proc_name + "</td><th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>Gen:</th><td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.gen_name + "</td></tr><tr> <th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>Qty:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.po_qty + "</td><th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>Type:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.type_name + "</td></tr><tr> <th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>Adapter:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>"+result1.adp_name+"</td><th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>CreatedBy:</th><td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.user_name + "</td></tr><tr> <th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>Price:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>"+result1.po_price+"</td><th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'></th><td style='font-size:16px; color:#21355C;text-align: left;'></td></tr></table> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#21355C ; font-family:Arial, Helvetica, sans-serif;'> <div style='font-size:13px; color:#80808057;'> <br><a href='http://itad.circularcomputing.com' style='color:#80808057; text-decoration:underline;'>CLICK HERE</a> TO CHECK PURCHASE ORDER DETAILS </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html></body></html>",
            //     };

            //     using (var client = new SmtpClient()){

            //         //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
    
            //         client.Connect("mail.a2cuae.com", 465, true);

            //         client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

            //         client.Send(message);

            //         client.Disconnect(true);
            //     }
            // }  

             return Ok(201);
        }

        [HttpPost("addcommitpurchaseorderpost")]
        public async Task<IActionResult> addCommitPurchaseOrderpost([FromBody]CommitPurchaseOrder request)
        {

            var values = await _context.PartProducts.ToListAsync();
            var poToCreate = new CommitPurchaseOrder
            {
                emp_id =request.emp_id,
                po_num =request.po_num,
                uk_po_num =request.uk_po_num,
                make_id =request.make_id,
                model_id =request.model_id,
                proc_id =request.proc_id,
                cpo_qty = request.cpo_qty,
                cpo_price =request.cpo_price,
                s_name = request.s_name,
                cpo_status = 1,
                cpo_eta = request.cpo_eta,
                cpo_ped = request.cpo_ped,
                comment =request.comment,
                created_at =DateTime.Now,
                updated_at =DateTime.Now

            };
            var poToCreated = await _repo.CommitPurchaseOrder(poToCreate);
            var pologToCreate = new COPLog
            {
                ref_id =poToCreated.id,
                po_num =request.po_num,
                uk_po_num =request.uk_po_num,
                cpo_qty =request.cpo_qty,
                cpo_price =request.cpo_price,
                flag =1,
                user_id = request.emp_id,
                comment = request.comment,
                cpo_eta = request.cpo_eta,
                cpo_ped = request.cpo_ped,
                created_at =DateTime.Now,

            };
            var pologToCreated = await _repo.COPLog(pologToCreate);

            
            return Ok(201);
        }

        [HttpPost("senditadpost")]
        public async Task<IActionResult> senditadPost([FromBody]ITAD request)
        {

            var values = await _context.PartProducts.ToListAsync();
            var itadoCreate = new ITAD
            {
                p_type =request.p_type,
                p_title =request.p_title,
                make_id =request.make_id,
                model_name =request.model_name,
                cpu_id =request.cpu_id,
                gen_id =request.gen_id,
                ram_id = request.ram_id,
                hdd_id =request.hdd_id,
                adp_id = request.adp_id,
                form_factor = request.form_factor,
                lang_name = request.lang_name,
                qty = request.qty,
                itad_cur =request.itad_cur,
                price =request.price,
                location =request.location,
                p_eta =request.p_eta,
                p_url =request.p_url,
                comment =request.comment,
                user_id =request.user_id,
                status =1,
                stock_type = request.stock_type,
                created_at =DateTime.Now

            };
            var poToCreated = await _repo.ITAD(itadoCreate);

            if(request.stock_type == "Circular") {
                
                    var users =from user in _context.Users
                        join role in _context.UserRoles 
                        on user.Id equals role.UserID
                        into Role
                        from role in Role.DefaultIfEmpty()
                        where role.RoleID == 12 && user.active == 1
                        select new
                            {
                                username = user.username,
                                Email = user.Email,
                                FirstName = user.FirstName
                            }; 
                    var user_id = new SqlParameter("user_id", request.user_id);
                    List<ITADList> availableStock = new List<ITADList>();

                    var result = _context.ITADLists.FromSql<ITADList>("EXEC spgetitad @user_id", @user_id).ToList();
                    
                    var flag = "";
                    try{
                        var smtp = new SmtpClient();
                        smtp.Connect("mail.a2cuae.com", 465, true);
                        smtp.Disconnect(true);
                        flag = "pass";
                    } catch (Exception ex)
                    {   
                        ex.ToString();
                        flag = "fail";
                    }  
                    if(flag == "fail"){
                        return Ok(201);
                    }
                    var result1 = result.Where(e=> e.id==poToCreated.id).FirstOrDefault();

                    foreach (var item in users)
                    {
                        
                            var message = new MimeMessage();
                            // From address
                            message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                            // To address
                            message.To.Add(new MailboxAddress(item.Email));

                            // Subject 
                            
                            message.Subject = "Circular Computing Stock Requirement";
                            // Body 
                            message.Body =  new TextPart("html") {
                                Text = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='0' cellspacing='0' cellpadding='0'  style='border: 1px solid #062736;'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ; padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>Circular Computing Stock Requirement</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' style='margin-top:15px;' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;'> <div> Dear <span style='text-transform:capitalize'>" + item.FirstName + "</span> </div><div>A new requirement has been added to our portal.</div><div>The basic details are listed below, if you can supply please inform us.</div></td></tr></table><br><div style='color:#08ab9e;background: #062736 ;text-align: center;padding: 19px 1px;'><b>Requirement Specification.</b></div><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' style='color:#03443f;margin-bottom:15px;margin-top:15px;'><tr><th style='text-align: left;width: 20%;'>Type:</th> <td style='text-align: left;'>" + result1.p_typename + "</td><th style='text-align: left;width: 20%;'>Title:</th> <td style='text-align: left;'>" + result1.p_title + "</td></tr><tr><th style='text-align: left;width: 20%;'>Make:</th> <td style='text-align: left;'>" + result1.make_name + "</td><th style='text-align: left;width: 20%;'>Model:</th> <td style='text-align: left;'>" + result1.model_name + "</td></tr><tr><th style='text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>" + result1.qty + "</td><th style='text-align: left;width: 20%;'>Target Price:</th> <td style='text-align: left;'>" + result1.itad_cur + + result1.price + "</td></tr><tr><th style='text-align: left;width: 20%;'>Comment:</th> <td style='text-align: left;'>" + result1.comment + "</td></tr></table> <br><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736 ;'> <div style='color:#08ab9e;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>CLICK HERE</a> to check the requirement </div></td></tr></table></td></tr></table><br><br></td></tr></table></body></html>",
                            };

                            using (var client = new SmtpClient()){

                                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
                
                                client.Connect("mail.a2cuae.com", 465, true);

                                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                                client.Send(message);

                                client.Disconnect(true);
                            }
                        
                    }
                    
            }            
            else if(request.stock_type == "ITAD") {

                    var users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "ITADEmail"), new SqlParameter("option", 1)).ToList(); 
                    var user_id = new SqlParameter("user_id", request.user_id);
                    List<ITADList> availableStock = new List<ITADList>();

                    var result = _context.ITADLists.FromSql<ITADList>("EXEC spgetitad @user_id", @user_id).ToList();
                    
                    var flag = "";
                    try{
                        var smtp = new SmtpClient();
                        smtp.Connect("mail.a2cuae.com", 465, true);
                        smtp.Disconnect(true);
                        flag = "pass";
                    } catch (Exception ex)
                    {   
                        ex.ToString();
                        flag = "fail";
                    }  
                    if(flag == "fail"){
                        return Ok(201);
                    }
                    var result1 = result.Where(e=> e.id==poToCreated.id).FirstOrDefault();

                    foreach (var item in users)
                    {
                        
                            var message = new MimeMessage();
                            // From address
                            message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                            // To address
                            message.To.Add(new MailboxAddress(item.Email));

                            // Subject 
                            
                            message.Subject = "Circular Computing Stock Availability";
                            // Body 
                            message.Body =  new TextPart("html") {
                                Text = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='0' cellspacing='0' cellpadding='0'  style='border: 1px solid #062736;'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ; padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>Circular Computing Stock Availability</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' style='margin-top:15px;' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;'> <div> Dear <span style='text-transform:capitalize'>" + item.Email + "</span> </div><div>There is a new entry of stock availability on the Circular Computing portal.</div></td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;padding:10px 0px;'><div>The Stock details are:</div></td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' style='color:#03443f;margin-bottom:15px;margin-top:15px;'><tr><th style='text-align: left;width: 20%;'>Type:</th> <td style='text-align: left;'>" + result1.p_typename + "</td><th style='text-align: left;width: 20%;'>Title:</th> <td style='text-align: left;'>" + result1.p_title + "</td></tr><tr><th style='text-align: left;width: 20%;'>Make:</th> <td style='text-align: left;'>" + result1.make_name + "</td><th style='text-align: left;width: 20%;'>Model:</th> <td style='text-align: left;'>" + result1.model_name + "</td></tr><tr><th style='text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>" + result1.qty + "</td><th style='text-align: left;width: 20%;'>Location:</th> <td style='text-align: left;'>" + result1.loc_name + "</td></tr><tr><th style='text-align: left;width: 20%;'>Comment:</th> <td style='text-align: left;'>" + result1.comment + "</td><th style='text-align: left;width: 20%;'>Created by:</th> <td style='text-align: left;'>" + result1.username + "</td></tr></table> <br><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736 ;'> <div style='color:#08ab9e;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>CLICK HERE</a> to check the availability </div></td></tr></table></td></tr></table><br><br></td></tr></table></body></html>",
                            };

                            using (var client = new SmtpClient()){

                                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
                
                                client.Connect("mail.a2cuae.com", 465, true);

                                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                                client.Send(message);

                                client.Disconnect(true);
                            }
                        
                    }
                    
            }
                       
            return Ok(201);
        }

        [AllowAnonymous]
        [HttpGet("getitad/{userid}")]
        public async Task<IActionResult> GetITAD(int userid)
        {
            
            var values = await _context.ITADs.ToListAsync();
            var user_id = new SqlParameter("user_id", userid);
           
            List<ITADList> availableStock = new List<ITADList>();

            var result = _context.ITADLists.FromSql<ITADList>("EXEC spgetitad @user_id", @user_id).ToList();

             return Ok(result);
        }
        [AllowAnonymous]
        [HttpPost("itadviewChats")]
        public async Task<IActionResult> ITADviewChats([FromBody]ShortfallViewchat request)
        {
            
            var values = await _context.Departments.ToListAsync();

            var reqid = new SqlParameter("reqid", request.ref_id);
            var uid = new SqlParameter("uid", request.user_id);
            var type_id = new SqlParameter("type_id", request.type);
            var blogs = _context.Viewchats.FromSql("EXECUTE dbo.spShortfallviewChats @reqid,@uid,@type_id", reqid, uid, type_id).ToList();
                        
            var result =from chat in _context.ShortfallChatBoxs
                        join ord in _context.ITADs 
                        on chat.ref_Id equals ord.id
                        into Order
                        from ord in Order.DefaultIfEmpty()
                        join user in _context.Users
                        on chat.u_Id equals user.Id
                        into User
                        from user in User.DefaultIfEmpty()
                        where chat.type == request.type
                        orderby chat.id ascending
               select new
                {
                    Id = chat.id,
                    RequestID = ord.id,
                    UserName = user.username,
                    Text = chat.text,
                    u_Id = chat.u_Id,
                    ref_Id = chat.ref_Id,
                    Status = chat.status,
                    CreatedDate = chat.createdDate
                };           
            
            
             return Ok(result);
        }

        [HttpPut("editpurchaseorderpost")]
        public async Task<IActionResult> EditPurchaseOrderpost([FromBody]PurchaseOrder request)
        {

            var values1 = await _repo.GetRequests();
            
            var entity = _context.PurchaseOrders.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {
                entity.po_qty = request.po_qty;
                entity.po_price =request.po_price;
                entity.s_name = request.s_name;
                entity.po_eta = request.po_eta;
                entity.comment =request.comment;
                entity.updated_at =DateTime.Now;
                entity.updated_by =request.updated_by;
                _context.SaveChanges();
            }          

             return Ok(201);
        }

        [HttpPut("editcommitpurchaseorderpost")]
        public async Task<IActionResult> EditCommitPurchaseOrderpost([FromBody]CommitPurchaseOrder request)
        {

            var values1 = await _repo.GetRequests();
            
            var entity = _context.CommitPurchaseOrders.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {
                entity.cpo_qty = request.cpo_qty;
                entity.cpo_price =request.cpo_price;
                entity.po_num =request.po_num;
                entity.uk_po_num =request.uk_po_num;
                entity.s_name = request.s_name;
                entity.cpo_eta = request.cpo_eta;
                entity.cpo_ped = request.cpo_ped;
                entity.comment = request.comment;
                entity.updated_at =DateTime.Now;
                entity.updated_by =request.updated_by;
                _context.SaveChanges();
            } 
            var pologToCreate = new COPLog
            {
                ref_id =entity.id,
                cpo_qty =request.cpo_qty,
                po_num =request.po_num,
                uk_po_num =request.uk_po_num,
                cpo_price =request.cpo_price,
                flag =2,
                user_id = request.updated_by,
                comment = request.comment,
                cpo_eta = request.cpo_eta,
                cpo_ped = request.cpo_ped,
                created_at =DateTime.Now,

            };
            var pologToCreated = await _repo.COPLog(pologToCreate);         

             return Ok(201);
        }
        [HttpPut("updatepurchasecommitorderpost")]
        public async Task<IActionResult> UpdateCommitPurchaseOrderpost([FromBody]CommitPurchaseOrder request)
        {

            var values1 = await _repo.GetRequests();
            
            var entity = _context.CommitPurchaseOrders.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {
                entity.cpo_status = request.cpo_status;
                entity.updated_at =DateTime.Now;
                entity.updated_by =request.updated_by;
                _context.SaveChanges();
            } 
            var pologToCreate = new COPLog
            {
                ref_id =entity.id,
                po_num =entity.po_num,
                cpo_qty =entity.cpo_qty,
                cpo_price =entity.cpo_price,
                flag = request.cpo_status,
                user_id = request.updated_by,
                comment = request.comment,
                cpo_eta = entity.cpo_eta,
                cpo_ped = entity.cpo_ped,
                receive_date = entity.receive_date,
                created_at =DateTime.Now,

            };
            var pologToCreated = await _repo.COPLog(pologToCreate);         

             return Ok(201);
        }

        [HttpPut("receivepurchasecommitorderpost")]
        public async Task<IActionResult> ReceiveCommitPurchaseOrderpost([FromBody]CommitPurchaseOrder request)
        {

            var values1 = await _repo.GetRequests();
            
            var entity = _context.CommitPurchaseOrders.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {
                entity.receive_date = request.receive_date;
                entity.cpo_status = request.cpo_status;
                entity.updated_at =DateTime.Now;
                entity.updated_by =request.updated_by;
                _context.SaveChanges();
            } 
            var pologToCreate = new COPLog
            {
                ref_id =entity.id,
                cpo_qty =entity.cpo_qty,
                cpo_ped = entity.cpo_ped,
                receive_date =request.receive_date,
                po_num =entity.po_num,
                cpo_price =entity.cpo_price,
                flag = request.cpo_status,
                user_id = request.updated_by,
                comment = "Received",
                cpo_eta = entity.cpo_eta,
                created_at =DateTime.Now,
            };
            var pologToCreated = await _repo.COPLog(pologToCreate);         

             return Ok(201);
        }

        [HttpPut("updatecommitorderpost")]
        public async Task<IActionResult> UpdateCommitOrderpost([FromBody]CommitOrder request)
        {

            var values1 = await _repo.GetRequests();
            
            var entity = _context.CommitOrders.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {
                entity.co_status = request.co_status;
                entity.updated_at =DateTime.Now;
                entity.updated_by =request.updated_by;
                _context.SaveChanges();
            } 
            var pologToCreate = new COLog
            {
                ref_id =entity.id,
                o_num =entity.o_num,
                o_type =entity.o_type,
                c_name =entity.c_name,
                co_qty =entity.co_qty,
                flag = request.co_status,
                user_id = request.updated_by,
                comment = request.comment,
                co_edd = entity.co_edd,
                created_at =DateTime.Now,

            };
            var pologToCreated = await _repo.COLog(pologToCreate);         

             return Ok(201);
        }
        [HttpPut("bookcommitorderpost")]
        public async Task<IActionResult> BookCommitOrderpost([FromBody]CommitOrder request)
        {

            var values1 = await _repo.GetRequests();
            
            var entity = _context.CommitOrders.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {
                entity.booked_status = request.co_status;
                entity.updated_at =DateTime.Now;
                entity.updated_by =request.updated_by;
                _context.SaveChanges();
            } 
            var pologToCreate = new COLog
            {
                ref_id =entity.id,
                o_num =entity.o_num,
                o_type =entity.o_type,
                co_qty =entity.co_qty,
                c_name =entity.c_name,
                flag = 6,
                user_id = request.updated_by,
                comment = "Booked",
                co_edd = entity.co_edd,
                created_at =DateTime.Now,

            };
            var pologToCreated = await _repo.COLog(pologToCreate);         

             return Ok(201);
        }

        [HttpPut("closecommitorderpost")]
        public async Task<IActionResult> CloseCommitOrderpost([FromBody]CommitOrder request)
        {

            var values1 = await _repo.GetRequests();
            
            var entity = _context.CommitOrders.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {
                entity.close_status = request.co_status;
                entity.updated_at =DateTime.Now;
                entity.updated_by =request.updated_by;
                _context.SaveChanges();
            } 
            var pologToCreate = new COLog
            {
                ref_id =entity.id,
                o_num =entity.o_num,
                o_type =entity.o_type,
                c_name =entity.c_name,
                co_qty =entity.co_qty,
                flag = 7,
                user_id = request.updated_by,
                comment = "CLOSED",
                co_edd = entity.co_edd,
                created_at =DateTime.Now,

            };
            var pologToCreated = await _repo.COLog(pologToCreate);         

             return Ok(201);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getpurchaseorder")]
        public async Task<IActionResult> GetPurchaseOrder(int userid)
        {
            
            var values = await _context.PurchaseOrders.ToListAsync();

            List<POList> availableStock = new List<POList>();

            var result = _context.POLists.FromSql<POList>("EXEC spgetpurchaseorders").ToList();
            
             return Ok(result);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getcommitpurchaseorder/{userid}")]
        public async Task<IActionResult> GetCommitPurchaseOrder(int userid)
        {
            var values = await _context.ReserveOrders.ToListAsync();
            var user_id = new SqlParameter("user_id", userid);             

            List<CPOList> availableStock = new List<CPOList>();

            var result = _context.CPOLists.FromSql<CPOList>("EXEC spgetcommitpurchaseorders @user_id", @user_id).ToList();
            
             return Ok(result);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getorder")]
        public async Task<IActionResult> GetOrder()
        {
            
            var values = await _context.ReserveOrders.ToListAsync();
           
            List<OrderList> availableStock = new List<OrderList>();

            var result = _context.OrderLists.FromSql<OrderList>("EXEC spgetorders").ToList();

             return Ok(result);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getcommitorder/{userid}")]
        public async Task<IActionResult> GetCommitOrder(int userid)
        {
            var values = await _context.ReserveOrders.ToListAsync();
            var user_id = new SqlParameter("user_id", userid);
           
            List<CommitOrderList> availableStock = new List<CommitOrderList>();

            var result = _context.CommitOrderLists.FromSql<CommitOrderList>("EXEC spgetcommitorders @user_id", @user_id).ToList();

             return Ok(result);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getclosedeal")]
        public async Task<IActionResult> GetcloseDeal()
        {
            
            
            var values = await _context.Requests.ToListAsync();
           
            List<GetDealData> availableStock = new List<GetDealData>();

            var result = _context.GetDealDatas.FromSql<GetDealData>("EXEC spgetclosedeals").ToList();

             return Ok(result);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getremoveddeal")]
        public async Task<IActionResult> GetRemovedDeal()
        {
            
            var values = await _context.Requests.ToListAsync();
           
            List<GetDealData> availableStock = new List<GetDealData>();

            var result = _context.GetDealDatas.FromSql<GetDealData>("EXEC spgetRemoveddeals").ToList();

             return Ok(result);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getrejecteddeal")]
        public async Task<IActionResult> GetRejectedDeal()
        {
            
            
            var values = await _context.Requests.ToListAsync();
           
            List<GetDealData> availableStock = new List<GetDealData>();

            var result = _context.GetDealDatas.FromSql<GetDealData>("EXEC spgetRejectdeals").ToList();

             return Ok(result);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getshortfalldetail/{userid}/{type}")]
        public async Task<IActionResult> GetShortfallDetails(int userid, int type)
        {
            
            var values = await _context.Requests.ToListAsync();
            
            var user_id = new SqlParameter("user_id", userid);
            var type_id = new SqlParameter("type_id", type);

            List<ShortfallDetailList> availableStock = new List<ShortfallDetailList>();

            var result = _context.ShortfallDetailLists.FromSql<ShortfallDetailList>("EXEC spgetshortfalldetails @user_id, @type_id", user_id, type_id).ToList();

             return Ok(result);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getshortfall/{userid}/{type}")]
        public async Task<IActionResult> GetShortfall(int userid, int type)
        {
            var values = await _context.Requests.ToListAsync();
           
            var user_id = new SqlParameter("user_id", userid);
            var type_id = new SqlParameter("type_id", type);

            List<ShortfallList> availableStock = new List<ShortfallList>();

            var result = _context.ShortfallLists.FromSql<ShortfallList>("EXEC spgetshortfalls @user_id, @type_id", user_id, type_id).ToList();

             return Ok(result);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getshortfallrefurb/{userid}/{type}")]
        public async Task<IActionResult> GetShortfallRefurb(int userid, int type)
        {
            var values = await _context.Requests.ToListAsync();
           
            var user_id = new SqlParameter("user_id", userid);
            var type_id = new SqlParameter("type_id", type);

            List<ShortfallRefurbList> availableStock = new List<ShortfallRefurbList>();

            var result = _context.ShortfallRefurbLists.FromSql<ShortfallRefurbList>("EXEC spgetRefurbshortfalls @user_id, @type_id", user_id, type_id).ToList();

             return Ok(result);
        }

        
        // POST api/values
        [AllowAnonymous]
        [HttpGet("getcommitshortfall/{userid}/{type1}/{type2}")]
        public async Task<IActionResult> GetCommitShortfall(int userid, int type1, int type2)
        {
            var values = await _context.Requests.ToListAsync();
           
            var user_id = new SqlParameter("user_id", userid);
            var type1_id = new SqlParameter("type1_id", type1);
            var type2_id = new SqlParameter("type2_id", type2);

            List<CommitShortFall> availableStock = new List<CommitShortFall>();

            var result = _context.CommitShortFalls.FromSql<CommitShortFall>("EXEC spgetcommitshortfall @user_id, @type1_id, @type2_id", user_id, type1_id, type2_id).ToList();

             return Ok(result);
        }
        
        // POST api/values
        [HttpPost("activatemodel")]
        public async Task<IActionResult> ActivateModel([FromBody]ReportSetting request)
        {

            var values1 = await _repo.GetRequests();
            
            var user_id = new SqlParameter("user_id", request.user_id);
            var model_id = new SqlParameter("model_id", request.model_id);
            var s_type = new SqlParameter("s_type", request.s_type);
            var status = new SqlParameter("status", request.status);

            var activatedmodel = _context.ReportSettings.FromSql("EXECUTE dbo.spActivateModel @user_id,@model_id, @s_type, @status", user_id, model_id, s_type, status).ToList();
            
            return Ok(201);
        }

        
        // POST api/values
        [HttpPost("activateproc")]
        public async Task<IActionResult> ActivateProc([FromBody]ProcReportSetting request)
        {

            var values1 = await _repo.GetRequests();
            
            var user_id = new SqlParameter("user_id", request.user_id);
            var proc_id = new SqlParameter("proc_id", request.proc_id);
            var s_type = new SqlParameter("s_type", request.s_type);
            var status = new SqlParameter("status", request.status);

            var activatedmodel = _context.ProcReportSettings.FromSql("EXECUTE dbo.spActivateProc @user_id,@proc_id, @s_type, @status", user_id, proc_id, s_type, status).ToList();
            
            return Ok(201);
        }

        // POST api/values
        [HttpPost("addOrder")]
        public async Task<IActionResult> AddOrder([FromBody]Order request)
        {

            var values = await _context.PartProducts.ToListAsync();
            var orderToCreate = new Order
            {
                make_id =request.make_id,
                model_id =request.model_id,
                processor_id =request.processor_id,
                o_qty =request.o_qty,
                o_num =request.o_num,
                c_name =request.c_name,
                user_id = request.user_id,
                status = 0,
                e_edd = request.e_edd,
                created_at =DateTime.Now,
                updated_at =DateTime.Now

            };
            var orderToCreated = await _repo.Order(orderToCreate);

            // List<OrderList> availableStock = new List<OrderList>();

            // var result = _context.OrderLists.FromSql<OrderList>("EXEC spgetorders").ToList();
            
            // var result1 = result.Where(e=> e.id==orderToCreated.id).FirstOrDefault();
            
            // var users =from user in _context.Users
            //             join role in _context.UserRoles 
            //             on user.Id equals role.UserID
            //             into Role
            //             from role in Role.DefaultIfEmpty()
            //             where role.RoleID == 1  || role.RoleID == 2
            //    select new
            //     {
            //         username = user.username,
            //         Email = user.Email
            //     };   
            // foreach (var item in users)
            // {
                // var message = new MimeMessage();
                // // From address
                // message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                // // To address
                // message.To.Add(new MailboxAddress("New Order", item.Email));

                // Subject 
                
                // message.Subject = "New Order " + result1.MakeName + " " + result1.ModelName + " / " + result1.Processor;
                // // Body 
                // message.Body =  new TextPart("html"){
                //     Text = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#80808057;'> <br><br><table width='600' border='0' cellspacing='0' cellpadding='0'> <tr><td height='70' align='left' valign='middle'></td></tr><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#21355C ; font-family:Arial, Helvetica, sans-serif; padding:10px;'><div style='font-size:13px; color:#fff;text-align: center;font-family: sans-serif;'> <b>New Order Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#21355C ; font-size:28px; font-family:Georgia, 'Times New Roman', Times, serif;'><small>Order No #"+result1.o_num+".</small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#525252; font-family:Arial, Helvetica, sans-serif; padding:10px;'> <div style='font-size:16px;'> Dear <span style='text-transform:capitalize'>" + item.username + "</span>, </div><div style='font-size:12px;'> New order has been posted on Marketplace. kindly login and check.</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><div style='font-size:20px;color:#fff;background: #21355C ;font-family:Arial, Helvetica, sans-serif;text-align: center;padding: 19px 1px;'><b>Order Specification.</b></div><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin: 18px 51px;margin-bottom:15px;font-family:Arial, Helvetica, sans-serif;'> <tr> <th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>Make:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.MakeName + "</td><th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>OrderNo:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.o_num + "</td></tr><tr> <th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>Model:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.ModelName + "</td><th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>CustomerName:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.c_name + "</td></tr><tr> <th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>Processor:</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.Processor + "</td><th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>Qty:</th><td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.o_qty + "</td><tr> <th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>EDD</th> <td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.e_edd + "</td><th style='font-size:16px; color:#21355C;text-align: left;width: 20%;'>CreatedBy:</th><td style='font-size:16px; color:#21355C;text-align: left;'>" + result1.Username + "</td><td></td></tr></table> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#21355C ; font-family:Arial, Helvetica, sans-serif;'> <div style='font-size:13px; color:#80808057;'> <br><a href='http://itad.circularcomputing.com' style='color:#80808057; text-decoration:underline;'>CLICK HERE</a> TO CHECK New Order</div></td></tr></table></td></tr></table> <br><br></td></tr></table> </body> </html> </body></html>",
                // };

                // using (var client = new SmtpClient()){

                //     //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
    
                //     client.Connect("mail.a2cuae.com", 465, true);

                //     client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                //     client.Send(message);

                //     client.Disconnect(true);
                // }
           // }  

             return Ok(201);
        }

        [HttpPost("addcommitorder")]
        public async Task<IActionResult> AddCommitOrder([FromBody]CommitOrder request)
        {

            var values = await _context.PartProducts.ToListAsync();
            var orderToCreate = new CommitOrder
            {
                o_num =request.o_num,
                make_id =request.make_id,
                model_id =request.model_id,
                proc_id =request.proc_id,
                o_type =request.o_type,
                co_qty =request.co_qty,
                c_name =request.c_name,
                emp_id = request.emp_id,
                co_status = 1,
                co_edd = request.co_edd,
                comment = request.comment,
                created_at =DateTime.Now,
                updated_at =DateTime.Now

            };
            var orderToCreated = await _repo.CommitOrder(orderToCreate); 
            var pologToCreate = new COLog
            {
                ref_id =orderToCreated.id,
                o_num =request.o_num,
                o_type =request.o_type,
                co_qty =request.co_qty,
                c_name =request.c_name,
                flag = 1,
                user_id = request.emp_id,
                comment = request.comment,
                co_edd = request.co_edd,
                created_at =DateTime.Now,

            };
            var pologToCreated = await _repo.COLog(pologToCreate); 

             return Ok(201);
        }
        
         // POST api/values
        [HttpPut("editorderpost")]
        public async Task<IActionResult> EditOrderPost([FromBody]Order request)
        {

            var values1 = await _repo.GetRequests();
            
            var entity = _context.ReserveOrders.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {
                entity.e_edd = request.e_edd;
                entity.updated_at = DateTime.Now;
                entity.updated_by = request.updated_by;
                _context.SaveChanges();
            }          

             return Ok(201);
        }

         // POST api/values
        [HttpPut("editcommitorderpost")]
        public async Task<IActionResult> EditCommitOrderPost([FromBody]CommitOrder request)
        {

            var values1 = await _repo.GetRequests();
            
            var entity = _context.CommitOrders.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {
                entity.o_num = request.o_num;
                entity.o_type = request.o_type;
                entity.co_qty = request.co_qty;
                entity.co_edd = request.co_edd;
                entity.c_name = request.c_name;
                entity.comment = request.comment;
                entity.updated_at = DateTime.Now;
                entity.updated_by = request.updated_by;
                _context.SaveChanges();
            }   
            var pologToCreate = new COLog
            {
                ref_id =entity.id,
                o_num =entity.o_num,
                o_type =entity.o_type,
                c_name =entity.c_name,
                co_qty =entity.co_qty,
                flag = 2,
                user_id = request.updated_by,
                comment = request.comment,
                co_edd = entity.co_edd,
                created_at =DateTime.Now,

            };
            var pologToCreated = await _repo.COLog(pologToCreate);         

             return Ok(201);
        }

        [HttpPost("sendmessagepost")]
        public async Task<IActionResult> sendMessagePost([FromBody]ChatBox request)
        {
            var values = await _context.PartProducts.ToListAsync();
            var requestToCreate = new ChatBox
            {
                ref_Id =request.ref_Id,
                u_Id =request.u_Id,
                text =request.text,
                status=0,
                createdDate =DateTime.Now

            };

            var createdRequest = await _chat.ChatBox(requestToCreate);

            var viewToCreate = new Viewchat
            {
                chat_id =createdRequest.id,
                ref_id =createdRequest.ref_Id,
                user_id =createdRequest.u_Id,
                created_at =DateTime.Now

            };

            var viewToCreated = await _viewchat.Viewchat(viewToCreate);


            var result =from chat in _context.ChatBoxs
                        join req in _context.Requests 
                        on chat.ref_Id equals req.Id
                        into Rquest
                        from req in Rquest.DefaultIfEmpty()
                        join user in _context.Users
                        on chat.u_Id equals user.Id
                        into User
                        from user in User.DefaultIfEmpty()
                        join model in _context.PartProducts
                        on req.ModelId equals model.Id
                        into Model
                        from model in Model.DefaultIfEmpty()
                        orderby chat.id ascending
               select new
                {
                    Id = chat.id,
                    RequestID = req.RequestID,
                    ProductName = model.ProductName,
                    UserName = user.username,
                    Text = chat.text,
                    u_Id = chat.u_Id,
                    ref_Id = chat.ref_Id,
                    Status = chat.status,
                    CreatedDate = chat.createdDate
                }; 
            var flag = "";
            try{
                var smtp = new SmtpClient();
                smtp.Connect("mail.a2cuae.com", 465, true);
                smtp.Disconnect(true);
                flag = "pass";
            } catch (Exception ex)
            {   
                ex.ToString();
                flag = "fail";
            }  
            if(flag == "fail"){
                return Ok(result);
            } 

            var result1 = result.Where(e=> e.Id==createdRequest.id).FirstOrDefault();
            
            var users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "Chat"), new SqlParameter("option", request.u_Id)).ToList(); 
            foreach (var item in users)
            {   
                
                    var message = new MimeMessage();
                    // From address
                    message.From.Add(new MailboxAddress("MarketPlace - Circular Computing", "support@a2cuae.com"));

                    // To address
                    message.To.Add(new MailboxAddress(item.Email));

                    // Subject 
                    message.Subject = "New Message";
                    // Body 
                    message.Body =  new TextPart("html"){
                        Text = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='0' cellspacing='0' cellpadding='0' style='border:1px solid #062736'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ; padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>Message Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#062736;font-weight: bold; ;'><small>Message on Requirement No #"+result1.RequestID+"( "+result1.ProductName +" ).</small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#062736;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + item.username + "</span> </div><div> New Message has been sent by " + result1.UserName + " on Marketplace kindly check. <hr></div></td></tr><tr><td align='left' valign='middle' style='color:#062736;padding:10px;'><div style='font-style: italic;font-weight: bold;'> &#65282" + request.text + "&#65282 <hr></div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:10px 28px; background-color:#062736;'> <div style='color:#08ab9e;'> <a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>CLICK HERE</a> TO CHECK REQUIREMENT </div></td></tr></table></td></tr></table> <br><br></td></tr></table> </body> </html>",
                    };

                    using (var client = new SmtpClient()){

                        //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
        
                        client.Connect("mail.a2cuae.com", 465, true);

                        client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                        client.Send(message);

                        client.Disconnect(true);
                    }
                

            } 
            
            return Ok(result);
        }

        [HttpPost("sendshortfallmessagepost")]
        public async Task<IActionResult> sendShortfallMessagePost([FromBody]ShortfallChatBox request)
        {
            var values = await _context.PartProducts.ToListAsync();
            var requestToCreate = new ShortfallChatBox
            {
                ref_Id =request.ref_Id,
                u_Id =request.u_Id,
                text =request.text,
                type =request.type,
                status=0,
                createdDate =DateTime.Now

            };

            var createdRequest = await _chat.ShortfallChatBox(requestToCreate);

            var viewToCreate = new ShortfallViewchat
            {
                chat_id =createdRequest.id,
                ref_id =createdRequest.ref_Id,
                type =request.type,
                user_id =createdRequest.u_Id,
                created_at =DateTime.Now

            };

            var viewToCreated = await _viewchat.ShortfallViewchat(viewToCreate);


            var result =from chat in _context.ShortfallChatBoxs
                        join ord in _context.CommitOrders 
                        on chat.ref_Id equals ord.id
                        into Order
                        from ord in Order.DefaultIfEmpty()
                        join user in _context.Users
                        on chat.u_Id equals user.Id
                        into User
                        from user in User.DefaultIfEmpty()
                        where chat.type == request.type
                        orderby chat.id ascending
               select new
                {
                    Id = chat.id,
                    OrderId = chat.id,
                    type = chat.type,
                    UserName = user.username,
                    Text = chat.text,
                    u_Id = chat.u_Id,
                    ref_Id = chat.ref_Id,
                    Status = chat.status,
                    CreatedDate = chat.createdDate
                }; 
            
            return Ok(result);
        }

        [HttpPost("sendshortfallpomessagepost")]
        public async Task<IActionResult> sendShortfallPOMessagePost([FromBody]ShortfallChatBox request)
        {
            var values = await _context.PartProducts.ToListAsync();
            var requestToCreate = new ShortfallChatBox
            {
                ref_Id =request.ref_Id,
                u_Id =request.u_Id,
                text =request.text,
                type =request.type,
                status=0,
                createdDate =DateTime.Now

            };

            var createdRequest = await _chat.ShortfallChatBox(requestToCreate);

            var viewToCreate = new ShortfallViewchat
            {
                chat_id =createdRequest.id,
                ref_id =createdRequest.ref_Id,
                type =request.type,
                user_id =createdRequest.u_Id,
                created_at =DateTime.Now

            };

            var viewToCreated = await _viewchat.ShortfallViewchat(viewToCreate);


            var result =from chat in _context.ShortfallChatBoxs
                        join ord in _context.CommitPurchaseOrders 
                        on chat.ref_Id equals ord.id
                        into Order
                        from ord in Order.DefaultIfEmpty()
                        join user in _context.Users
                        on chat.u_Id equals user.Id
                        into User
                        from user in User.DefaultIfEmpty()
                        where chat.type == request.type
                        orderby chat.id ascending
               select new
                {
                    Id = chat.id,
                    OrderId = chat.id,
                    type = chat.type,
                    UserName = user.username,
                    Text = chat.text,
                    u_Id = chat.u_Id,
                    ref_Id = chat.ref_Id,
                    Status = chat.status,
                    CreatedDate = chat.createdDate
                }; 
            
            return Ok(result);
        }

        // POST api/values
        [HttpPost("dealspost")]
        public async Task<IActionResult> DealsPost([FromBody]History request)
        {
            
                   
            var values1 = await _repo.GetRequests();
            
            var entity = _context.Requests.FirstOrDefault(item => item.Id == request.Id);

            var requestToCreate = new History
            {
                RequestId =request.RequestId,
                EmpId =request.EmpId,
                HDD =request.HDD,
                RAM =request.RAM,
                Adapter =request.Adapter,
                Qty =request.Qty,
                Price =request.Price,
                Comment =request.Comment,
                CreateDate =DateTime.Now,
                ModifyDate =DateTime.Now

            };

            var createdRequest = await _hisrepo.History(requestToCreate);   

            var deallogToCreate = new DealLog
            {
                ref_id =createdRequest.Id,
                qty =request.Qty,
                price =request.Price,
                created_by =request.EmpId,
                created_at = DateTime.Now

            };
            var createdRequestlog = await _hisrepo.DealLog(deallogToCreate);        
            
            var result =from deals in _context.History
                        join request1 in _context.Requests
                        on deals.RequestId equals request1.RequestID
                        into Request1
                        from r in Request1.DefaultIfEmpty()
                        join make in _context.PartProducts 
                        on r.MakeId equals make.Id
                        into Make
                        from d in Make.DefaultIfEmpty()
                        join model in _context.PartProducts 
                        on r.ModelId equals model.Id
                        into Model
                        from i in Model.DefaultIfEmpty()
                        join processor in _context.ProcessorMasters
                        on r.ProcessorId equals processor.ProcessorId
                        into Processor
                        from p in Processor.DefaultIfEmpty()
                        join hdd in _context.SpectDetails 
                        on deals.HDD equals hdd.Id
                        into HDD
                        from hdd in HDD.DefaultIfEmpty()
                        join ram in _context.SpectDetails 
                        on deals.RAM equals ram.Id
                        into RAM
                        from ram in RAM.DefaultIfEmpty()
                        join adp in _context.Adapter
                        on deals.Adapter equals adp.id
                        into Adapter
                        from adp in Adapter.DefaultIfEmpty()
                        join user in _context.Users
                        on deals.EmpId equals user.Id
                        into User
                        from u in User.DefaultIfEmpty()
                        orderby r.Id descending
               select new
                {
                    Id = deals.Id,
                    RequestID = r.RequestID,
                    MakeName = d.ProductName,
                    ModelName = i.ProductName,
                    Processor = p.Processor,
                    hddname = hdd.Text,
                    ramname = ram.Text,
                    Adapter = deals.Adapter,
                    AdapterName = adp.text,
                    Qty = deals.Qty,
                    Price = deals.Price,
                    Status = deals.Status,
                    Comment = deals.Comment,
                    Reason = deals.Reason,
                    Username = u.username,
                    EmpId = deals.EmpId,
                    CreatedDate = deals.CreateDate
                };
            var flag = "";
            try{
                var smtp = new SmtpClient();
                smtp.Connect("mail.a2cuae.com", 465, true);
                smtp.Disconnect(true);
                flag = "pass";
            } catch (Exception ex)
            {   
                ex.ToString();
                flag = "fail";
            }  
            if(flag == "fail"){
                return Ok(result);
            }

            var result1 = result.Where(e=> e.Id==createdRequest.Id).FirstOrDefault();
            var users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "New Deal"), new SqlParameter("option", 1)).ToList();  
            foreach (var item in users)
            {
                
                    var message = new MimeMessage();
                    // From address
                    message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                    // To address
                    message.To.Add(new MailboxAddress(item.Email));

                    // Subject 
                    message.Subject = "New Deal";
                    // Body 
                    message.Body =  new TextPart("html"){
                        Text = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='0' cellspacing='0' cellpadding='0' style='border: 1px solid #062736'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ;padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>Deal Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#062736 ;font-weight: bold;'><small>Deal on Requirement No #"+result1.RequestID+".</small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#062736;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + item.username + "</span> </div><div> New deal has been posted on Marketplace kindly check as per your requirement. check specification details below. <hr></div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><div style='color:#08ab9e;background: #062736 ;text-align: center;padding: 19px 1px;'><b>Deal Specification.</b></div><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin: 18px 20px;margin-bottom:15px;color:#062736;'> <tr> <th style='text-align: left;width: 20%;'>Make:</th> <td style='text-align: left;'>" + result1.MakeName + "</td><th style='text-align: left;width: 20%;'>HDD:</th> <td style='text-align: left;'>" + result1.hddname + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Model:</th> <td style='text-align: left;'>" + result1.ModelName + "</td><th style='text-align: left;width: 20%;'>RAM:</th> <td style='text-align: left;'>" + result1.ramname + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Processor:</th> <td style='text-align: left;'>" + result1.Processor + "</td><th style='text-align: left;width: 20%;'>Adapter:</th> <td style='text-align: left;'>"+result1.AdapterName+"</td></tr><tr> <th style='text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>" + result1.Qty + "</td><th style='text-align: left;width: 20%;'>CreatedBy:</th> <td style='text-align: left;'>" + result1.Username + "</td></tr></table> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'> <div style='color:#08ab9e;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>CLICK HERE</a> TO CHECK DEAL </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html>",
                    };

                    using (var client = new SmtpClient()){

                        //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
        
                        client.Connect("mail.a2cuae.com", 465, true);

                        client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                        client.Send(message);

                        client.Disconnect(true);
                    }
            }  

             return Ok(result);
        }
        // POST api/values
        [HttpPost("removedealspost")]
        public async Task<IActionResult> RemoveDealspost([FromBody]History request)
        {
            
                   
            var values1 = await _repo.GetRequests();
             
            var entity = _context.History.FirstOrDefault(item => item.Id == request.Id);             

            var deallogToCreate = new DealLog
            {
                ref_id =entity.Id,
                qty =entity.Qty,
                price =request.Price,
                created_by =request.EmpId,
                status =7,
                created_at = DateTime.Now

            };
            var createdRequestlog = await _hisrepo.DealLog(deallogToCreate);     
            
            if (entity != null)
            {
                _context.History.Remove(entity);
                _context.SaveChanges();
            }
            
            var result =from deals in _context.History
                        join request1 in _context.Requests
                        on deals.RequestId equals request1.RequestID
                        into Request1
                        from r in Request1.DefaultIfEmpty()
                        join make in _context.PartProducts 
                        on r.MakeId equals make.Id
                        into Make
                        from d in Make.DefaultIfEmpty()
                        join model in _context.PartProducts 
                        on r.ModelId equals model.Id
                        into Model
                        from i in Model.DefaultIfEmpty()
                        join processor in _context.ProcessorMasters
                        on r.ProcessorId equals processor.ProcessorId
                        into Processor
                        from p in Processor.DefaultIfEmpty()
                        join hdd in _context.SpectDetails 
                        on deals.HDD equals hdd.Id
                        into HDD
                        from hdd in HDD.DefaultIfEmpty()
                        join ram in _context.SpectDetails 
                        on deals.RAM equals ram.Id
                        into RAM
                        from ram in RAM.DefaultIfEmpty()
                        join user in _context.Users
                        on deals.EmpId equals user.Id
                        into User
                        from u in User.DefaultIfEmpty()
                        orderby r.Id descending
               select new
                {
                    Id = deals.Id,
                    RequestID = r.RequestID,
                    MakeName = d.ProductName,
                    ModelName = i.ProductName,
                    Processor = p.Processor,
                    hddname = hdd.Text,
                    ramname = ram.Text,
                    Adapter = deals.Adapter,
                    Qty = deals.Qty,
                    Price = deals.Price,
                    Status = deals.Status,
                    Comment = deals.Comment,
                    Reason = deals.Reason,
                    Username = u.username,
                    EmpId = deals.EmpId,
                    CreatedDate = deals.CreateDate
                };

             return Ok(result);
        }
        // POST api/values
        [AllowAnonymous]
        [HttpPost("viewChats")]
        public async Task<IActionResult> GetChats([FromBody]Viewchat request)
        {
            
            var values = await _context.Departments.ToListAsync();

            
            var reqid = new SqlParameter("reqid", request.ref_id);
            var uid = new SqlParameter("uid", request.user_id);
            var blogs = _context.Viewchats.FromSql("EXECUTE dbo.spviewChats @reqid,@uid", reqid, uid).ToList();

            //var result1 = _context.Viewchats.FromSql<Viewchat>("EXEC spviewChats @reqid @uid",1,1).ToList();
            
            var result =from chat in _context.ChatBoxs
                        join req in _context.Requests 
                        on chat.ref_Id equals req.Id
                        into Rquest
                        from req in Rquest.DefaultIfEmpty()
                        join user in _context.Users
                        on chat.u_Id equals user.Id
                        into User
                        from user in User.DefaultIfEmpty()
                        orderby chat.id ascending
               select new
                {
                    Id = chat.id,
                    RequestID = req.RequestID,
                    UserName = user.username,
                    Text = chat.text,
                    u_Id = chat.u_Id,
                    ref_Id = chat.ref_Id,
                    Status = chat.status,
                    CreatedDate = chat.createdDate
                };           
            
            
             return Ok(result);
        }
        [AllowAnonymous]
        [HttpPost("shortfallorderviewChats")]
        public async Task<IActionResult> ShortfallOrderGetChats([FromBody]ShortfallViewchat request)
        {
            
            var values = await _context.Departments.ToListAsync();

            var reqid = new SqlParameter("reqid", request.ref_id);
            var uid = new SqlParameter("uid", request.user_id);
            var type_id = new SqlParameter("type_id", request.type);
            var blogs = _context.Viewchats.FromSql("EXECUTE dbo.spShortfallviewChats @reqid,@uid,@type_id", reqid, uid, type_id).ToList();
                        
            var result =from chat in _context.ShortfallChatBoxs
                        join ord in _context.CommitOrders 
                        on chat.ref_Id equals ord.id
                        into Order
                        from ord in Order.DefaultIfEmpty()
                        join user in _context.Users
                        on chat.u_Id equals user.Id
                        into User
                        from user in User.DefaultIfEmpty()
                        where chat.type == request.type
                        orderby chat.id ascending
               select new
                {
                    Id = chat.id,
                    RequestID = ord.id,
                    UserName = user.username,
                    Text = chat.text,
                    u_Id = chat.u_Id,
                    ref_Id = chat.ref_Id,
                    Status = chat.status,
                    CreatedDate = chat.createdDate
                };           
            
            
             return Ok(result);
        }

        [AllowAnonymous]
        [HttpPost("ShortfallpoviewChats")]
        public async Task<IActionResult> ShortfallPOGetChats([FromBody]ShortfallViewchat request)
        {
            
            var values = await _context.Departments.ToListAsync();

            var reqid = new SqlParameter("reqid", request.ref_id);
            var uid = new SqlParameter("uid", request.user_id);
            var type_id = new SqlParameter("type_id", request.type);
            var blogs = _context.Viewchats.FromSql("EXECUTE dbo.spShortfallviewChats @reqid,@uid,@type_id", reqid, uid, type_id).ToList();
                        
            var result =from chat in _context.ShortfallChatBoxs
                        join ord in _context.CommitPurchaseOrders 
                        on chat.ref_Id equals ord.id
                        into Order
                        from ord in Order.DefaultIfEmpty()
                        join user in _context.Users
                        on chat.u_Id equals user.Id
                        into User
                        from user in User.DefaultIfEmpty()
                        where chat.type == 0
                        orderby chat.id ascending
               select new
                {
                    Id = chat.id,
                    RequestID = ord.id,
                    UserName = user.username,
                    Text = chat.text,
                    u_Id = chat.u_Id,
                    ref_Id = chat.ref_Id,
                    Status = chat.status,
                    CreatedDate = chat.createdDate
                };           
            
            
             return Ok(result);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getrequirements/{userid}")]
        public async Task<IActionResult> GetRequirements(int userid)
        {
            
            var values = await _context.Departments.ToListAsync();
            var user_id = new SqlParameter("user_id", userid);

            List<RequirementList> availableStock = new List<RequirementList>();

            var result = _context.RequirementLists.FromSql<RequirementList>("EXEC spgetrequirements @user_id", @user_id).ToList();
            
             return Ok(result);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getcpodetails/{cpo_id}")]
        public async Task<IActionResult> GetCPODetails(int cpo_id)
        {
            
            var values = await _context.Departments.ToListAsync();
            var id = new SqlParameter("id", cpo_id);

            List<CPLDetailsList> availableStock = new List<CPLDetailsList>();

            var result = _context.CPLDetailsLists.FromSql<CPLDetailsList>("EXEC spgetcpodetails @id", @id).ToList();
            
             return Ok(result);
        }
        // POST api/values
        [AllowAnonymous]
        [HttpGet("getcodetails/{co_id}")]
        public async Task<IActionResult> GetCODetails(int co_id)
        {
            
            var values = await _context.Departments.ToListAsync();
            var id = new SqlParameter("id", co_id);

            List<CODetailsList> availableStock = new List<CODetailsList>();

            var result = _context.CODetailsLists.FromSql<CODetailsList>("EXEC spgetcodetails @id", @id).ToList();
            
             return Ok(result);
        }
        // POST api/values
        [AllowAnonymous]
        [HttpGet("getOffers")]
        public async Task<IActionResult> GetOffers()
        {
            
            var values = await _context.Departments.ToListAsync();            

            List<DealOfferList> availableStock = new List<DealOfferList>();

            var result = _context.DealOfferLists.FromSql<DealOfferList>("EXEC spgetoffers").ToList();
                
             return Ok(result);
        }

        // POST api/values
        [HttpPut("approverejectdeals")]
        public async Task<IActionResult> approverejectDeals([FromBody]History request)
        {
            string reqstatus = "";
            string reqtext = "";
            if (request.Status == 1){
                    reqstatus = "Approve";
                    reqtext = "approved";
            } else if (request.Status == 2) {
                    reqstatus = "Reject";
                    reqtext = "rejected";
            }
             var values1 = await _repo.GetRequests();
            
            var entity = _context.History.FirstOrDefault(item => item.Id == request.Id);

            if (entity != null)
            {
                
                if (request.Status == 1){
                    entity.Status = request.Status;
                    entity.Reason = entity.Reason + ' ' + request.Comment;
                    entity.app_by = request.app_by;
                    entity.ModifyDate =DateTime.Now;
                    _context.SaveChanges();
                } else if (request.Status == 2) {
                    entity.Status = request.Status;
                    entity.Reason = entity.Reason + ' ' + request.Comment;
                    entity.rej_by = request.app_by;
                    entity.ModifyDate =DateTime.Now;
                    _context.SaveChanges();
                }
            }

            var deallogToCreate = new DealLog
            {
                ref_id =entity.Id,
                qty =entity.Qty,
                price =entity.Price,
                created_by =request.app_by,
                status =request.Status,
                created_at = DateTime.Now

            };
            var createdRequestlog = await _hisrepo.DealLog(deallogToCreate); 
            
            var result =from deals in _context.History
                        join request1 in _context.Requests
                        on deals.RequestId equals request1.RequestID
                        into Request1
                        from r in Request1.DefaultIfEmpty()
                        join make in _context.PartProducts 
                        on r.MakeId equals make.Id
                        into Make
                        from d in Make.DefaultIfEmpty()
                        join model in _context.PartProducts 
                        on r.ModelId equals model.Id
                        into Model
                        from i in Model.DefaultIfEmpty()
                        join processor in _context.ProcessorMasters
                        on r.ProcessorId equals processor.ProcessorId
                        into Processor
                        from p in Processor.DefaultIfEmpty()
                        join hdd in _context.SpectDetails 
                        on deals.HDD equals hdd.Id
                        into HDD
                        from hdd in HDD.DefaultIfEmpty()
                        join ram in _context.SpectDetails 
                        on deals.RAM equals ram.Id
                        into RAM
                        from ram in RAM.DefaultIfEmpty()
                        join adp in _context.Adapter
                        on deals.Adapter equals adp.id
                        into Adapter
                        from adp in Adapter.DefaultIfEmpty()
                        join user in _context.Users
                        on deals.EmpId equals user.Id
                        into User
                        from u in User.DefaultIfEmpty()
                        join appby in _context.Users
                        on deals.app_by equals appby.Id
                        into Appby
                        from appby in Appby.DefaultIfEmpty()
                        orderby r.Id descending
               select new
                {
                    Id = deals.Id,
                    RequestID = r.RequestID,
                    deal_id = deals.deal_id,
                    MakeName = d.ProductName,
                    ModelName = i.ProductName,
                    Processor = p.Processor,
                    hddname = hdd.Text,
                    ramname = ram.Text,
                    Adapter = deals.Adapter,
                    AdapterName = adp.text,
                    Qty = deals.Qty,
                    Price = deals.Price,
                    Status = deals.Status,
                    Comment = deals.Comment,
                    Reason = deals.Reason,
                    UserId = u.Id,
                    Username = u.username,
                    appby = appby.username,
                    EmpId = deals.EmpId,
                    CreatedDate = deals.CreateDate
                };
            
            
            var result1 = result.Where(e=> e.Id==request.Id).FirstOrDefault();
            var flag = "";
            try{
                var smtp = new SmtpClient();
                smtp.Connect("mail.a2cuae.com", 465, true);
                smtp.Disconnect(true);
                flag = "pass";
            } catch (Exception ex)
            {   
                ex.ToString();
                flag = "fail";
            }  
            if(flag == "fail"){
                return Ok(result);
            }
            var users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "Reject Deal"), new SqlParameter("option", result1.UserId)).ToList();    
            if (request.Status == 1){
                users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "Approve Deal"), new SqlParameter("option", result1.UserId)).ToList();    
            }  
                
            foreach (var item in users)
            {
                
                    var message = new MimeMessage();
                    // From address
                    message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                    // To address
                    message.To.Add(new MailboxAddress(item.Email));

                    // Subject 
                    message.Subject = reqstatus + " Deal";
                    // Body 
                    message.Body =  new TextPart("html"){
                        Text = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ;padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>Deal "+reqstatus+" Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#062736;font-weight: bold;'><small>Deal #"+result1.deal_id+" on Requirement #"+result1.RequestID+".</small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#062736;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + item.username + "</span> </div><div> Deal #"+result1.deal_id+" has been <span style='text-transform: lowercase;'>"+ reqtext +"</span> by "+result1.appby+". <hr></div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><div style='color:#08ab9e;background: #062736 ;text-align: center;padding: 19px 1px;'><b>Deal Specification.</b></div><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin: 18px 20px;margin-bottom:15px;color:#062736;'> <tr> <th style='text-align: left;width: 20%;'>Make:</th> <td style='text-align: left;'>" + result1.MakeName + "</td><th style='text-align: left;width: 20%;'>HDD:</th> <td style='text-align: left;'>" + result1.hddname + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Model:</th> <td style='text-align: left;'>" + result1.ModelName + "</td><th style='text-align: left;width: 20%;'>RAM:</th> <td style='text-align: left;'>" + result1.ramname + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Processor:</th> <td style='text-align: left;'>" + result1.Processor + "</td><th style='text-align: left;width: 20%;'>Adapter:</th> <td style='text-align: left;'>"+result1.AdapterName+"</td></tr><tr> <th style='text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>" + result1.Qty + "</td><th style='text-align: left;width: 20%;'>CreatedBy:</th> <td style='text-align: left;'>" +result1.Username +"</td></tr></table> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736 ;'> <div style='color:#08ab9e;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>CLICK HERE</a> TO CHECK Deal </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html>",
                    };

                    using (var client = new SmtpClient()){

                        //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
        
                        client.Connect("mail.a2cuae.com", 465, true);

                        client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                        client.Send(message);

                        client.Disconnect(true);
                    }
            }  

            return Ok(result1);
        }

        [HttpPost("editreqdatapost")]
        public async Task<IActionResult> EditreqDataPost([FromBody]History request)
        {
            
            var values = await _context.PartProducts.ToListAsync();
            
            var entity = _context.Requests.FirstOrDefault(item => item.RequestID == request.RequestId);            

            var requestlogToCreate = new RequestLog
            {
                ref_id =entity.Id,
                qty =request.Qty,
                price =request.Price,
                created_by =entity.UserId,
                status =6,
                created_at = DateTime.Now

            };
            var requestlogToCreated = await _repo.RequestLog(requestlogToCreate);

            if (entity != null)
            {
                entity.Qty = request.Qty;
                entity.Price = request.Price;
                _context.SaveChanges();
            }

            
            var user_id = new SqlParameter("user_id", entity.UserId);

           List<RequirementList> availableStock = new List<RequirementList>();

            var myresults = _context.RequirementLists.FromSql<RequirementList>("EXEC spgetrequirements @user_id", @user_id).ToList();
            var flag = "";
            try{
                var smtp = new SmtpClient();
                smtp.Connect("mail.a2cuae.com", 465, true);
                smtp.Disconnect(true);
                flag = "pass";
            } catch (Exception ex)
            {   
                ex.ToString();
                flag = "fail";
            }  
            if(flag == "fail"){
                return Ok(myresults);
            }
            
            var result1 = myresults.Where(e=> e.Id==entity.Id).FirstOrDefault();

            var users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "Edit Available Stock"), new SqlParameter("option", 1)).ToList();    

            foreach (var item in users)
            {
                
                
                    var message = new MimeMessage();
                    // From address
                    message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                    // To address
                    message.To.Add(new MailboxAddress(item.Email));

                    // Subject 
                    message.Subject = "Modify Available Deal";
                    // Body 
                    message.Body =  new TextPart("html"){
                        Text = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ;padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>Stock Modification Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#062736;font-weight:bold'><small>Stock #"+result1.RequestID+".</small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#062736;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + item.username + "</span> </div><div> Stock #"+result1.RequestID+"  has been Modified by "+result1.Username+" <hr></div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='color:#062736;border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><div style='color:#08ab9e;background: #062736 ;text-align: center;padding: 19px 1px;'><b>Stock Specification.</b></div><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin: 18px 20px;margin-bottom:15px;'> <tr> <th style='text-align: left;width: 20%;'>Make:</th> <td style='text-align: left;'>" + result1.MakeName + "</td><th style='text-align: left;width: 20%;'>HDD:</th> <td style='text-align: left;'>" + result1.HddName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Model:</th> <td style='text-align: left;'>" + result1.ModelName + "</td><th style='text-align: left;width: 20%;'>RAM:</th> <td style='text-align: left;'>" + result1.RAMName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Processor:</th> <td style='text-align: left;'>" + result1.Processor + "</td><th style='text-align: left;width: 20%;'>Adapter:</th> <td style='text-align: left;'>"+result1.AdapterName+"</td></tr><tr> <th style='text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>" + result1.Qty + "</td><th style=' color:#21355C;text-align: left;width: 20%;'>Price:</th> <td style=' color:#21355C;text-align: left;'>" + result1.Price + "</td></tr></table> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736 ;'> <div style='color:#08ab9e;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>CLICK HERE</a> TO CHECK STOCK </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html>",
                    };

                    using (var client = new SmtpClient()){

                        //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
        
                        client.Connect("mail.a2cuae.com", 465, true);

                        client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                        client.Send(message);

                        client.Disconnect(true);
                    }
                
            }  

            
             return Ok(myresults);
        }

        [HttpPost("approvedirectdeals")]
        public async Task<IActionResult> ApproveDirectDeals([FromBody]History request)
        {
            
            var values = await _context.PartProducts.ToListAsync();
            
            var entity = _context.Requests.FirstOrDefault(item => item.RequestID == request.RequestId);
            var requestToCreate = new History
            {
                RequestId =request.RequestId,
                EmpId =entity.UserId,
                Qty =request.Qty,
                Price = entity.Price,
                HDD = entity.HDD,
                RAM = entity.RAM,
                Adapter = entity.Adapter,
                app_by =request.app_by,
                Status = 1,
                Reason =request.Comment,
                CreateDate =DateTime.Now,
                ModifyDate =DateTime.Now

            };

            var createdRequest = await _hisrepo.History(requestToCreate);

            
            var deallogToCreate = new DealLog
            {
                ref_id =requestToCreate.Id,
                qty =request.Qty,
                price =entity.Price,
                created_by =request.app_by,
                status =4,
                created_at = DateTime.Now

            };
            var createdDeallog = await _hisrepo.DealLog(deallogToCreate);

            var requestlogToCreate = new RequestLog
            {
                ref_id =entity.Id,
                qty =request.Qty,
                price =entity.Price,
                created_by =request.app_by,
                status =4,
                created_at = DateTime.Now

            };
            var requestlogToCreated = await _repo.RequestLog(requestlogToCreate);

            if (entity != null)
            {
                entity.Qty = entity.Qty-request.Qty;
                _context.SaveChanges();
            }

            var result =from deals in _context.History
                        join request1 in _context.Requests
                        on deals.RequestId equals request1.RequestID
                        into Request1
                        from r in Request1.DefaultIfEmpty()
                        join make in _context.PartProducts 
                        on r.MakeId equals make.Id
                        into Make
                        from d in Make.DefaultIfEmpty()
                        join model in _context.PartProducts 
                        on r.ModelId equals model.Id
                        into Model
                        from i in Model.DefaultIfEmpty()
                        join processor in _context.ProcessorMasters
                        on r.ProcessorId equals processor.ProcessorId
                        into Processor
                        from p in Processor.DefaultIfEmpty()
                        join hdd in _context.SpectDetails 
                        on deals.HDD equals hdd.Id
                        into HDD
                        from hdd in HDD.DefaultIfEmpty()
                        join ram in _context.SpectDetails 
                        on deals.RAM equals ram.Id
                        into RAM
                        from ram in RAM.DefaultIfEmpty()
                        join adp in _context.Adapter
                        on deals.Adapter equals adp.id
                        into Adapter
                        from adp in Adapter.DefaultIfEmpty()
                        join user in _context.Users
                        on deals.EmpId equals user.Id
                        into User
                        from u in User.DefaultIfEmpty()
                        join appby in _context.Users
                        on deals.app_by equals appby.Id
                        into Appby
                        from appby in Appby.DefaultIfEmpty()
                        orderby r.Id descending
               select new
                {
                    Id = deals.Id,
                    RequestID = r.RequestID,
                    deal_id = deals.deal_id,
                    MakeName = d.ProductName,
                    ModelName = i.ProductName,
                    Processor = p.Processor,
                    hddname = hdd.Text,
                    ramname = ram.Text,
                    Adapter = deals.Adapter,
                    AdapterName = adp.text,
                    Qty = deals.Qty,
                    Price = deals.Price,
                    Status = deals.Status,
                    Comment = deals.Comment,
                    Reason = deals.Reason,
                    UserId = u.Id,
                    Username = u.username,
                    appby = appby.username,
                    EmpId = deals.EmpId,
                    CreatedDate = deals.CreateDate
                };
            
            
            var result1 = result.Where(e=> e.Id==createdRequest.Id).FirstOrDefault();
            var user_id = new SqlParameter("user_id", request.app_by);

            List<RequirementList> availableStock = new List<RequirementList>();

            var myresults = _context.RequirementLists.FromSql<RequirementList>("EXEC spgetrequirements @user_id", @user_id).ToList();
            
            var flag = "";
            try{
                var smtp = new SmtpClient();
                smtp.Connect("mail.a2cuae.com", 465, true);
                smtp.Disconnect(true);
                flag = "pass";
            } catch (Exception ex)
            {   
                ex.ToString();
                flag = "fail";
            }  
            if(flag == "fail"){
                return Ok(myresults);
            }

            var users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "Approve Deal"), new SqlParameter("option", requestToCreate.EmpId)).ToList();    

            foreach (var item in users)
            {
                    var message = new MimeMessage();
                    // From address
                    message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                    // To address
                    message.To.Add(new MailboxAddress(item.Email));

                    // Subject 
                    message.Subject = "Approve Deal";
                    // Body 
                    message.Body =  new TextPart("html"){
                        Text = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ;padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>Deal Approval Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#062736;font-weight:bold'><small>Deal #"+result1.deal_id+" on Requirement #"+result1.RequestID+".</small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#062736;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + item.username + "</span> </div><div> Deal #"+result1.deal_id+"  has been created and approved by "+result1.appby+" from Stock "+ result1.RequestID +". <hr></div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><div style='color:#08ab9e;background: #062736 ;text-align: center;padding: 19px 1px;'><b>Deal Specification.</b></div><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin: 18px 20px;margin-bottom:15px;color:#062736;'> <tr> <th style='text-align: left;width: 20%;'>Make:</th> <td style='text-align: left;'>" + result1.MakeName + "</td><th style='text-align: left;width: 20%;'>HDD:</th> <td style='text-align: left;'>" + result1.hddname + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Model:</th> <td style='text-align: left;'>" + result1.ModelName + "</td><th style='text-align: left;width: 20%;'>RAM:</th> <td style='text-align: left;'>" + result1.ramname + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Processor:</th> <td style='text-align: left;'>" + result1.Processor + "</td><th style='text-align: left;width: 20%;'>Adapter:</th> <td style='text-align: left;'>"+result1.AdapterName+"</td></tr><tr> <th style='text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>" + result1.Qty + "</td></tr></table> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736 ;'> <div style='color:#08ab9e;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>CLICK HERE</a> TO CHECK REQUIREMENT </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html>",
                    };

                    using (var client = new SmtpClient()){

                        //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
        
                        client.Connect("mail.a2cuae.com", 465, true);

                        client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                        client.Send(message);

                        client.Disconnect(true);
                    }
                
            }  

           
            
            return Ok(myresults);
        }


        [HttpPost("sharereqpost")]
        public async Task<IActionResult> SharereqPost([FromBody]UsersId request)
        {    
             var values1 = await _repo.GetRequests();
             
            var entity = _context.Requests.FirstOrDefault(item => item.RequestID == request.ReqNo1); 

            
            if(request.s_flag) {

                var s_ids = string.Join(",", request.options);
                var sharedealToCreate = new ShareDeal
                {
                    req_id =entity.Id,
                    emp_id =request.emp_id,
                    s_qty =request.s_qty,
                    r_cur = request.r_cur,
                    s_price = request.s_price,
                    sharedwith = s_ids,
                    comment = request.s_comment,
                    created_at =DateTime.Now,
                    updated_at =DateTime.Now

                };            
                var sharedealToCreated = await _sharedeal.ShareDeal(sharedealToCreate);
                var flag = "";
            try{
                var smtp = new SmtpClient();
                    smtp.Connect("mail.a2cuae.com", 465, true);
                    smtp.Disconnect(true);
                    flag = "pass";
                } catch (Exception ex)
                {   
                    ex.ToString();
                    flag = "fail";
                }  
                if(flag == "fail"){
                    return Ok(201);
                }

                List<SharedDealList> availableStock = new List<SharedDealList>();

                var result = _context.SharedDealLists.FromSql<SharedDealList>("EXEC spgetshareddeals").ToList();
                
                var result1 = result.Where(e=> e.Id==sharedealToCreated.id).FirstOrDefault();

                foreach (var req in request.options)
                    {   
                        
                            var user =  _context.PurchaseUsers.FirstOrDefault(item => item.id == req);
                            var message = new MimeMessage();
                            // From address
                            message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                            // To address
                            message.To.Add(new MailboxAddress(user.email));

                            // Subject 
                            
                            message.Subject = "Stock Alert" + " " + result1.MakeName + " " + result1.ModelName + "/" + result1.Processor + "/"  + result1.RAMName+ " / " + result1.HddName;
                            // Body 
                            message.Body =  new TextPart("html"){
                                Text = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736; padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>Deal Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#21355C;'><small></small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#062736;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>"+ user.p_name+"</span></div><div>New deal available for your consideration. Please check specification details below</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><div style='color:#08ab9e;background: #062736;text-align: center;padding: 19px 1px;'><b>Deal Specification.</b></div><table width='80%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin: 18px 20px;margin-bottom:15px;color:#062736;'> <tr> <th style='text-align: left;width: 20%;'>Make:</th> <td style='text-align: left;'>"+result1.MakeName+"</td><th style='text-align: left;width: 20%;'>HDD:</th> <td style='text-align: left;'>"+result1.HddName+"</td></tr><tr> <th style='text-align: left;width: 20%;'>Model:</th> <td style='text-align: left;'>" + result1.ModelName + "</td><th style='text-align: left;width: 20%;'>RAM:</th> <td style='text-align: left;'>"+result1.RAMName+"</td></tr><tr> <th style='text-align: left;width: 20%;'>Processor:</th> <td style='text-align: left;'>"+result1.Processor+"</td><th style='text-align: left;width: 20%;'>Gen:</th><td style='text-align: left;'>"+result1.gen_name+"</td></tr><tr> <th style='text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>"+result1.s_qty+"</td><th style='text-align: left;width: 20%;'>Price:</th> <td style='text-align: left;'>" + result1.s_currency+""+result1.s_price+"</td></tr></table><table  width='80%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin: 18px 51px;margin-bottom:15px;'><tr><th  style='text-align: left;width: 20%;'>Comment:</th><td style='text-align: left;width: 100%;'>"+result1.Comment+"</td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='left' valign='middle' style='padding:15px; background-color:#062736 ;'><div style='color:#08ab9e;'> <br><span href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>Please do not reply to this email.</span><br/><span href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>Please reply to your sales account managers email address:</span><br/><a style='color: #b7abab;' href='mailto:lawrence.best@a2c.co.uk'>lawrence.best@a2c.co.uk</a><br/><a style='color: #b7abab;' href='mailto:sebastian@a2c.co.uk'>sebastian@a2c.co.uk</a><br/><a style='color: #b7abab;' href='mailto:connor.ralls@a2c.co.uk'>connor.ralls@a2c.co.uk</a></div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html>",
                            };

                            using (var client = new SmtpClient()){

                                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
                
                                client.Connect("mail.a2cuae.com", 465, true);

                                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                                client.Send(message);

                                client.Disconnect(true);
                            }
                    }
            } else {

                var sharedealToCreate = new ShareDeal
                {
                    req_id =entity.Id,
                    emp_id =request.emp_id,
                    s_qty =request.s_qty,
                    r_cur = request.r_cur,
                    s_price = request.s_price,
                    comment = request.s_comment,
                    created_at =DateTime.Now,
                    updated_at =DateTime.Now

                };            
                var sharedealToCreated = await _sharedeal.ShareDeal(sharedealToCreate);

            }

            if (entity != null)
            {
                entity.Status = 8;
                _context.SaveChanges();
            }

            return Ok(201);
        }

        [HttpPost("sharedetailpost")]
        public async Task<IActionResult> ShareDetailPost([FromBody]UsersId request)
        {    
             var values1 = await _repo.GetRequests();

            var s_ids = string.Join(",", request.options);
                var flag = "";
                try{
                    var smtp = new SmtpClient();
                        smtp.Connect("mail.a2cuae.com", 465, true);
                        smtp.Disconnect(true);
                        flag = "pass";
                    } catch (Exception ex)
                    {   
                        ex.ToString();
                        flag = "fail";
                    }  
                    if(flag == "fail"){
                        return Ok(201);
                    }

                var user_id = new SqlParameter("user_id", request.emp_id);
            
                List<ITADList> availableStock = new List<ITADList>();

                var result = _context.ITADLists.FromSql<ITADList>("EXEC spgetitad @user_id", @user_id).ToList();
                
                var result1 = result.Where(e=> e.id == request.r_cur).FirstOrDefault();
                if(result1.p_type != 4) {
                foreach (var req in request.options)
                    {   
                        
                            var user =  _context.Users.FirstOrDefault(item => item.Id == req);
                            var message = new MimeMessage();
                            // From address
                            message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                            // To address
                            message.To.Add(new MailboxAddress(user.Email));
                            // Subject                          
                            if(result1.p_typename == "Laptop" || result1.p_typename == "Desktop") {   
                                message.Subject = "ITAD Available Stock" + " " + result1.make_name + " " + result1.model_name + "/" + result1.cpu_name + "/"  + result1.ram_name+ " / " + result1.hdd_name;

                            } else if(result1.p_typename == "Monitor" || result1.p_typename == "Upload") {
                                message.Subject = "ITAD Available Stock" + " " + result1.make_name + " " + result1.model_name;
                                
                            }
                            // Body 
                            message.Body =  new TextPart("html"){
                                Text = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='0' cellspacing='0' cellpadding='0'  style='border: 1px solid #062736;'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ; padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>ITAD Available Stock</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' style='margin-top:15px;' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;'> <div> Dear <span style='text-transform:capitalize'>" + user.username + "</span> </div><div>New ITAD deal available for your consideration. Please check specification details below.</div></td></tr></table><br><div style='color:#08ab9e;background: #062736 ;text-align: center;padding: 19px 1px;'><b>Stock Specification</b></div><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0' style='color:#03443f;margin-bottom:15px;margin-top:15px;'><tr><th style='text-align: left;width: 20%;'>Type:</th> <td style='text-align: left;'>" + result1.p_typename + "</td><th style='text-align: left;width: 20%;'>Title:</th> <td style='text-align: left;'>" + result1.p_title + "</td></tr><tr><th style='text-align: left;width: 20%;'>Make:</th> <td style='text-align: left;'>" + result1.make_name + "</td><th style='text-align: left;width: 20%;'>Model:</th> <td style='text-align: left;'>" + result1.model_name + "</td></tr><tr><th style='text-align: left;width: 20%;'>HDD:</th> <td style='text-align: left;'>" + result1.hdd_name + "</td><th style='text-align: left;width: 20%;'>RAM:</th> <td style='text-align: left;'>" + result1.ram_name + "</td></tr><tr><th style='text-align: left;width: 20%;'>Processor:</th> <td style='text-align: left;'>" + result1.cpu_name + "</td><th style='text-align: left;width: 20%;'>Gen:</th> <td style='text-align: left;'>" + result1.gen_name + "</td></tr><tr><th style='text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>" + result1.qty + "</td><th style='text-align: left;width: 20%;'>Target Price:</th> <td style='text-align: left;'>" + result1.itad_cur + + result1.price + "</td></tr><tr><th style='text-align: left;width: 20%;'>Comment:</th> <td style='text-align: left;'>" + request.s_comment + "</td></tr></table> <br><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='left' valign='middle' style='padding:15px; background-color:#062736;'><div style='color:#08ab9e;'> <br><span href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='text-decoration:underline;'>Please do not reply to this email.</span><br/></div></td></tr></table></td></tr></table><br><br></td></tr></table></body></html>",
                            };

                            using (var client = new SmtpClient()){

                                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
                
                                client.Connect("mail.a2cuae.com", 465, true);

                                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                                client.Send(message);

                                client.Disconnect(true);
                            }
                    }
                } else {
                    foreach (var req in request.options)
                    {   
                        
                            var user =  _context.Users.FirstOrDefault(item => item.Id == req);
                            var message = new MimeMessage();
                            // From address
                            message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                            // To address
                            message.To.Add(new MailboxAddress(user.Email));

                            // Subject                             
                            message.Subject = "ITAD Available Stock";
                            var builder = new BodyBuilder ();
                            // Body 
                            builder.HtmlBody = @"<!DOCTYPE html><html><head><title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ;padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>ITAD Available Stock</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#062736;padding:10px;'> <div> Dear <span style='text-transform:capitalize;'>"+ user.username+"</span></div><div>New ITAD stock available for your consideration. Please check attached file for further detail.</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='left' valign='middle' style='padding:15px; background-color:#062736 ;'><div style='color:#fff;'> <br><span href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>Please do not reply to this email.</span><br/></div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html>";

                            if(result1.p_url != null && result1.p_url != ""){
                                builder.Attachments.Add (@"Resources\images\"+result1.p_url);
                            }
                            message.Body = builder.ToMessageBody ();

                            using (var client = new SmtpClient()){

                                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
                
                                client.Connect("mail.a2cuae.com", 465, true);

                                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                                client.Send(message);

                                client.Disconnect(true);
                            }
                    }
                }
            return Ok(201);
        }

        [HttpPost("sendemail")]
        public async Task<IActionResult> SendEmail([FromBody]EmailSend request)
        {    
            var values1 = await _repo.GetRequests();
            var user =  _context.Users.FirstOrDefault(item => item.Id == request.user_id);
            var message = new MimeMessage();
            // From address
            message.From.Add(new MailboxAddress("Circular Computing - ITAD", "support@a2cuae.com"));

            // To address
            message.To.Add(new MailboxAddress(request.email));

            // Subject                             
            message.Subject = request.subject;
            var builder = new BodyBuilder ();
            // Body 
            builder.HtmlBody = @"<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ;padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>ITAD Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#21355C ;'><small></small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#062736;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>"+ request.username+"</span></div><div>"+ request.text+"</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='left' valign='middle' style='padding:15px; background-color:#062736 ;'><div style='color:#fff;'> <br><span href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>Please do not reply to this email.</span><br/></div></td></tr></table></td></tr></table> <br><br></td></tr></table> </body> </html>";
            message.Body = builder.ToMessageBody ();
            // message.Cc.Add(new MailboxAddress(user.Email));


            using (var client = new SmtpClient()){

                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;

                client.Connect("mail.a2cuae.com", 465, true);

                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                client.Send(message);

                client.Disconnect(true);
            }
            return Ok(201);
        }
         // POST api/values
        [AllowAnonymous]
        [HttpGet("getshareddeals")]
        public async Task<IActionResult> GetShareddeals()
        {
            
            var values = await _context.Departments.ToListAsync();

           List<SharedDealList> availableStock = new List<SharedDealList>();

            var result = _context.SharedDealLists.FromSql<SharedDealList>("EXEC spgetshareddeals").ToList();
            
             return Ok(result);
        }

         
        // POST api/values
        [HttpPut("closerequirement")]
        public async Task<IActionResult> CloseRequirement([FromBody]Request request)
        {
            
            var values1 = await _repo.GetRequests();
            
            var entity = _context.Requests.FirstOrDefault(item => item.RequestID == request.RequestID);

            if (entity != null)
            {
                entity.Flag = request.Status;
                _context.SaveChanges();
            }

            var entity1 = _context.ShareDeal.Where(item => item.req_id == entity.Id).ToList();
            foreach (var ent in entity1)
            {
                 ent.flag = 1;
                _context.SaveChanges();
                
            }

            var requestlogToCreate = new RequestLog
            {
                ref_id =entity.Id,
                qty =entity.Qty,
                price =entity.Price,
                created_by =entity.UserId,
                status =3,
                created_at = DateTime.Now

            };
            var requestlogToCreated = await _repo.RequestLog(requestlogToCreate);

            return Ok(201);
        }

        // POST api/values
        [HttpPut("rejectstock")]
        public async Task<IActionResult> Rejectstock([FromBody]Request request)
        {
            
             var values1 = await _repo.GetRequests();
            
            var entity = _context.Requests.FirstOrDefault(item => item.RequestID == request.RequestID);

            if (entity != null)
            {
                entity.Status = request.Status;
                _context.SaveChanges();
            }

            var requestlogToCreate = new RequestLog
            {
                ref_id =entity.Id,
                qty =entity.Qty,
                price =entity.Price,
                created_by =request.UserId,
                status =request.Status,
                created_at = DateTime.Now

            };
            var requestlogToCreated = await _repo.RequestLog(requestlogToCreate);
            var flag = "";
            try{
                var smtp = new SmtpClient();
                smtp.Connect("mail.a2cuae.com", 465, true);
                smtp.Disconnect(true);
                flag = "pass";
            } catch (Exception ex)
            {   
                ex.ToString();
                flag = "fail";
            }  
            if(flag == "fail"){
                return Ok(201);
            }
            var user_id = new SqlParameter("user_id", request.UserId);

            List<RequirementList> availableStock = new List<RequirementList>();

            var result = _context.RequirementLists.FromSql<RequirementList>("EXEC spgetrequirements @user_id", @user_id).ToList();
            
            var result1 = result.Where(e=> e.RequestID==request.RequestID).FirstOrDefault();

            var users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "Reject Stock"), new SqlParameter("option", entity.UserId)).ToList();       
            
            foreach (var item in users)
            {
                    var message = new MimeMessage();
                    // From address
                    message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                    // To address
                    message.To.Add(new MailboxAddress(item.Email));

                    // Subject 
                    
                    message.Subject = "Reject Stock " + result1.MakeName + " " + result1.ModelName + " / " + result1.Processor + " / " + result1.RAMName + " / " + result1.HddName;
                    // Body 
                    message.Body =  new TextPart("html"){
                        Text = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736 ;padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>Reject Stock Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#062736;font-weight:bold'><small>Stock No #"+result1.RequestID+".</small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#062736;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + item.username + "</span> </div><div> Stock has been rejected. kindly check.</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><div style='color:#08ab9e;background: #062736 ;text-align: center;padding: 19px 1px;'><b> Stock Specification.</b></div><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin:18px 20px;margin-bottom:15px;color:#062736;'> <tr> <th style='text-align: left;width: 20%;'>Make:</th> <td style='text-align: left;'>" + result1.MakeName + "</td><th style='text-align: left;width: 20%;'>HDD:</th> <td style='text-align: left;'>" + result1.HddName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Model:</th> <td style='text-align: left;'>" + result1.ModelName + "</td><th style='text-align: left;width: 20%;'>RAM:</th> <td style='text-align: left;'>" + result1.RAMName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Processor:</th> <td style='text-align: left;'>" + result1.Processor + "</td><th style='text-align: left;width: 20%;'>Gen:</th><td style='text-align: left;'>" + result1.GenName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>" + result1.Qty + "</td><th style='text-align: left;width: 20%;'>Type:</th> <td style='text-align: left;'>" + result1.TypeName + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Adapter:</th> <td style='text-align: left;'>"+result1.AdapterName+"</td><th style='text-align: left;width: 20%;'>CreatedBy:</th><td style='text-align: left;'>" + result1.Username + "</td><td></td></tr></table> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'> <div style='color:#08ab9e;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>CLICK HERE</a> TO CHECK Stock </div></td></tr></table></td></tr></table> <br><br></td></tr></table> </body> </html>",
                    };

                    using (var client = new SmtpClient()){

                        //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
        
                        client.Connect("mail.a2cuae.com", 465, true);

                        client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                        client.Send(message);

                        client.Disconnect(true);
                    } 
            }  

            return Ok(201);
        }
        
        // POST api/values
        [HttpPut("closedeals")]
        public async Task<IActionResult> CloseDeals([FromBody]History request)
        {   
            string mysubject = "";
            string text = "";

            if (request.Status == 3){
                mysubject = "Close";
                text = "closed";
            } else if (request.Status == 5) {
                mysubject = "Purchase";
                text = "purchased";

            } else if (request.Status == 8) {
                mysubject = "Receive";
                text = "received";

            } else if (request.Status == 9) {
                mysubject = "Dispatch";
                text = "dispatched";

            }

            var values1 = await _repo.GetRequests();
            
            var entity = _context.History.FirstOrDefault(item => item.Id == request.Id);
            if (entity != null) {
                if (request.Status == 3){
                    
                        entity.Status = request.Status;
                        entity.Flag = request.Flag;
                        _context.SaveChanges();
                    
                } else if (request.Status == 5) {
                        entity.p_qty = entity.p_qty+request.Qty;
                        entity.p_by = request.EmpId;
                        entity.Status = request.Status;
                        entity.Flag = request.Flag;
                        _context.SaveChanges();
                } else if (request.Status == 8) {
                        entity.r_qty = entity.r_qty+request.Qty;
                        entity.r_by = request.EmpId;
                        entity.Status = request.Status;
                        entity.Flag = request.Flag;
                        _context.SaveChanges();
                } else if (request.Status == 9) {
                        entity.d_qty = entity.r_qty;
                        entity.d_by = request.EmpId;
                        entity.Status = request.Status;
                        entity.Flag = request.Flag;
                        _context.SaveChanges();
                }
            }
            var requestlogToCreate = new DealLog
                {
                    ref_id =entity.Id,
                    qty =entity.Qty,
                    price =entity.Price,
                    created_by =request.EmpId,
                    status =request.Status,
                    created_at = DateTime.Now

                };

            if (request.Status == 5) {
                requestlogToCreate = new DealLog
                {
                    ref_id =entity.Id,
                    qty =request.Qty,
                    price =entity.Price,
                    created_by =request.EmpId,
                    status =request.Status,
                    created_at = DateTime.Now

                };
            } else if (request.Status == 8) {
                requestlogToCreate = new DealLog
                {
                    ref_id =entity.Id,
                    qty =request.Qty,
                    price =entity.Price,
                    created_by =request.EmpId,
                    status =request.Status,
                    created_at = DateTime.Now

                };
            } else if (request.Status == 9) {
                requestlogToCreate = new DealLog
                {
                    ref_id =entity.Id,
                    qty =entity.r_qty,
                    price =entity.Price,
                    created_by =request.EmpId,
                    status =request.Status,
                    created_at = DateTime.Now

                };
            }
                
            var requestlogToCreated = await _hisrepo.DealLog(requestlogToCreate);
            var flag = "";
            try{
                var smtp = new SmtpClient();
                smtp.Connect("mail.a2cuae.com", 465, true);
                smtp.Disconnect(true);
                flag = "pass";
            } catch (Exception ex)
            {   
                ex.ToString();
                flag = "fail";
            }  
            if(flag == "fail"){
                return Ok(201);
            }
            var result =from deals in _context.History
                        join request1 in _context.Requests
                        on deals.RequestId equals request1.RequestID
                        into Request1
                        from r in Request1.DefaultIfEmpty()
                        join make in _context.PartProducts 
                        on r.MakeId equals make.Id
                        into Make
                        from d in Make.DefaultIfEmpty()
                        join model in _context.PartProducts 
                        on r.ModelId equals model.Id
                        into Model
                        from i in Model.DefaultIfEmpty()
                        join processor in _context.ProcessorMasters
                        on r.ProcessorId equals processor.ProcessorId
                        into Processor
                        from p in Processor.DefaultIfEmpty()
                        join hdd in _context.SpectDetails 
                        on deals.HDD equals hdd.Id
                        into HDD
                        from hdd in HDD.DefaultIfEmpty()
                        join ram in _context.SpectDetails 
                        on deals.RAM equals ram.Id
                        into RAM
                        from ram in RAM.DefaultIfEmpty()join adp in _context.Adapter
                        on deals.Adapter equals adp.id
                        into Adapter
                        from adp in Adapter.DefaultIfEmpty()
                        join user in _context.Users
                        on requestlogToCreated.created_by equals user.Id
                        into User
                        from u in User.DefaultIfEmpty()
                        orderby r.Id descending
               select new
                {
                    Id = deals.Id,
                    RequestID = r.RequestID,
                    deal_id = deals.deal_id,
                    Username = u.username,
                    MakeName = d.ProductName,
                    ModelName = i.ProductName,
                    Processor = p.Processor,
                    hddname = hdd.Text,
                    ramname = ram.Text,
                    AdapterName = adp.text,
                    Qty = deals.Qty,
                };
            
            
            var result1 = result.Where(e=> e.Id==request.Id).FirstOrDefault();

            var users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "Close Deal"), new SqlParameter("option", 1)).ToList();        
            if (request.Status == 5) {
                users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "Purchase Deal"), new SqlParameter("option", 1)).ToList(); 
            } else if (request.Status == 8) {
                users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "Receive Deal"), new SqlParameter("option", 1)).ToList(); 
            } else if (request.Status == 8) {
                users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "Dispatch Deal"), new SqlParameter("option", 1)).ToList(); 
            } 
            

            foreach (var item in users)
            {
                
                    var message = new MimeMessage();
                    // From address
                    message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                    // To address
                    message.To.Add(new MailboxAddress(item.Email));

                    // Subject 
                    message.Subject = mysubject +" Deal";
                    // Body 
                    message.Body =  new TextPart("html"){
                        Text = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736; padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>Deal "+mysubject+" Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#062736;'><small>Deal #"+result1.deal_id+" on Requirement #"+result1.RequestID+".</small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#062736;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + item.username + "</span></div><div> Deal #"+result1.deal_id+" has been "+text+" by "+result1.Username+". <hr></div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><div style='color:#08ab9e;background: #062736;text-align: center;padding: 19px 1px;'><b>Deal Specification.</b></div><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin: 18px 20px;margin-bottom:15px;'> <tr> <th style='text-align: left;width: 20%;'>Make:</th> <td style='text-align: left;'>" + result1.MakeName + "</td><th style='text-align: left;width: 20%;'>HDD:</th> <td style='text-align: left;'>" + result1.hddname + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Model:</th> <td style='text-align: left;'>" + result1.ModelName + "</td><th style='text-align: left;width: 20%;'>RAM:</th> <td style='text-align: left;'>" + result1.ramname + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Processor:</th> <td style='text-align: left;'>" + result1.Processor + "</td><th style='text-align: left;width: 20%;'>Adapter:</th> <td style='text-align: left;'>"+result1.AdapterName+"</td></tr><tr> <th style='text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>" + result1.Qty + "</td></tr></table> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'> <div style='color:#08ab9e;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e; text-decoration:underline;'>CLICK HERE</a> TO CHECK Deal </div></td></tr></table></td></tr></table><br><br></td></tr></table></body></html>",
                    };

                    using (var client = new SmtpClient()){

                        //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
        
                        client.Connect("mail.a2cuae.com", 465, true);

                        client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                        client.Send(message);

                        client.Disconnect(true);
                    }
                
            } 
            return Ok(201);
        }

        // POST api/values
        [HttpPut("updatepopost")]
        public async Task<IActionResult> UpdatePOPost([FromBody]History request)
        {
            
            var values1 = await _repo.GetRequests();
            
            var entity = _context.History.FirstOrDefault(item => item.Id == request.Id);
            var entity1 = _context.Requests.FirstOrDefault(item => item.RequestID == entity.RequestId);

            if (entity != null)
            {
                 entity.p_num = request.p_num;
                 entity.po_by = request.po_by;
                _context.SaveChanges();
            }

            var poToCreate = new PurchaseOrder
            {
                po_num =request.p_num,
                emp_id =request.po_by,
                make_id =entity1.MakeId,
                model_id =entity1.ModelId,
                proc_id =entity1.ProcessorId,
                hdd_id =entity.HDD,
                ram_id =entity.RAM,
                adp_id =entity.Adapter,
                gen_id = entity1.gen_id,
                po_qty = entity.Qty,
                po_price =entity.Price,
                po_type = entity1.req_type,
                s_name = entity1.Cname,
                po_status = 0,
                po_eta = DateTime.Now,
                ref_id = entity.Id,
                comment =request.Comment,
                created_at =DateTime.Now,
                updated_at =DateTime.Now

            };
            var poToCreated = await _repo.PurchaseOrder(poToCreate);
            var flag = "";
            try{
                var smtp = new SmtpClient();
                smtp.Connect("mail.a2cuae.com", 465, true);
                smtp.Disconnect(true);
                flag = "pass";
            } catch (Exception ex)
            {   
                ex.ToString();
                flag = "fail";
            }  
            if(flag == "fail"){
                return Ok(201);
            }

            var result =from deals in _context.History
                        join request1 in _context.Requests
                        on deals.RequestId equals request1.RequestID
                        into Request1
                        from r in Request1.DefaultIfEmpty()
                        join make in _context.PartProducts 
                        on r.MakeId equals make.Id
                        into Make
                        from d in Make.DefaultIfEmpty()
                        join model in _context.PartProducts 
                        on r.ModelId equals model.Id
                        into Model
                        from i in Model.DefaultIfEmpty()
                        join processor in _context.ProcessorMasters
                        on r.ProcessorId equals processor.ProcessorId
                        into Processor
                        from p in Processor.DefaultIfEmpty()
                        join hdd in _context.SpectDetails 
                        on deals.HDD equals hdd.Id
                        into HDD
                        from hdd in HDD.DefaultIfEmpty()
                        join ram in _context.SpectDetails 
                        on deals.RAM equals ram.Id
                        into RAM
                        from ram in RAM.DefaultIfEmpty()
                        join user in _context.Users
                        on deals.po_by equals user.Id
                        into User
                        from u in User.DefaultIfEmpty()
                        join poby in _context.Users
                        on deals.po_by equals poby.Id
                        into POby
                        from poby in POby.DefaultIfEmpty()
                        orderby r.Id descending
               select new
                {
                    Id = deals.Id,
                    RequestID = r.RequestID,
                    deal_id = deals.deal_id,
                    Username = u.username,
                    MakeName = d.ProductName,
                    ModelName = i.ProductName,
                    Processor = p.Processor,
                    hddname = hdd.Text,
                    ramname = ram.Text,
                    Qty = deals.Qty,
                };
            
            
            var result1 = result.Where(e=> e.Id==request.Id).FirstOrDefault();

            var users = _context.SubscribeUsers.FromSql<SubscribeUser>("EXEC spgetusers @e_type,@option", new SqlParameter("e_type", "PO Update"), new SqlParameter("option", 1)).ToList();        
              
            foreach (var item in users)
            {
                
                    var message = new MimeMessage();
                    // From address
                    message.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

                    // To address
                    message.To.Add(new MailboxAddress(item.Email));

                    // Subject 
                    message.Subject = "PO Update";
                    // Body 
                    message.Body =  new TextPart("html"){
                        Text = "<!DOCTYPE html><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body style='font-size:13px;font-family:Arial, Helvetica, sans-serif;'> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#80808057' style='background-color:#fff;'><br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736;padding:10px;'><div style='color:#08ab9e;text-align: center;'> <b>PO Alert</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' style='padding:10px; color:#062736;font-weight:bold'><small>PO Number #"+ request.p_num +" on Deal #"+result1.deal_id+".</small> </td></tr></table><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#062736;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + item.username + "</span></div><div> PO for deal #"+result1.deal_id+" has been updated by "+result1.Username+". <hr></div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><div style='color:#08ab9e;background: #062736;text-align: center;padding: 19px 1px;'><b>Deal Specification.</b></div><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0' style='margin: 18px 20px;margin-bottom:15px;color:#062736'> <tr> <th style='text-align: left;width: 20%;'>Make:</th> <td style='text-align: left;'>" + result1.MakeName + "</td><th style='text-align: left;width: 20%;'>HDD:</th> <td style=';text-align: left;'>" + result1.hddname + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Model:</th> <td style='text-align: left;'>" + result1.ModelName + "</td><th style='text-align: left;width: 20%;'>RAM:</th> <td style='text-align: left;'>" + result1.ramname + "</td></tr><tr> <th style='text-align: left;width: 20%;'>Processor:</th> <td style='text-align: left;'>" + result1.Processor + "</td><th style='text-align: left;width: 20%;'>Adapter:</th> <td style='text-align: left;'>Yes</td></tr><tr> <th style='text-align: left;width: 20%;'>Qty:</th> <td style='text-align: left;'>" + result1.Qty + "</td> <th style='text-align: left;width: 20%;'>Updated By:</th> <td style='text-align: left;'>" + result1.Username + "</td></tr></table> <table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'> <div style='color:#08ab9e;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='text-decoration:underline;color:#08ab9e;'>CLICK HERE</a> TO CHECK PO </div></td></tr></table></td></tr></table> <br><br></td></tr></table></body></html>",
                    };

                    using (var client = new SmtpClient()){

                        //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;
        
                        client.Connect("mail.a2cuae.com", 465, true);

                        client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                        client.Send(message);

                        client.Disconnect(true);
                    }
                
            } 
            return Ok(201);
        }

        [HttpPost("upload"), DisableRequestSizeLimit]
        public IActionResult Upload()
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources","Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if(file.Length > 0)
                {
                    var fileName = GetUniqueFileName(ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"'));
                    var fullpath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);

                    using (var stream = new FileStream(fullpath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    return Ok(new { fileName});
                }
                else{
                    return BadRequest();
                }
            }
            catch (System.Exception ex)
            {
                
                return StatusCode(500,$"Internal server error: {ex}");
            }
        }
        [HttpPost("upload_profile/{userid}"), DisableRequestSizeLimit]
        public IActionResult UploadProfile(int userid)
        {
            var entity =  _context.Users.FirstOrDefault(item => item.Id == userid);
            var photo =  _context.Photos.FirstOrDefault(item => item.UserId == userid);
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources","Profiles");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if(file.Length > 0)
                {
                    var fileName = GetUniqueFileName(entity.username+ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"'));
                    var fullpath = Path.Combine(pathToSave, fileName);
                    var dbPath = Path.Combine(folderName, fileName);

                    using (var stream = new FileStream(fullpath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    if (photo != null)            {
                        photo.Url = fileName;
                        _context.SaveChanges();
                    } else {
                    var crtphoto = new Photo
                    {
                        Url = fileName,
                        Description = "ReferenceError: lerem is not defined",
                        DateAdded = DateTime.Now,
                        IsMain = true,
                        UserId = userid,
                    };
                    var Createdroled =  _auth.Photo(crtphoto);
                    }
                    
                    return Ok(new { fileName});
                }
                else{
                    return BadRequest();
                }
            }
            catch (System.Exception ex)
            {
                
                return StatusCode(500,$"Internal server error: {ex}");
            }
        }

        private string  GetUniqueFileName(string fileName)
        {
            fileName = Path.GetFileName(fileName);
            var realpath =   Path.GetFileNameWithoutExtension(fileName)
                  + "_" 
                  + DateTime.Now.ToString("yyyy-MM-dd-HH-mm-ss") 
                  + Path.GetExtension(fileName);
            return realpath.Replace(" ", "");
        }
       

    }
}