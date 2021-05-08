var canvas = new fabric.Canvas("mycanvas")
block_image_width = 30;
block_image_height = 30;
player_x = 10;
player_y =10;
var player_object= "";
var block_image_object=""
function player_update(){
 fabric.Image.fromURL("player.png",function(img){
     player_object = img

     player_object.scaleToWidth(150)
     player_object.scaleToHeight(140)
     player_object.set({
         top:player_y,
         left:player_x
     })
     canvas.add(player_object)
 })   
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(img){
        block_image_object = img
   
       block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_image_object)
    })   
   }
   Window.addEventListener("keydown",my_keydown)
       function my_keydown(e)
   {
       keyPressed = e.keycode
       console.log(keypressed)
       if(e.shiftkey == true && keyPressed == "80"){
           console.log("p and shift pressed together")
           block_image_width = block_image_width + 10
           block_image_height = block_image_height + 10
           document.getElementById("current_width").innerHTML = block_image_width
           document.getElementById("current_height").innerHTML = block_image_height
       }
       if(e.shiftkey == true && keyPressed == "77"){
        console.log("p and shift pressed together")
        block_image_width = block_image_width - 10
        block_image_height = block_image_height - 10
        document.getElementById("current_width").innerHTML = block_image_width
        document.getElementById("current_height").innerHTML = block_image_height
    }
    if(keyPressed == "38"){
        up()
        console.log("up")
    }
    if(keyPressed == "40"){
        down()
        console.log("down")
    }
    if(keyPressed == "37"){
        left()
        console.log("left")
    }
    if(keyPressed == "39"){
        right()
        console.log("right")
    }
    if(keyPressed == "87"){
        new_image('hulk_face.png')
        console.log("w")
    }
    if(keyPressed == "71"){
        new_image("hulk_left_hand.png")
        console.log("g")
    }
    if(keyPressed == "76"){
        new_image("hulk_legs.png")
        console.log("l")
    }
    if(keyPressed == "84"){
        new_image("ironman_right_hand.png")
        console.log("t")
    }
    if(keyPressed == "82"){
        new_image("ironman_body.png")
        console.log("r")
    }
    