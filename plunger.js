class plunger{
	constructor(x, y,w,h,angle)
	{
		
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;

		var options={
			isStatic:true			
			}
		plungerBottom=Bodies.rectangle(x, y, w, h , options);

		var options={
		 bodyA:body,			 
			pointB:anchor, 
			stiffness:0.08, 
			 length:30
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.elastic=Constraint.create(options)
		World.add(world,this.elastic)
	}

	display()
	{
		if(this.elastic.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		

			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
	fly()
	{
		//World.remove(world,this.rope)
		this.elastic.bodyA=null;
	}

}