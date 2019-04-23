exports.handler = function(event, context, callback) {
  const body = JSON.parse(event.body);
  console.log(body.message.text);
  var payload = {
    method: "sendMessage",
    chat_id: "@kunutok",
    text: "testing reply " + body.message.text + " " + new Date(),
    parse_mode: "HTML"
  };

  callback(null, {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
};
