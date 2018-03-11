using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System.Threading.Tasks;

namespace AspStandard.SignalRHubs
{
  [HubName("loopy")]
  public class LoopyHub : Hub
  {
    public Task Send(string data)
    {
      return Clients.All.InvokeAsync("Send", data);
    }
  }
}