exports.handler = function(event, context, callback) {
  const body =  JSON.parse(event.body)
console.log(body.message.text)
UrlFetchApp.fetch('https://api.telegram.org/bot' '742875963:AAEtJnKfKL8CjS9WRHJZnZHNo3Rhk2_Bo_8' '/', data);
  callback(null, {
    statusCode: 200,
    body: "today " + new Date()
  });
};
