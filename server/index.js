var express = require('express');
var Pusher = require('pusher');
var app = express();

app.set('port', (process.env.PORT || 5000));

const pusher = new Pusher({
  appId: '288760',
  key: '4adf85492acfebaad8bb',
  secret: '6ec8700c38005c3dc18a'
});


app.get('/chat/:chat', function(req,res){
  const chat_data = JSON.parse(req.params.chat);
  pusher.trigger('channel-1', 'test_event', { message: "hello world" });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.post('/messages', function(req,res){
  var message = {
    username: 
    text = cgi.escape(req.)
  }
})