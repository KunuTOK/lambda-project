exports.handler = function(event, context, callback) {
<<<<<<< HEAD
  const body =  JSON.parse(event.body)
console.log(body.message.text)
UrlFetchApp.fetch('https://api.telegram.org/bot' '742875963:AAEtJnKfKL8CjS9WRHJZnZHNo3Rhk2_Bo_8' '/', data);
=======
  const body = JSON.parse(event.body);
  console.log(body.message.text);
  var payload = {
    method: "sendMessage",
    chat_id: "@kunutok",
    text: "testing reply " + body.message.text + " " + new Date(),
    parse_mode: "HTML"
  };

>>>>>>> 87f66d67a22fe4f63a004ef3d0a4b9b4e5cc69f9
  callback(null, {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
};
