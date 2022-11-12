//creating class pencil
 class pencil
 {
  constructor(name,price,color)//properties
  {
    this.name=name;
    this.price=price;
    this.color=color;
  }
  showPrice()//method
  {
    console.log("price of pen is :3$");
  }
 }
 const penc1=new pencil("marker","3$","blue");
 console.log(penc1);
 penc1.showPrice();//price of pen is 3$


 class pen3
 {
  constructor(name,price,color)//properties
  {
    this.name=name;
    this.price=price;
    this.color=color;
  this.showPrice=function()//method acts as a instance member
  {
    console.log("price of pen is : 3$");
  };
 }
}
const p3=new pen3("marker","3$","blue");
 console.log(p3);
 p3.showPrice();


//  //static method
class Square
{
static findPerimeter(side)
{
 this.side=side;
 return 4*this.side;
}
}
console.log(Square.findPerimeter(3));


//using symbol() for properties
class circle
{
 constructor(radius)//properties
 {
  let _radius=Symbol();
   this[_radius]=radius;
 }
 draw()//method
 {
   console.log("drawing");
 }
}
const c=new circle(2);
console.log(c._radius);//undefined
console.log(Object.getOwnPropertyNames);


//making use of symbol for the method
let _radius=Symbol();
let _draw=Symbol();
class circle1
{
 constructor(r)//properties
 {
 this[_radius]=r;
 }
 [_draw]()
 {//method
 
   console.log("drawing",this);
 };
}

const c1=new circle1(2);
console.log(c1._radius);//undefined
console.log(c1._draw());//undefined



//using weakmaps to make properties as private
class pen
{
 constructor(color)//properties
 {
  const _color=new WeakMap();
   _color.set(this,color);
 }
 showColor()//method
 {
   console.log("showing color",this);
 }
}
const p=new pen("blue");
console.log(p._color);//undefined


//accessing color property inside method using weakmap
let _color=new WeakMap();
class pen1
{
 constructor(color)//properties
 {
  
   _color.set(this,color);
 }
 showColor()//method
 {
   console.log(_color.get(this));
 }
}
const p1=new pen1("blue");
console.log(p1._color);//undefined

//using weakmaps to make methods as private
let _color1=new WeakMap();
let _showColor=new WeakMap();
class pen2
{
 constructor(color1)//properties
 {
  
   _color1.set(this,color1);
 
 _showColor.set(this,function()
 //method
 {
   console.log("displaying color");
 });
}
}
const p2=new pen2("blue");
console.log(p2);


//using get and set methods
const student = {

 // data property
 firstName: 'Monica',
 
 // accessor property(getter)
 get getName() {
     return this.firstName;
 }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica

// trying to access as a method
//console.log(student.getName()); // error

const student1 = {
 firstName: 'Monica',
 
 //accessor property(setter)
 set changeName(newName) {
     this.firstName = newName;
 }
};

console.log(student1.firstName); // Monica

// change(set) object property using a setter
student1.changeName = 'Sarah';

console.log(student1.firstName); // Sarah


//inheritance using classes
class Stationery
{
constructor(color)
{
 this.color=color;
}
showPrice()
{
 console.log("displaying price");
}
} 

class marker extends Stationery
{
 constructor(color)//properties
 {
  super(color);
 }
 showColor()//method
 {
   console.log("displaying color");
 }
}

const m=new marker("blue");
m.showPrice();//displaying color




