let text = "'I'm the cook,' he said, 'it's my job.'";
let reg = /(^|\W)'|'(\W|$)/g
console.log(reg.exec("'I'm the cook,' he said, 'it's my job.'"));



console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."