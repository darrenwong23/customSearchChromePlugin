// Called when the user clicks on the browser action.


chrome.commands.onCommand.addListener(function(command) {
  console.log('onCommand event received for message: ', command);
    alert(1);
});

alert(2);

