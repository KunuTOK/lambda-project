exports.handler = function(event, context, callback) {

  const req = JSON.parse(event.body);

console.log(req.message.text);

  var kst = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
  kst = new Date(kst);
  var sf = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  sf = new Date(sf);

  var kostroma = {
    method: "sendMessage",
    chat_id: req.message.chat.id,
    text: " Exact time:\n" + "Kostroma: " + kst.toLocaleString(),
    parse_mode: "HTML"
  };
  var sanfran = {
    method: "sendMessage",
    chat_id: req.message.chat.id,
    text: " Exact time:\n" + "San Francisco: " + sf.toLocaleString(),
   parse_mode: "HTML"
 };

if (text === "/kostroma") {
  callback(null,  {
 statusCode: 200,
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify(sanfran)
 });
}

if (req.message.text === "/sanfran") {

} else if (req.message.text === '/kostroma') {
   callback(null,  {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(kostroma)
    });
};
