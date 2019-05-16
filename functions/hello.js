exports.handler = function(event, context, callback) {

  const req = JSON.parse(event.body);
  console.log(req.message.text);
  var kst = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
  kst = new Date(kst);
  var y = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  y = new Date(y);
  var payload = {
    method: "sendMessage",
    chat_id: req.message.chat.id,
    text: req.message.chat.username + " exact time:\n" + "Kostroma: " + kst.toLocaleString()+ "" +'\n' + "San Francisco: "+ y.toLocaleString(),
    parse_mode: "HTML"
  };
  callback(null, {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
};
