import Pusher from 'pusher-js/react-native';

var pusher = new Pusher({
  appId: '288760',
  key: '4adf85492acfebaad8bb',
  secret: '6ec8700c38005c3dc18a',
});

var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  alert(data.message);
});

class Chat extends Component {
  getInitialState() {
    return {
      username: null
    };
  },

  _onName(e){
    if (e.nativeEvent.keyCode != 13) return;
    var username = e.target.value;
    this.setState({username: username});
  },

  render() {
    return (
      <View>
        <WelcomeView username={this.state.username} _onName={this._onName} />
        <MainView username={this.state.username} />
      </View>
    );
  }

}




















export default Pusher;