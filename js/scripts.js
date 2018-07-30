
// shouldn't we put all the below code in an iffy??

document.addEventListener('DOMContentLoaded', function() {
  // Creating header on top of tile
  WebViewTileHeader.create('Tile Template');
});

// WebViewApiReady is the main event that we need to listen to
// to make sure that moduware APIs are initialized and ready to work with
document.addEventListener('WebViewApiReady', function() {

  // start listening to received data from all modules by 
  // subscribing to data received event
  Moduware.v0.API.Module.addEventListener('DataReceived', dataReceivedHandler);

  // the Nexpaq.Arguments object carries the data about the targeted module 
  // (specified in the manifest.json) like slot number and module uuid
  var targetModuleUuid = Nexpaq.Arguments[0];

  Moduware.v0.API.Module.SendCommand(targetModuleUuid, 'StartFlashingRgbLeds', [65535, 65535, 255, 255, 255]);

  Moduware.v0.API.addEventListener('BeforeExit', function() {
    // do your clean up code here, like switching off sensors or light
  });

});

// handles the event of receivng data from modules
function dataReceivedHandler(event) {

  var targetModuleUuid = Nexpaq.Arguments[0];

  // we need to make sure that the data received is from the module
  // that we are targeting
  if(event.moduleUuid !== targetModuleUuid) return;

  // each module can have more than one event, so we 
  // must check for the event source property to know which event 
  // is invoked
  if(event.dataSource === 'SensorValue') {}
}