using CheckpointInventoryStock.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CheckpointInventoryStock.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}

        public DbSet<Value> Values { get; set; }   
        
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<ChatBox> ChatBoxs { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<RequirementList> RequirementLists { get; set; }
        public DbSet<PartProduct> PartProducts { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<SpectDetail> SpectDetails { get; set; }
        public DbSet<ProcessorMaster> ProcessorMasters { get; set; }
        public DbSet<Issue> Issues { get; set; }
        public DbSet<Priorty> priorities { get; set; }
        public DbSet<RequestStatus> RequestsStatus { get; set; }
        public DbSet<History> History { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<PurchaseUser> PurchaseUsers { get; set; }
        public DbSet<Viewchat> Viewchats { get; set; }
        public DbSet<ShareDeal> ShareDeal { get; set; }
        public DbSet<SharedDealList> SharedDealLists { get; set; }
        public DbSet<RequestLog> RequestLogs { get; set; }
        public DbSet<DealLog> DealLogs { get; set; }
        public DbSet<Generation> Generations { get; set; }
        public DbSet<ProjectMaster> ProjectMaster { get; set; }
        public DbSet<Adapter> Adapter { get; set; }
        public DbSet<Menu> Menus { get; set; }
        public DbSet<RoleAccess> RoleAccess { get; set; }
        public DbSet<Order> ReserveOrders { get; set; }
        public DbSet<OrderList> OrderLists { get; set; }
        public DbSet<ShortfallList> ShortfallLists { get; set; }
        public DbSet<ShortfallRefurbList> ShortfallRefurbLists { get; set; }
        public DbSet<ShortfallDetailList> ShortfallDetailLists { get; set; }
        public DbSet<GetDealData> GetDealDatas { get; set; }
        public DbSet<PurchaseOrder> PurchaseOrders { get; set; }
        public DbSet<CommitPurchaseOrder> CommitPurchaseOrders { get; set; }
        public DbSet<CPLDetailsList> CPLDetailsLists { get; set; }
        public DbSet<COPLog> COPLogs { get; set; }
        public DbSet<CommitOrder> CommitOrders { get; set; }
        public DbSet<CODetailsList> CODetailsLists { get; set; }
        public DbSet<CommitShortFall> CommitShortFalls { get; set; }
        public DbSet<COLog> COLogs { get; set; }
        public DbSet<Pricing> Pricings { get; set; }
        public DbSet<PricingList> PricingLists { get; set; }
        public DbSet<POList> POLists { get; set; }
        public DbSet<CPOList> CPOLists { get; set; }
        public DbSet<CommitOrderList> CommitOrderLists { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<AvgPriceList> AvgPriceLists { get; set; }
        public DbSet<DealOfferList> DealOfferLists { get; set; }
        public DbSet<Page> Pages { get; set; }
        public DbSet<ReportSetting> ReportSettings { get; set; }
        public DbSet<ActiveModel> ActiveModels { get; set; }
        public DbSet<ActiveProc> ActiveProcs { get; set; }
        public DbSet<ProcReportSetting> ProcReportSettings { get; set; }
        public DbSet<ShortfallViewchat> ShortfallViewchats { get; set; }
        public DbSet<ShortfallChatBox> ShortfallChatBoxs { get; set; }
        public DbSet<ChatSetting> ChatSettings { get; set; }
        public DbSet<EmailSetting> EmailSettings { get; set; }
        public DbSet<SubscribeUser> SubscribeUsers { get; set; }
        public DbSet<ITAD> ITADs { get; set; }
        public DbSet<ITADList> ITADLists { get; set; }
        public DbSet<LoginLog> LoginLogs { get; set; }
        public DbSet<ITADSuplier> ITADSupliers { get; set; }
        public DbSet<Currency> Currency { get; set; }
        public DbSet<Companyprofile> Companyprofiles { get; set; }
    }
}