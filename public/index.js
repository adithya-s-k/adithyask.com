const canvas = document.querySelector('#mainFrame');

const c = canvas.getContext('2d')

canvas.width=window.innerWidth
canvas.height=window.innerHeight

// creating an offset so that the map is centers
// made the offset of the background responsive and will always be in center no matter the screen size

const offset ={
    x:-735+((canvas.width-1024)/2),
    y:-600+((canvas.height-576)/2),
}
// collision mechanism
const collisionMap = []//2d array representing the grid
for(let i = 0; i < collisions.length;i+=70){
    collisionMap.push(collisions.slice(i,i+70))
}
// creating a arr with all the boundary positions with height and width
const boundaries = []
collisionMap.forEach((row,i)=>{
    row.forEach((column,j)=>{
        if(column === 1025){
        boundaries.push(
            new Boundary({
                position:{
                    x : j*Boundary.width + offset.x,
                    y : i*Boundary.height + offset.y
                }
            })
        )}
    })
})

const teleportMap = []
for(let i =0; i < teleport.length;i+=70){
    teleportMap.push(teleport.slice(i,i+70))
}
const teleports = []
teleportMap.forEach((row,i)=>{
    row.forEach((column,j)=>{
        if(column === 2002){
        teleports.push(
            new Boundary({
                position:{
                    x : j*Boundary.width + offset.x,
                    y : i*Boundary.height + offset.y
                }
            })
        )}
    })
})

const image = new Image();
image.src = "./assets/images/map.png";

const foregroundImage = new Image()
foregroundImage.src = './assets/images/foregroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = './assets/images/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './assets/images/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './assets/images/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './assets/images/playerRight.png'

const background = new Sprite({
    position:offset,
    image:image,
    // resolution of the image
    width:3360,
    height:1920
})

// canvas.width/2 - this.image.width/8, we are going to replace it with static value
// which is nothing but width and height of the player image in this case it is 192 and 68
// canvas.height/2 - this.image.height/2, 

const player = new Sprite({
    position:{
        x:canvas.width/2 - 192/8,
        y:canvas.height/2 - 68/2
    },
    image :playerDownImage,
    frames:{
        max:4,
        hold: 7
    },
    width:192,
    height:68,
    sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage
    }
})

const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: foregroundImage,
    width:3360,
    height:1920
})

let lastKey = '';
const keys={
    w:{
        pressed:false
    },
    a:{
        pressed:false
    },
    s:{
        pressed:false
    },
    d:{
        pressed:false
    },
    x:{
        pressed:false
    },
}

const movables  = [background,...boundaries,foreground,...teleports]

// softedge is created to make the boundary smaller thus given more movement space to the player
const softedge = {
    x:25,
    y:25
}
const speed = 6

const teleportActivation = {
    initiate:false
}

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x + softedge.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width - softedge.x &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height - softedge.y &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y + softedge.y
    )
}

