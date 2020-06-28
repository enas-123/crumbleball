class powerdisplay
{
	constructor(x,y,r)
	{
		this.x=x;
		this.y=y;
		this.r=r;
	}

	display(power)
	{
		push()
		translate(this.x,this.y);
		var angle=map(power,75,200,0,2*PI)
		noFill()
		stroke(255,0,255)
		strokeWeight(20);
		console.log(angle)
		arc(0, 0, this.r, this.r, 0, angle, OPEN);
		stroke(140,140,140)
		arc(0, 0, this.r, this.r, angle, 2*PI, OPEN);
		strokeWeight(2);
		stroke(0,0,0)
		textSize(24);
		textAlign(CENTER, CENTER);
		text(power, 0, 0);
		pop()


	}

}