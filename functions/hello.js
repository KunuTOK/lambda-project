exports.handler = function(event, context, callback) {

  const req = JSON.parse(event.body);
  console.log(req.message.text);
  var kst = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
  kst = new Date(kst);
  var sf = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
  y = new Date(sf);
  var payload = {
    method: "sendMessage",
    chat_id: req.message.chat.id,
    text: " Exact time:\n" + "Kostroma: " + kst.toLocaleString(),
    parse_mode: "HTML"
  };
//  var payload = {
//    method: "sendMessage",
//    chat_id: req.message.chat.id,
//    text: " Exact time:\n" + "San Francisco: " + sf.toLocaleString(),
//    parse_mode: "HTML"
//  };
  callback(null, {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
};
