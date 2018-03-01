var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById('populateDetailsButton').addEventListener("click", this.populateDeviceDetails);
    },

    populateDeviceDetails: function(){
        var deviceDetails = "";
        deviceDetails +=  "<br/>Cordova:"+device.cordova;
        deviceDetails +=  "<br/>model:"+device.model;
        deviceDetails +=  "<br/>platform:"+device.platform;
        deviceDetails +=  "<br/>uuid:"+device.uuid;
        deviceDetails +=  "<br/>version:"+device.version;
        deviceDetails +=  "<br/>manufacturer:"+device.manufacturer;
        deviceDetails +=  "<br/>isVirtual:"+device.isVirtual;
        deviceDetails +=  "<br/>serial:"+device.serial;

        document.querySelector("#deviceDetails").innerHTML = deviceDetails;
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();