
let doStuff = function(): void { 
            
    postMessage('this message is from the worker: '+ (new Date).getTime());
    
 };


setInterval(doStuff, 1000);