function animate(){
    const animationId = window.requestAnimationFrame(animate);
    background.draw()
    boundaries.forEach(boundary =>{
        boundary.draw()
        if(rectangularCollision({
            rectangle1:player,
            rectangle2:boundary
        })){
            console.log('collision')
        }
    })
    player.draw()
    foreground.draw()
    if (teleportActivation.initiate) return
    teleports.forEach(pad =>{
        pad.draw()
        if(rectangularCollision({rectangle1:player,rectangle2:pad}) && keys.x.pressed){
            console.log("teleportation activated")
            teleportActivation.initiate = true

            //deactivate current animation loop
            window.cancelAnimationFrame(animationId)
            
            // gsap.to('#flash',{
            //     opacity :1,
            //     repeat : 7,
            //     yoyo : true,
            //     duration : 1.0,
            //     onComplete(){
            //         gsap.to('#flash',{
            //             opacity:1,
            //             duration:0.4
            //     })}
            // })
            // activate new animation
            location.href = 'html2.html';
        }
    })

    let moving = true
    player.moving = false

    if (keys.w.pressed && lastKey === 'w') {    
        player.moving = true
        player.image = playerUpImage
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: {
                ...boundary,
                position: {
                    x: boundary.position.x,
                    y: boundary.position.y + speed
                }
                }
            })
            ) {
            moving = false
            break
            }
        }
    
        if (moving)
            movables.forEach((movable) => {
            movable.position.y += speed
            })
        }    
    else if (keys.a.pressed && lastKey === 'a') {
        player.moving = true
        player.image = playerLeftImage
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: {
                ...boundary,
                position: {
                    x: boundary.position.x + speed,
                    y: boundary.position.y
                }
                }
            })
            ) {
            moving = false
            break
            }
        }
    
        if (moving)
            movables.forEach((movable) => {
            movable.position.x += speed
            })
        } 
        else if (keys.s.pressed && lastKey === 's') {
            player.moving = true
            player.image = playerDownImage
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: {
                ...boundary,
                position: {
                    x: boundary.position.x,
                    y: boundary.position.y - speed
                }
                }
            })
            ) {
            moving = false
            break
            }
        }
    
        if (moving)
            movables.forEach((movable) => {
            movable.position.y -= speed
            })
        } 
    else if (keys.d.pressed && lastKey === 'd') {
        player.moving = true
        player.image = playerRightImage
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: {
                ...boundary,
                position: {
                    x: boundary.position.x - speed,
                    y: boundary.position.y
                }
                }
            })
            ) {
            moving = false
            break
            }
        }
    
        if (moving)
            movables.forEach((movable) => {
            movable.position.x -= speed
            })
        }
}
animate()

function insideHouse(){
    const animationId = window.requestAnimationFrame(insideHouse)

    background.draw()
    boundaries.forEach(boundary =>{
        boundary.draw()
        if(rectangularCollision({
            rectangle1:player,
            rectangle2:boundary
        })){
            console.log('collision')
        }
    })
    player.draw()
    foreground.draw()
    teleports.forEach(pad =>{
        pad.draw()
        if(rectangularCollision({rectangle1:player,rectangle2:pad}) && keys.x.pressed){
            console.log("teleportation activated")
            // teleportActivation.initiate = true

            //deactivate current animation loop
            window.cancelAnimationFrame(animationId)
            
            gsap.to('#flash',{
                opacity :1,
                repeat : 3,
                yoyo : true,
                duration : 0.2,
                onComplete(){
                    gsap.to('#flash',{
                        opacity:0,
                        duration:0.4
                })}
            })
            // activate new animation
            animate()
        }
    })
    let moving = true
    player.moving = false

    if (keys.w.pressed && lastKey === 'w') {    
        player.moving = true
        player.image = playerUpImage
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: {
                ...boundary,
                position: {
                    x: boundary.position.x,
                    y: boundary.position.y + speed
                }
                }
            })
            ) {
            moving = false
            break
            }
        }
    
        if (moving)
            movables.forEach((movable) => {
            movable.position.y += speed
            })
        }    
    else if (keys.a.pressed && lastKey === 'a') {
        player.moving = true
        player.image = playerLeftImage
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: {
                ...boundary,
                position: {
                    x: boundary.position.x + speed,
                    y: boundary.position.y
                }
                }
            })
            ) {
            moving = false
            break
            }
        }
    
        if (moving)
            movables.forEach((movable) => {
            movable.position.x += speed
            })
        } 
        else if (keys.s.pressed && lastKey === 's') {
            player.moving = true
            player.image = playerDownImage
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: {
                ...boundary,
                position: {
                    x: boundary.position.x,
                    y: boundary.position.y - speed
                }
                }
            })
            ) {
            moving = false
            break
            }
        }
    
        if (moving)
            movables.forEach((movable) => {
            movable.position.y -= speed
            })
        } 
    else if (keys.d.pressed && lastKey === 'd') {
        player.moving = true
        player.image = playerRightImage
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
            rectangularCollision({
                rectangle1: player,
                rectangle2: {
                ...boundary,
                position: {
                    x: boundary.position.x - speed,
                    y: boundary.position.y
                }
                }
            })
            ) {
            moving = false
            break
            }
        }
    
        if (moving)
            movables.forEach((movable) => {
            movable.position.x -= speed
            })
        }
}


