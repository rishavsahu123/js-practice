function Node(value, left=null, right=null) { 
  this.value = value;
  this.left = left;
  this.right = right; 
}
var temp = new Node(2)
temp.left = new Node(4)
temp.right = new Node(6)
temp.left.left = new Node(7)
temp.left.right = new Node(3)
temp.left.left.left = new Node(1)
temp.left.right.right = new Node(2)

function addData(node){
  var add=0;
  if(!node){
    return 0
  }
  if(node.left){
    add = add + addData(node.left)
  }
  if(node.right){
    add = add + addData(node.right)
  }
  return node.value + add
}
console.log(addData(temp))
