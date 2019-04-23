exports.handler = function(event, context, callback) {
  const body =  JSON.parse(event.body)
console.log(body.message.text)
  callback(null, {
    statusCode: 200,
    body: "today " + new Date()
  });
};
