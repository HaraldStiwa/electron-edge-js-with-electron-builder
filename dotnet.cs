using System;
using System.Threading.Tasks;



public class DotNetWrapper
{

    public async Task<object> Test(dynamic data)
    {
        Console.WriteLine("Hello World (from dotnet.cs code)!");
        Console.WriteLine(data);
        return null;
    }

}
