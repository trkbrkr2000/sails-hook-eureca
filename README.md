# sails-hook-eureca

Sails hook to integrate <a href="http://eureca.io/" target="_blank">eureca.io</a>

This library is not to replace sails.io that is built in, but to supplement the capabilities of realtime communications and control
using eureca.io.


###Configuration

    config/eureca.js
```javascript
module.exports = {
    prefix: 'eureca.io',
    onConnect: function (context) {
    
    },
    onDisconnect: function (context) {
    
    },
    onMessage: function (msg) {
    
    },
    onError: function (err) {
    
    }
}
```

###Sample Controller

Each module that is in the api/eureca folder will be exported on the EurecaServer instances exports object.

The below example demonstrates how to provide access to the Sample model's find method.

    api/eureca/Sample.js
```javascript
module.exports = {
    //Tell the eureca.io client context that it will be using
    //and asyncronous call that will trigger the onReady or then
    //when the context.return method is called.
   
    find : function(query){
        var context = this;
        context.async = true;
    
        Sample.find(query).then(function(data){
            context.return(data);
        },
        function(err){
            context.return(err);
        });
    }
}
```


please feel free to open up any [issue on GitHub](https://github.com/trkbrkr2000/sails-hook-eureca/issues) to drop in a suggestion or something.
