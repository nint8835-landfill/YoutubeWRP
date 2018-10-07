$("#save_button").click(function(){
    chrome.storage.sync.set({token: $("#token_input").val()}, function(result){
        $("#save_button").html("Save token (Save successful)");
    });
});
    