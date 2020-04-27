const fs = require("fs");
const server = require("http").createServer(); //создаем сервер сразу после импорта модуля

server.on("request", (req, res) => {
  //Solution 1, не подходит для продакшна
  //fs.readFile("test-file.txt", (err, data) => { //мы читаем файл, запоминаем его в переменную
  //  if (err) console.log(err);
  //  res.end(data); //отправляем файл целиком клиенту и завершаем ответ
  //});
  ////////////////////////
  //Solution 2: Streams
  // const readable = fs.createReadStream("test-file.txt"); //вместо сохранения данных в переменную, мы используем стрим
  //readable.on("data", (chunk) => {
  //res.write(chunk); //в ответе даем writable stream. Таким образом мы направляем контент из файла сразу клиенту
  //});
  //readable.on("end", () => {
  //   res.end(); //когда закончится запись, мы вызываем конец запроса. Без end() ничего не будет работать и файлы не отправятся
  // });
  // readable.on("error", (err) => {  //в случае ошибки
  //   console.log(err);
  //   res.statusCode = 500; //ставим код ошибки
  //   res.end("File not found!");
  // });
  ////////////////////////
  //Solution 3  using pipe (pipe the output of the readable stream right into the input of the writable stream) //fix to the problem of backpressure (скорость чтения выше скорости отправки)
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res); //берем наш читающий стрим и пайпим его в ответ клиенту
  //Схема readableSource.pipe(writableDestination)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
