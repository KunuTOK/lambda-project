exports.handler = function(event, context, callback) {

  const req = JSON.parse(event.body);
  console.log(req.message.text);

var kst = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
      kst = new Date(kst);
      console.log('Kostroma time: '+kst.toLocaleString())
      document.write('Kostroma time: '+kst.toLocaleString())
 document.write('<====>')
 var y = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
 y = new Date(y);
 console.log('San Francisco time: '+y.toLocaleString())
 document.write('San Francisco time: '+y.toLocaleString())

  var payload = {
    method: "sendMessage",
    chat_id: req.message.chat.id,
    text: 'Kostroma time: '+kst.toLocaleString() +'<====> '+'San Francisco time: '+y.toLocaleString()
    parse_mode: "HTML"
  };

  callback(null, {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
};
