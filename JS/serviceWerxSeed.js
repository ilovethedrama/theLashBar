/*register service worker fo' PWA. Navigator = browser, 
basically checking to make sure its supported in the current browser */


var path = '/public/serviceWerx.js';

// console.log(navigator);
if (navigator.serviceWorker) {
    /* This is an asynchronous task as it takes time to complete and
     so the then function will be resolved once the register part is sorted. The async task creates an implied/implicit 'promise', this promise, 
     or guarantee is handled by 'then' and 'catch', then to deal with a successful completion and catch to deal with the error. 
     If successful the promise takes in a registration object which i've called registeredSW */
    navigator.serviceWorker.register('/public/serviceWerx.js').then((registeredSW) => {
        console.log('Yeah bro its registered now', registeredSW)
        console.log(dirname.path);  
    }).catch((err) => {
        console.log(`Nah bro, couldn\'t register it still! ${err}`);
        console.log(dirname.path);  
    })
}