// document.querySelectorAll('button').forEach((button) =>{
//     button.addEventListener('touchstart',(e) =>{
//         switch(e.currentTarget.innerHTML){
//             case("UP"):
//                 keys.w.pressed = true;
//                 break
//             case("LEFT"):
//                 keys.a.pressed = true;
//                 break
//             case("DOWN"):
//                 keys.s.pressed = true;
//                 break
//             case("RIGHT"):
//                 keys.d.pressed = true;
//                 break
//         }
//     })
// })
// document.querySelectorAll('button').forEach((button) =>{
//     button.addEventListener('touchmove',(e) =>{
//         switch(e.currentTarget.innerHTML){
//             case("UP"):
//                 keys.w.pressed = true;
//                 break
//             case("LEFT"):
//                 keys.a.pressed = true;
//                 break
//             case("DOWN"):
//                 keys.s.pressed = true;
//                 break
//             case("RIGHT"):
//                 keys.d.pressed = true;
//                 break
//         }
//     })
// })


// document.querySelectorAll('button').forEach((button) =>{
//     button.addEventListener('touchend',(e) =>{
//         switch(e.currentTarget.innerHTML){
//             case("UP"):
//                 keys.w.pressed = false;
//                 lastKey = "w";
//                 break
//             case("LEFT"):
//                 keys.a.pressed = false;
//                 lastKey  = "a";
//                 break
//             case("DOWN"):
//                 keys.s.pressed = false;
//                 lastKey = "s";
//                 break
//             case("RIGHT"):
//                 keys.d.pressed = false;
//                 lastKey = "d";
//                 break
//         }
//     })
// })

document.querySelectorAll('button').forEach((button) =>{
    button.addEventListener('mousedown',(e) =>{
        switch(e.currentTarget.innerHTML){
            case("UP"):
                keys.w.pressed = true;
                lastKey = "w";
                break
            case("LEFT"):
                keys.a.pressed = true;
                lastKey  = "a";
                break
            case("DOWN"):
                keys.s.pressed = true;
                lastKey = "s";
                break
            case("RIGHT"):
                keys.d.pressed = true;
                lastKey = "d";
                break
            case("x"):
                keys.x.pressed = true;
                break
        }
    })
})


document.querySelectorAll('button').forEach((button) =>{
    button.addEventListener('mouseup',(e) =>{
        switch(e.currentTarget.innerHTML){
            case("UP"):
                keys.w.pressed = false;
                break
            case("LEFT"):
                keys.a.pressed = false;
                break
            case("DOWN"):
                keys.s.pressed = false;
                break
            case("RIGHT"):
                keys.d.pressed = false;
                break
            case("x"):
                keys.x.pressed = false;
                break
        }
    })
})

window.addEventListener('keydown',(e)=>{
    switch(e.key){
        case("w"):
            keys.w.pressed = true;
            lastKey = "w";
            
            break
        case("a"):
            keys.a.pressed = true;
            lastKey  = "a";
            break
        case("s"):
            keys.s.pressed = true;
            lastKey = "s";
            break
        case("d"):
            keys.d.pressed = true;
            lastKey = "d";
            break
        case("x"):
            keys.x.pressed = true;
            break
    }
    
})

window.addEventListener('keyup',(e)=>{
    switch(e.key){
        case("w"):
            keys.w.pressed = false;
            break
        case("a"):
            keys.a.pressed = false;
            break
        case("s"):
            keys.s.pressed = false;
            break
        case("d"):
            keys.d.pressed = false;
            break
        case("x"):
            keys.x.pressed = false;
            break
    }
})