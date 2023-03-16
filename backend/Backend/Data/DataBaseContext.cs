using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class DataBaseContext : DbContext
    {
        public DbSet<User> User { get; set; }

        public DataBaseContext(DbContextOptions<DataBaseContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<User>()
                //.HasNoKey();
            base.OnModelCreating(modelBuilder);

        }
    }
}
