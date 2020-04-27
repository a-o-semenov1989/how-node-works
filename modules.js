//console.log(arguments);
//console.log(require("module").wrapper);

//modules.exports
const Calculator = require("./test-module-1"); //сохраняем импортируемыи модуль в переменную (любое имя)
const calc1 = new Calculator();
console.log(calc1.add(2, 5));

//exports
//const calc2 = require("./test-module-2");
//console.log(calc2.add(2, 5));

const { add } = require("./test-module-2"); //деструктурируем сразу нужные своиства
console.log(add(2, 5));

//caching
require("./test-module-3")(); //вызываем сразу, не сохраняя в переменную
//загрузится только один раз и код в нем сработает только раз
require("./test-module-3")(); //эти два вызова сработают из кэша
require("./test-module-3")();
