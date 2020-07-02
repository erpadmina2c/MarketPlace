using System.Collections.Generic;
using System.Threading.Tasks;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public class ViewchatRepository : IViewchatRepository
    {
        private readonly DataContext _context;
        public ViewchatRepository(DataContext context)
        {
            _context = context;

        }        public Task<IEnumerable<Viewchat>> GetViewchats()
        {
            throw new System.NotImplementedException();
        }

        public async Task<Viewchat> Viewchat(Viewchat request)
        {
            await _context.Viewchats.AddAsync(request);
            await _context.SaveChangesAsync();            
            return request;
        }
    }
}