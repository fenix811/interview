using System.Linq;
using System.Threading.Tasks;
using Zeux.Test.Models;

namespace Zeux.Test.Repositories
{
    public class AssetRepository: IAssetRepository
    {
        private readonly FakeContext _context = new FakeContext();

        public async Task<IQueryable<Asset>> Get()
        {
            return await Task.Run(() => _context.Assets.OrderBy(a => a.Name));
        }

        public async Task<IQueryable<Asset>> Get(string type)
        {
            return await Task.Run(() => _context.Assets.Where(row => row.Type.Name.ToLower() == type.ToLower()).OrderBy(a => a.Name));
        }

        public async Task<IQueryable<AssetType>> GetTypes()
        {
            return await Task.Run(() => _context.AssetTypes);
        }
    }
}
