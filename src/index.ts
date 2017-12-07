import * as workerPath from "file-loader?name=[name].js!./test.worker";


const worker = new Worker(workerPath);

worker.onmessage = function(e) {
    var el: HTMLElement = document.getElementById('content');
    el.innerHTML = e.data + '</br>';    
};