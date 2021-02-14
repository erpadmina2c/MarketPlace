using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using MailKit.Net.Smtp;
using MailKit;
using MimeKit;
using CheckpointInventoryStock.API.Models;
using System.Data.SqlClient;

namespace CheckpointInventoryStock.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IRoleRepository _role;
        private readonly ISpectDetailRepository _spect;
        private readonly IPartProductRepository _makemodel;
        private readonly IPurchaseUserRepository _puser;
        public ValuesController(DataContext context, IRoleRepository role,  ISpectDetailRepository spect, IPartProductRepository makemodel, IPurchaseUserRepository puser)
        {
            _context = context;
            _role = role;
            _spect = spect;
            _makemodel = makemodel;
            _puser = puser;

        }
        // GET api/values
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Getvalues()
        {
            var values = await _context.Users.ToListAsync();
            
            var result =from user in _context.Users
                        join userrole in _context.UserRoles 
                        on user.Id equals userrole.UserID
                        into UserRoles
                        from d in UserRoles.DefaultIfEmpty()
               select new
                {
                    id = user.Id,
                    username = user.username,
                    roleId = d.RoleID
                };
            // try {
            //     // Instantiate mimemessage 
            //     var message = new MimeMessage();
            //     // From address
            //     message.From.Add(new MailboxAddress("Suhel", "suhel.cs@gmail.com"));

            //     // To address
            //     message.To.Add(new MailboxAddress("suhel.cs@gmail.com"));

            //     // Subject 
            //     message.Subject = "Learning sendimng message in Dotnet core";
            //     // Body 
            //     message.Body =  new TextPart("plain")
            //     {
            //         Text = "I am using Mailkit nuget package to send email easily"
            //     };

            //     using (var client = new SmtpClient()){

            //         client.ServerCertificateValidationCallback = (s, c, h, e) => true;

            //         client.Connect("smtp.gmail.com", 587, true);

            //         client.Authenticate("suhel.cs@gmail.com","s4rbhagwanpur");

            //         client.Send(message);

            //         client.Disconnect(true);
            //     }
            // }
            // catch (Exception ex)
            // {
            //     // TODO: handle exception
            //     throw new InvalidOperationException(ex.Message);
            // }

            return Ok(result);
        }

        
        [AllowAnonymous]
        [HttpGet("getdepartment")]
        public async Task<IActionResult> Getepartment()
        {
            var values = await _context.Departments.ToListAsync();
            
            return Ok(values);
        }

        [AllowAnonymous]
        [HttpGet("getcurrency")]
        public async Task<IActionResult> GetCurrency()
        {
            var values = await _context.Currency.ToListAsync();
            
            return Ok(values);
        }

        [AllowAnonymous]
        [HttpGet("getpurchaseusers")]
        public async Task<IActionResult> GetPurchaseUser()
        {
            var values = await _context.PurchaseUsers.ToListAsync();
            
            return Ok(values);
        }
        [AllowAnonymous]
        [HttpGet("getitadcompanylist")]
        public async Task<IActionResult> GetITADCompanyList()
        {
            var values = await _context.PurchaseUsers.ToListAsync();
            var itads =from com in _context.Companyprofiles
                            join loc in _context.Locations 
                            on com.country_id equals loc.id
                            into Location
                            from loc in Location.DefaultIfEmpty()
                select new
                    {
                        id = com.id,
                        com_name = com.com_name,
                        com_tel = com.com_tel,
                        com_domain = com.com_domain,
                        com_street = com.com_street,
                        com_city = com.com_city,
                        country_id = com.country_id,
                        country = loc.name,
                        branch_num = com.branch_num,
                        laptop_num = com.laptop_num,
                        desk_num = com.desk_num,
                        monitor_num = com.monitor_num,
                        div_revenue = com.div_revenue,
                        staff_num = com.staff_num,
                        con_name = com.con_name,
                        con_email = com.con_email,
                        con_tel = com.con_tel,
                        con_mob = com.con_mob,
                        mar_con_name = com.mar_con_name,
                        mar_con_tel = com.mar_con_tel,
                        mar_con_email = com.mar_con_email,
                        comments = com.comments,
                        status = com.status,
                        modified_at = com.modified_at,
                        created_at = com.created_at,


                    };

            return Ok(itads);
        }

        [AllowAnonymous]
        [HttpGet("getpurchaseusers1")]
        public async Task<IActionResult> GetPurchaseUser1()
        {
            var values = await _context.PurchaseUsers.ToListAsync();
            var result =from part in _context.PurchaseUsers
               select new
                {
                    id = part.id,
                    p_name = part.p_name,
                    text = part.email,
                    email = part.email,
                    status = part.status,
                    type = part.type,
                    created_at = part.created_at,
                    updated_at = part.updated_at
                };

            return Ok(result);
        }
        [AllowAnonymous]
        [HttpGet("getsupusers")]
        public async Task<IActionResult> Getsupusers()
        {
            var values = await _context.Users.ToListAsync();
            var users =from user in _context.Users
                        join userrole in _context.UserRoles 
                        on user.Id equals userrole.UserID
                        into UserRole
                        from userrole in UserRole.DefaultIfEmpty()
               select new
                {
                    id = user.Id,
                    p_name = user.username,
                    text = user.Email,
                    email = user.Email,
                    status = user.active,
                    type = userrole.RoleID,
                    created_at = user.CreatedDate,
                    updated_at = user.LastActive

                };  

            return Ok(users);
        }
        
         // POST api/values
        [AllowAnonymous]
        [HttpPost("addpurchaseusers")]
        public async Task<IActionResult> AddPurchaseusers([FromBody]PurchaseUser request)
        {                         
            var makeToCreate = new PurchaseUser
            {
                p_name =request.p_name,
                email =request.email,
                type =request.type,
                status =1,
                created_at =DateTime.Now,
                updated_at =DateTime.Now

            };
            var createdMake = await _puser.PurchaseUser(makeToCreate);

            var values = await _context.PurchaseUsers.ToListAsync();
                
             return Ok(values);
        }

         // POST api/values
        [AllowAnonymous]
        [HttpPost("addsupplier")]
        public async Task<IActionResult> AddSupplier([FromBody]Supplier request)
        {                         
            var makeToCreate = new Supplier
            {
                text =request.text,
                created_at =DateTime.Now

            };
            
            var createdMake = await _puser.Supplier(makeToCreate);
                
             return Ok(201);
        }

         // POST api/values
        [AllowAnonymous]
        [HttpPut("editpurchaseusers")]
        public async Task<IActionResult> EdiPurchaseusers([FromBody]PurchaseUser request)
        {                         
            var entity = _context.PurchaseUsers.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {
                entity.p_name = request.p_name;
                entity.email = request.email;
                entity.type = request.type;
                entity.updated_at = DateTime.Now;
                _context.SaveChanges();
            }

            var values = await _context.PurchaseUsers.ToListAsync();
                
             return Ok(values);
        }

        [AllowAnonymous]
        [HttpPut("deletepurchaseusers")]
        public async Task<IActionResult> DeletePurchaseusers([FromBody]PurchaseUser request)
        {                         
            var entity = _context.PurchaseUsers.FirstOrDefault(item => item.id == request.id);

            {
                _context.PurchaseUsers.Remove(entity);
                _context.SaveChanges();
            } 

            var values = await _context.PurchaseUsers.ToListAsync();
                
             return Ok(values);
        }

        [AllowAnonymous]
        [HttpGet("getallmenus")]
        public async Task<IActionResult> GetAllMenus()
        {
            var values = await _context.RoleAccess.ToListAsync();
            var result =from access in _context.RoleAccess
                        join menu in _context.Menus 
                        on access.menu_id equals menu.id
                        into Menu
                        from menu in Menu.DefaultIfEmpty()
                        orderby menu.priority ascending
               select new
                {
                    id = access.id,
                    name = menu.name,
                    url = menu.url,
                    icon = menu.icon,
                    parent_id = menu.parent_id,
                    menu_id = menu.id,
                    role_id = access.role_id,
                    is_main = menu.is_main,
                    status = access.status,
                    is_active = access.is_active,
                    created_at = access.created_at,
                };
            
            
            return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("getchatsetting")]
        public async Task<IActionResult> GetChatSetting()
        {
            var values = await _context.ChatSettings.ToListAsync();
            var result =from chat in _context.ChatSettings
                        join user in _context.Users 
                        on chat.user_id equals user.Id
                        into User
                        from user in User.DefaultIfEmpty()
                        orderby user.Id ascending
               select new
                {
                    id = chat.id,
                    name = user.username,
                    user_id = user.Id,
                    chat_type = chat.chat_type,
                    is_active = chat.status,
                    created_at = chat.created_at,
                };
            
            
            return Ok(result);
        }
        [AllowAnonymous]
        [HttpGet("getemailsetting")]
        public async Task<IActionResult> GetEmailSetting()
        {
            var values = await _context.EmailSettings.ToListAsync();           
            
            return Ok(values);
        }

        [AllowAnonymous]
        [HttpGet("getactivatemodel/{userid}/{type}")]
        public async Task<IActionResult> Getactivatemodel(int userid, int type)
        {

            var values = await _context.ReportSettings.ToListAsync();

            var user_id = new SqlParameter("user_id", userid);
            var type_id = new SqlParameter("type_id", type);

            List<ActiveModel> availableStock = new List<ActiveModel>();

            var result = _context.ActiveModels.FromSql<ActiveModel>("EXEC spGetActivatemodel @user_id, @type_id", user_id, type_id).ToList();

             
            return Ok(result);
        }
        [AllowAnonymous]
        [HttpGet("getitadsupliers")]
        public async Task<IActionResult> GetITADSupliers()
        {

            var values = await _context.ReportSettings.ToListAsync();

            List<ITADSuplier> availableStock = new List<ITADSuplier>();

            var result = _context.ITADSupliers.FromSql<ITADSuplier>("EXEC spgetitadsupliers").ToList();

             
            return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("getactivateproc/{userid}/{type}")]
        public async Task<IActionResult> Getactivateproc(int userid, int type)
        {

            var values = await _context.ReportSettings.ToListAsync();

            var user_id = new SqlParameter("user_id", userid);
            var type_id = new SqlParameter("type_id", type);

            List<ActiveProc> availableStock = new List<ActiveProc>();

            var result = _context.ActiveProcs.FromSql<ActiveProc>("EXEC spGetActivateproc @user_id, @type_id", user_id, type_id).ToList();
             
            return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("getallpages")]
        public async Task<IActionResult> GetAllPages(int roleid)
        {
            var values = await _context.RoleAccess.ToListAsync();

            List<Page> availableStock = new List<Page>();

            var result = _context.Pages.FromSql<Page>("EXEC spgetpages").ToList();
            
            
            return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("getmenus/{roleid}")]
        public async Task<IActionResult> GetMenus(int roleid)
        {
            var values = await _context.RoleAccess.ToListAsync();
            var result =from access in _context.RoleAccess
                        join menu in _context.Menus 
                        on access.menu_id equals menu.id
                        into Menu
                        from menu in Menu.DefaultIfEmpty()
                        where access.role_id == roleid && access.status == 1
                        orderby menu.priority ascending
               select new
                {
                    id = menu.id,
                    name = menu.name,
                    url = menu.url,
                    icon = menu.icon,
                    parent_id = menu.parent_id,
                    is_main = menu.is_main,
                    created_at = access.created_at,
                    children = "",
                };
            
            
            return Ok(result);
        }
        // POST api/values
        [AllowAnonymous]
        [HttpPut("activatemenu")]
        public async Task<IActionResult> ActivateMenu([FromBody]RoleAccess request)
        {   
            int mystatus = 0;
            if(request.is_active == true){
                mystatus = 1;
            }
            var values = await _context.RoleAccess.ToListAsync();
            var entity =  _context.RoleAccess.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {                
                entity.is_active = request.is_active;
                entity.status = mystatus;
                _context.SaveChanges();
            }
            
            if(mystatus == 0){
                var entity1 =  _context.Menus.Where(item => item.parent_id == entity.menu_id).ToList();
                foreach (var item in entity1)
                {
                    
                    var submenu =  _context.RoleAccess.FirstOrDefault(m => m.menu_id == item.id && m.role_id == entity.role_id );
                    if (submenu != null)
                    {                
                        submenu.is_active = request.is_active;
                        submenu.status = mystatus;
                        _context.SaveChanges();
                    }
                }
            }
            if(mystatus == 1){
            
                 var entity2 =  _context.Menus.FirstOrDefault(item => item.id == entity.menu_id);                
                 var entity3 =  _context.Menus.FirstOrDefault(item => item.id == entity2.parent_id);

                if(entity3 != null) {
                    var submenu1 =  _context.RoleAccess.FirstOrDefault(m => m.menu_id == entity3.id && m.role_id == entity.role_id );                    

                    if (entity3 != null)
                    {                
                        submenu1.is_active = request.is_active;
                        submenu1.status = mystatus;
                        _context.SaveChanges();
                    }
                 }
            }
            

            return Ok(201);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpPut("approvecompany")]
        public async Task<IActionResult> ApproveCompany([FromBody]Companyprofile request)
        {   
            var values = await _context.RoleAccess.ToListAsync();
            var entity =  _context.Companyprofiles.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {                
                entity.status = 1;
                entity.modified_at = DateTime.Now;
                _context.SaveChanges();
                ApproveCompanyEmail(entity.con_email,entity.con_name,entity.com_name);
            }
            
            return Ok(entity);
        }

         // POST api/values
        [AllowAnonymous]
        [HttpPut("rejectcompany")]
        public async Task<IActionResult> RejectCompany([FromBody]Companyprofile request)
        {   
            var values = await _context.RoleAccess.ToListAsync();
            var entity =  _context.Companyprofiles.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {                
                entity.status = 2;
                entity.modified_at = DateTime.Now;
                _context.SaveChanges();
                RejectCompanyEmail(entity.con_email,entity.con_name,entity.com_name);
            }
            
            return Ok(201);
        }

        private bool ApproveCompanyEmail(string con_email, string con_name, string com_name)
        {
            var eusers = _context.Users.FirstOrDefault(e=> e.username=="Rod");
                        
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
                return false;
            }

            var newmessage = new MimeMessage();
            // From address
            newmessage.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

            // To address
            newmessage.To.Add(new MailboxAddress(con_email));

            // Subject 
            
            newmessage.Subject = "ITAD Company Approval";
            // Body 
            newmessage.Body =  new TextPart("html") {
                Text = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body style='font-family:Arial, Helvetica, sans-serif;font-size:12px;'><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736; padding:10px;'><div style='color:#08ab9e ;text-align: center;'> <b>ITAD Company Approval</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + con_name + "</span></div><br><div> Thanks for your interest in joining the Circular Computing ITAD partnership.</div><div> Your application has been approved and you can now consider your organisation part of the growing group of companies bringing legitimacy, proffesionlism, purpose and scale to the business of \"pre used\" IT.</div><div> Somebody from our organisation will reach back to you shortly to get you fully onboarded.</div><div> Please remember that you also need to register your own personal details and add a password to access your account <a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/#/register style='color:#08ab9e; text-decoration:underline;'>here</a>.</div><br><div> The Circular Computing Team.</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'> <div style='color:#08ab9e ;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e ; text-decoration:underline;'>CLICK HERE</a></div></td></tr></table> <br><br></td></tr></table></body></html></body></html>",
            };

            using (var client = new SmtpClient()){

                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;

                client.Connect("mail.a2cuae.com", 465, true);

                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                client.Send(newmessage);

                client.Disconnect(true);
            }
            return true;
        }

        
        private bool RejectCompanyEmail(string con_email, string con_name, string com_name)
        {
            var eusers = _context.Users.FirstOrDefault(e=> e.username=="Rod");
                        
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
                return false;
            }

            var newmessage = new MimeMessage();
            // From address
            newmessage.From.Add(new MailboxAddress("Circular Computing", "support@a2cuae.com"));

            // To address
            newmessage.To.Add(new MailboxAddress(con_email));

            // Subject 
            
            newmessage.Subject = "ITAD Company Approval";
            // Body 
            newmessage.Body =  new TextPart("html") {
                Text = "<!DOCTYPE html><html><head><title>Circular Computing</title></head><body style='font-family:Arial, Helvetica, sans-serif;font-size:12px;'><html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> <title>Circular Computing</title></head><body> <table width='100%' border='0' cellspacing='0' cellpadding='0'><tr> <td align='center' valign='top' bgcolor='#062736' style='background-color:#fff;'> <br><br><table width='600' border='1' cellspacing='0' cellpadding='0'><tr><td align='left' valign='top' bgcolor='#564319' style='background-color:#062736;padding:10px;'><div style='color:#08ab9e ;text-align: center;'> <b>ITAD Company Approval</b></div></td></tr><tr><td align='left' valign='top' bgcolor='#ffffff' style='background-color:#ffffff;'><table width='95%' border='0' align='center' cellpadding='0' cellspacing='0'> <tr><td align='left' valign='middle' style='color:#03443f;padding:10px;'> <div> Dear <span style='text-transform:capitalize'>" + con_name + "</span></div><br><div> Thanks for your interest in joining the Circular Computing ITAD partnership.</div><div> Your application has not been approved to date but we hope to reach back to you soon.</div><br><div> The Circular Computing Team.</div></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0' style='border-bottom:2px solid #847b7b91'><tr><td align='center' valign='middle' style='padding:5px;'></td></tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'> <tr> <td align='left' valign='middle' style='padding:15px; background-color:#062736;'> <div style='color:#08ab9e ;'> <br><a href="+$"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}"+"/ style='color:#08ab9e ; text-decoration:underline;'>CLICK HERE</a></div></td></tr></table></td></tr></table></body></html></body></html>",
            };

            using (var client = new SmtpClient()){

                //client.SslProtocols =  System.Security.Authentication.SslProtocols.Tls11 | System.Security.Authentication.SslProtocols.Tls12;

                client.Connect("mail.a2cuae.com", 465, true);

                client.Authenticate("support@a2cuae.com","WQN?5O,_-7fx");

                client.Send(newmessage);

                client.Disconnect(true);
            }
            return true;
        }

        // POST api/values
        [AllowAnonymous]
        [HttpPut("activateemail")]
        public async Task<IActionResult> ActivateEmail([FromBody]ChatSetting request)
        {   
            var values = await _context.EmailSettings.ToListAsync();
            var entity =  _context.EmailSettings.FirstOrDefault(item => item.id == request.id);

            if (entity != null)
            {                
                entity.status = request.status;
                entity.updated_at =DateTime.Now;
                _context.SaveChanges();
            }    

            return Ok(201);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpPut("activatechat")]
        public async Task<IActionResult> ActivateChat([FromBody]ChatSetting request)
        {   
            var values = await _context.ChatSettings.ToListAsync();
            var entity =  _context.ChatSettings.FirstOrDefault(
                item => item.user_id == request.user_id && item.chat_type == request.chat_type);

            if (entity != null)
            {                
                entity.status = request.status;
                entity.updated_at =DateTime.Now;
                _context.SaveChanges();
            }    

            return Ok(201);
        }

        // POST api/values
        [AllowAnonymous]
        [HttpGet("getgenerations")]
        public async Task<IActionResult> GetGenerations()
        {
            
            var values = await _context.Generations.ToListAsync();
            
             return Ok(values);
        }
        
        [AllowAnonymous]
        [HttpGet("loadlocations")]
        public async Task<IActionResult> LoadLocations()
        {
            var values = await _context.Locations.ToListAsync();
            var result =from part in _context.Locations
               select new
                {
                    id = part.id,
                    text = part.name,
                    status = part.status,
                    createddate = part.createddate
                };
            
            return Ok(result);
        }
        [AllowAnonymous]
        [HttpGet("getmakes")]
        public async Task<IActionResult> GetMakes()
        {
            var values = await _context.PartProducts.ToListAsync();
            var result =from part in _context.PartProducts
                        where part.Type == 1 
                        orderby part.CreatedDate descending
               select new
                {
                    id = part.Id,
                    text = part.ProductName,
                    parentId = part.ParentId,
                    type = part.Type,
                    createdDate = part.CreatedDate
                };
            
            return Ok(result);
        }
         // POST api/values
        [AllowAnonymous]
        [HttpPost("addmake")]
        public async Task<IActionResult> AddMake([FromBody]PartProduct request)
        {                         
            var makeToCreate = new PartProduct
            {
                ProductName =request.ProductName,
                ParentId =request.ParentId,
                Type =request.Type,
                CreatedDate =DateTime.Now

            };
            var createdMake = await _makemodel.PartProduct(makeToCreate);

            var result =from part in _context.PartProducts
                        where part.Type == 1 
                        orderby part.CreatedDate descending
               select new
                {
                    id = part.Id,
                    text = part.ProductName,
                    parentId = part.ParentId,
                    type = part.Type,
                    createdDate = part.CreatedDate
                };
                
             return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("getmodels")]
        public async Task<IActionResult> GetModels()
        {
            var values = await _context.PartProducts.ToListAsync();
            var result =from part in _context.PartProducts
                        join make in _context.PartProducts 
                        on part.ParentId equals make.Id
                        into Make
                        from make in Make.DefaultIfEmpty()
                        where part.Type == 2
                        orderby part.CreatedDate descending
               select new
                {
                    id = part.Id,
                    text = part.ProductName,
                    ptext = make.ProductName,
                    parentId = part.ParentId,
                    type = part.Type,
                    createdDate = part.CreatedDate
                };
            
            return Ok(result);
        }

        
         // POST api/values
        [AllowAnonymous]
        [HttpPost("addmodel")]
        public async Task<IActionResult> AddModel([FromBody]PartProduct request)
        {                         
            var makeToCreate = new PartProduct
            {
                ProductName =request.ProductName,
                ParentId =request.ParentId,
                Type =request.Type,
                CreatedDate =DateTime.Now

            };
            var createdMake = await _makemodel.PartProduct(makeToCreate);

            var result =from part in _context.PartProducts
                        join make in _context.PartProducts 
                        on part.ParentId equals make.Id
                        into Make
                        from make in Make.DefaultIfEmpty()
                        where part.Type == 2
                        orderby part.CreatedDate descending
               select new
                {
                    id = part.Id,
                    text = part.ProductName,
                    ptext = make.ProductName,
                    parentId = part.ParentId,
                    type = part.Type,
                    createdDate = part.CreatedDate
                };
                
             return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("getprocessors")]
        public async Task<IActionResult> GetProcessors()
        {
            var values = await _context.ProcessorMasters.ToListAsync();
            var result =from proc in _context.ProcessorMasters
               select new
                {
                    id = proc.ProcessorId,
                    text = proc.Processor
                };
            
            return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("getIssues")]
        public async Task<IActionResult> GetIssues()
        {
            var values = await _context.Issues.ToListAsync();
            
            return Ok(values);
        }
        [AllowAnonymous]
        [HttpGet("getPriorities")]
        public async Task<IActionResult> GetPriorities()
        {
            var values = await _context.priorities.ToListAsync();
            
            return Ok(values);
        }
        [AllowAnonymous]
        [HttpGet("getuserrole")]
        public async Task<IActionResult> GetRole()
        {
            var values = await _context.Roles.ToListAsync();
            
            return Ok(values);
        }
        [AllowAnonymous]
        [HttpGet("getsupplier")]
        public async Task<IActionResult> GetSupplier()
        {
            var values = await _context.Suppliers.ToListAsync();
            
            return Ok(values);
        }
         // POST api/values
        [AllowAnonymous]
        [HttpPost("addroles")]
        public async Task<IActionResult> AddRoles([FromBody]Role request)
        {                         
            var roleToCreate = new Role
            {
                RoleTitle =request.RoleTitle,
                CreateDate =DateTime.Now

            };
            var createdRole = await _role.Role(roleToCreate);

            var menus = await _context.Menus.ToListAsync();

            foreach (var item in menus)
            {
                var accessToCreate = new RoleAccess
                {
                    menu_id =item.id,
                    role_id =createdRole.RoleID,
                    is_active =false,
                    status =0,
                    created_at =DateTime.Now

                };                
                var accessToCreated = await _role.RoleAccess(accessToCreate);
            }
            
            var subs = _context.EmailSettings.Where(item => item.role_id == 1).ToList();

            foreach (var sub in subs)
            {
                var emailtocreat = new EmailSetting
                {
                    role_id =createdRole.RoleID,
                    e_type =sub.e_type,
                    status =0,
                    created_at =DateTime.Now,
                    updated_at =DateTime.Now

                };                
                var emailtocreated = await _role.EmailSetting(emailtocreat);
            }

            var values = await _context.Roles.ToListAsync(); 

             return Ok(values);
        }

              
        [AllowAnonymous]
        [HttpGet("getspecs")]
        public async Task<IActionResult> GetSpecs()
        {
            var values = await _context.SpectDetails.ToListAsync();
            return Ok(values);
        }
        
        [AllowAnonymous]
        [HttpGet("getviewchat")]
        public async Task<IActionResult> GetviewChat()
        {
            var values = await _context.Viewchats.ToListAsync();
            var grouped = (from t in _context.Viewchats
             group t by new {t.ref_id, t.user_id}
             into grp
                    select new
                    {
                        id = grp.Key.ref_id,
                        user_id = grp.Key.user_id,
                        chatviewcount = grp.Count()
                    }).ToList();

            return Ok(grouped);
        }

        [AllowAnonymous]
        [HttpPost("addspecs")]
        public async Task<IActionResult> AddSpecs([FromBody]SpectDetail request)
        {                         
            
            var specToCreate = new SpectDetail
            {
                Text =request.Text,
                ParentId = request.ParentId,
                Price = 0,
                CreatedDate =DateTime.Now,
                Status = 1,

            };
            var createdRole = await _spect.SpectDetail(specToCreate);

            var values = await _context.SpectDetails.ToListAsync(); 
             return Ok(values);
        }

        [AllowAnonymous]
        [HttpPost("editspecs")]
        public async Task<IActionResult> EditSpecs([FromBody]SpectDetail request)
        {       
            var entity = _context.SpectDetails.FirstOrDefault(item => item.Id == request.Id);

            if (entity != null)
            {
                entity.Text = request.Text;
                _context.SaveChanges();
            }

            var values = await _context.SpectDetails.ToListAsync(); 
             return Ok(values);
        }
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Getvalue(int id)
        {
            var value = await _context.Values.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
