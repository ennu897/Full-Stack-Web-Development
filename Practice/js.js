function sizeMaker(size){
  // return () => {
    document.body.style.fontSize = `${size}px`;
  // }
  
}
document.getElementById('size1').onclick = () => sizeMaker(12);
document.getElementById('size2').onclick = () => sizeMaker(22);
document.getElementById('size3').onclick = () => sizeMaker(32);

// document.getElementById('size1').onclick = sizeMaker(12);
// document.getElementById('size2').onclick = sizeMaker(22);
// document.getElementById('size3').onclick = sizeMaker(32);





/* 
const documentMock = (() => ({
  querySelector: (Selector) => ({
    innerHTML: null,
  }),
}));


const Formatter = ( function (doc) {

  const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`) ;

  const makeUpperCase = (text) => {
    log("making upper case");
    return text.toUpperCase();
  }

  const writeToDOM = (Selector, message) => {
    const upper = makeUpperCase(message);
    doc.querySelector(Selector).innerHTML = upper;
    return makeUpperCase(message);
  }

  return {
    makeUpperCase, 
    writeToDOM,
  }

})(document || documentMock)

console.log(Formatter.writeToDOM('#target', "hello world!!"));
 */