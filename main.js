// enables interaction with C# .NET
const edge = require('electron-edge-js');
const path = require('path');

try {
    const dotNetFunc = edge.func(`
        using System;
        async (input) => {
            Console.WriteLine("Hello World (from inlined code)!");
            Console.WriteLine(input);
            return null;
        }
    `);

    dotNetFunc("log message 1", function(error, result) {
        if (error) {
            throw error;
        }
        // do nothing
    });

    const dotNetFunc2 = edge.func({
        source: path.join(__dirname, 'dotnet.cs'),
        typeName: 'DotNetWrapper',
        methodName: 'Test'
    });

    dotNetFunc2("log message 2", function(error, result) {
        if (error) {
            throw error;
            // throw error;
        }
        // do nothing
    });
} catch(error) {
    console.error(error);
}

setTimeout(() => {
    process.exit(0);
}, 5000);
