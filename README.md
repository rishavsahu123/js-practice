#### Some great stuff Links. =>
https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e


<h3>class</h3>
<p>A class is a type of function, but instead of using the keyword
<code >function</code> to initiate it, we use the keyword
<code >class</code>, and the properties is assigned inside a
<code >constructor()</code> method.</p>

<h3>static method</h3>
Static methods are defined on the class itself, and not on the prototype.
That means you cannot call a static method on the object (mycar), but on the class (Car):
eg:
<div><span style="color:black">
<span style="color:mediumblue">class</span> Car {<br>&nbsp; constructor(brand) {<br>&nbsp;&nbsp;&nbsp; <span class="jskeywordcolor" style="color:mediumblue">this</span>.<span class="jspropertycolor" style="color:black">carname</span> = <span class="jsnumbercolor" style="color:red">
</span>  brand;<br>&nbsp;<span class="jsnumbercolor" style="color:red">
</span>  }<br>&nbsp; <span class="jskeywordcolor" style="color:mediumblue">static</span> hello() {<br>&nbsp;&nbsp;&nbsp; <span class="jskeywordcolor" style="color:mediumblue">return</span> <span class="jsstringcolor" style="color:brown">"Hello!!"</span>;<br>&nbsp;<span class="jsnumbercolor" style="color:red">
</span>  }<br>}<br><br>mycar = <span class="jskeywordcolor" style="color:mediumblue">new</span> Car(<span class="jsstringcolor" style="color:brown">"Ford"</span>);<br><br><span class="commentcolor" style="color:green">//Call 'hello()' on 
  the class Car:<br></span>document.<span class="jspropertycolor" style="color:black">getElementById</span>(<span class="jsstringcolor" style="color:brown">"demo"</span>).<span class="jspropertycolor" style="color:black">innerHTML</span> <span class="jsnumbercolor" style="color:red">
</span>  = Car.<span class="jspropertycolor" style="color:black">hello</span>();<br><br><span class="commentcolor" style="color:green">//and NOT on the 'mycar' object:<br></span><span class="commentcolor" style="color:green">//document.getElementById("demo").innerHTML 
  = mycar.hello();<br></span><span class="commentcolor" style="color:green">//this would raise an error. </span></span></div>
  
  <h3>Inheritance</h3>
<h4>To create a class inheritance, use the extends keyword.
A class created with a class inheritance inherits all the methods from another class:</h4>
<code>The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.</code>

<h3>Getters and Setters</h3>
<h4>Classes also allows you to use getters and setters.
It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.
To add getters and setters in the class, use the get and set keywords.</h4>
class Car {<br>
  &nbsp;&nbsp;constructor(brand) {<br>
    &nbsp;&nbsp;&nbsp;this.carname = brand;<br>
  }<br>
  &nbsp;&nbsp;get cnam() {<br>
    &nbsp;&nbsp;&nbsp;return this.carname;<br>
  }<br>
 &nbsp;&nbsp;set cnam(x) {<br>
    &nbsp;&nbsp;&nbsp;this.carname = x;<br>
  }<br>
}<br>
mycar = new Car("Ford");<br>
document.getElementById("demo").innerHTML = mycar.cnam;<br>
<code>Note: even if the getter is a method, you do not use parentheses when you want to get the property value.</code>
<br>
<br>
<h3>hoisting</h3>
Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
That means that you must declare a class before you can use it:
