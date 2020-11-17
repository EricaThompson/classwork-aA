const MovingObject = require("./moving_object.js");

document.addEventListener("DOMContentLoaded", function(){   
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d');
    // return ctx;

    window.MovingObject = MovingObject;

    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00"
    });

    window.ctx = ctx;
    
    window.mo = mo;
    
})


