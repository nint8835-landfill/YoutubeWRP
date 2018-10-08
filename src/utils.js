pushPresence = function(presence){
    chrome.storage.sync.get(["token"], function(result){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "https://webrichpresence.argonskyline.com/api/push");
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(
            {
                "token": result.token,
                "app_id": "498644755421331467",
                "presence": presence
            }
        ));
    });
}

clearPresence = function(){
    chrome.storage.sync.get(["token"], function(result){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "https://webrichpresence.argonskyline.com/api/clear");
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify(
            {
                "token": result.token,
                "app_id": "498644755421331467"
            }
        ));
    });
}

window.addEventListener("beforeunload", function(e){
    clearPresence();
    e.returnValue = null;
}, false);