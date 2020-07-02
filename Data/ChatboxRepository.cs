using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using CheckpointInventoryStock.API.Models;

namespace CheckpointInventoryStock.API.Data
{
    public class ChatboxRepository : IChatboxRepository
    {
        private readonly DataContext _context;
        public ChatboxRepository(DataContext context)
        {
            _context = context;

        }
        public async Task<ChatBox> ChatBox(ChatBox request)
        {    
            await _context.ChatBoxs.AddAsync(request);
            await _context.SaveChangesAsync();
            
            return request;
        }

       public async Task<IEnumerable<ChatBox>> GetChatBoxs()
        {
           var  request = await _context.ChatBoxs.ToListAsync();

            return request;
        }
    }
}