const playerData = {
    "point" : 0,
    "color": "#f33333",
    "object": null,
    "playerSpeed": 10
};

function startGame(){
    createPlayer();
}


function movePlayer(){
    if (playerData['object'] == null || playerData['object'] == undefined){
        return false;
    }

    window.addEventListener("keydown", (e)=>{
        console.log(e)
        if (e.code == "KeyW"){
            console.log("Hello world")
            playerTransform("top");
        }
        if (e.code == "KeyD"){
            playerTransform("right");
        }
        if (e.code == "KeyS"){
            playerTransform("bottom");
        }
        if (e.code == "KeyA"){
            playerTransform("left");
        }
    })
}


function createPlayer(){
    if (document.querySelector('#localPlayer') != undefined){
        return false;
    }
    

    const player = document.createElement("div");
    player.id = "localPlayer";
    player.style.backgroundColor = playerData['color'];
    player.innerHTML = "<span>Rezafaghih</span>";
    playerData['object'] = player;
    
    document.querySelector(".container").appendChild(player);
    movePlayer();
}


function playerTransform(vector){
    if (vector == 'bottom'){
        var top = playerData['object'].offsetTop;
        top+=playerData['playerSpeed'];
        playerData['object'].style.top = `${(top)}px`;
    }else if (vector == 'right'){
        var left = playerData['object'].offsetLeft;
        left+=playerData['playerSpeed'];
        playerData['object'].style.left = `${(left)}px`;
    }else if (vector == 'top'){
        var top = playerData['object'].offsetTop;
        top-=playerData['playerSpeed'];
        playerData['object'].style.top = `${(top)}px`;
    }else if (vector == 'left'){
        var left = playerData['object'].offsetLeft;
        left-=playerData['playerSpeed'];
        playerData['object'].style.left = `${(left)}px`;
    }
}



window.addEventListener("load", startGame);