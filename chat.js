   };
    //HTML5 SSE(Server Sent Event) initilization 
    this.initSevr = function() {
        sevr = new EventSource('https://dzapps.github.io/chat/chat.php');
        sevr.onmessage = function(e) {
            if (oldata != e.data) {
                chatZone.innerHTML += e.data;
                oldata = e.data;
            }
        };
    };
};
// Createing Object for Chat Engine 
var chat = new ChatEngine();  
chat.init();
