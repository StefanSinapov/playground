function myCallBack(text) {
    console.log('inside myCallback ' + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction('myText', myCallBack);
//# sourceMappingURL=app14.js.map