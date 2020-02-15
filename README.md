# channelstream-js-client

Browser client for Channelstream websocket server.

https://channelstream.org

https://www.npmjs.com/package/@channelstream/channelstream

First run channelstream server:
    
    channelstream

Now you can implement the client side of websocket handling, first install the client:

    npm i @channelstream/channelstream  

You are ready to add the client to your application and act on events:

```javascript
import {ChannelStreamConnection} from '@channelstream/channelstream';
let connection = new ChannelStreamConnection();
// this points to your application view
connection.connectUrl = '/connect';
connection.messageUrl = '/message';
// this points to channelstream
connection.websocketUrl = 'ws://127.0.0.1:8000/ws';
connection.longPollUrl = 'http://127.0.0.1:8000/listen';

connection.listenMessageCallback = (messages) => {
    for (let message of messages) {
        console.log('channelstream message', message);
        // Do something on message received
    }
};
// optional
connection.listenOpenedCallback = () => {
    // Do something on websocket open
};
// this will try to obtain connection UUID from `connectUrl` endpoint of your 
// WEB application via XHR calland then use it to make websocket connection

// optionally set the username for XHR call
// your server side application can normally handle this
connection.username = "someID"

connection.connect();
```

Consult the project website for more in depth examples.

## License

BSD 3-Clause License
