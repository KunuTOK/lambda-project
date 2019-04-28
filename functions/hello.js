exports.handler = function(event, context, callback) {

  const req = JSON.parse(event.body);
  console.log(req.message.text);
  var payload = {
    method: "sendMessage",
    chat_id: req.message.chat.id,
    text: "testing reply " + req.message.chat.id + " " + new Date(),
    parse_mode: "HTML"
  };

  callback(null, {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
};
