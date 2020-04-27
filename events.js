const EventEmitter = require("events"); //используем втроенный модуль
//С помощью EventEmitter можно выставить много event listener-ов для одного ивента
const http = require("http"); //модуль http построен на ивентах

class Sales extends EventEmitter {
  //создаем новый класс, который наследует EventEmitter
  constructor() {
    super(); //всегда когда наследуем другой супер класс используем супер, чтобы получить все методы родительского класса
  }
}

const myEmitter = new Sales(); // создаем новый EventEmitter

myEmitter.on("newSale", () => {
  //выполнится в случае newSale. on - всегда обозначает что это ивент листенер в node.js
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  //observer, наблюдает и ожидает когда случится emit
  console.log("Costumer name: Anatolii");
});

myEmitter.on("newSale", (stock) => {
  //принимаем 9 и отображаем
  console.log(`There are now ${stock} items`);
});

myEmitter.emit("newSale", 9); //можно присвоить ему любое имя. emit - подобно нажатию на кнопку. Делает кастомный ивент
//можно передавать аргументы в эмиттер, например у нас цифра 9, которую мы затем передаем в ивент листенер
//Если у нас много листенеров для одного ивента они отработают синхронно, один за другим

//////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  //слушаем request event, колбэк получает запрос и ответ
  console.log("Request received");
  console.log(req.url); //увидим что браузер делает дублирует запросы, один для /, а второй для fav.icon
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request received");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
