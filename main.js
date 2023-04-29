
// Create canvas variable
canvas=new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.
ball_x=0
ball_y=0
holex=800
holey=400

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png",function(Img){
		golfimg=Img;
		golfimg.scaleToWidth(50);
		golfimg.scaleToHeight(50);
		golfimg.set({top:holey,left:holex});
		canvas.add(golfimg);
	});
	
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png",function(Img){
		ballimg=Img;
		ballimg.scaleToWidth(50);
		ballimg.scaleToHeight(50);
		ballimg.set({top:ball_y,left:ball_x});
		canvas.add(ballimg);
	});
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==holex)&&(ball_y==holey)){
		canvas.remove(ballimg);
		document.getElementById("hd3").innerHTML="You Hit the GOALLLL!!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(ball_y>=5){
			ball_y-=10;
			canvas.remove(ballimg);
			new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y<=450){
			ball_y+=10;
			canvas.remove(ballimg);
			new_image();}
	}

	function left()
	{
		if(ball_x=>5)
		{
			// Write a code to move ball left side.
			ball_x-=10;
			canvas.remove(ballimg);
			new_image();


		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			ball_x+=10;
			canvas.remove(ballimg);
			new_image();
		}
	}
	
}

