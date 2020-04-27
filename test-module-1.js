/*class Calculator {
  add(a, b) {
    return a + b;
  }

  minus(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

module.exports = Calculator; //если хотим экспортировать одну переменную
*/

module.exports = class {
  add(a, b) {
    return a + b;
  }

  minus(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
};
