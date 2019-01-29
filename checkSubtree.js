class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function bst(t1,t2){
  if(!t2) //when hitting it's leaf nodes
    return true;

  if(!t1 && t2)
    return false;

  if(t1.data != t2.data)
    return false;

  return bst(t1.left, t2.left) && bst(t1.right, t2.right);
}

function checkSubtree(t1, t2){
  if(t1 === null)
    return false;

  let check = false;
  if(t1.data === t2.data) //check if subtree matches head
    check = bst(t1,t2);

  if(check)
    return true;

  return checkSubtree(t1.left, t2) || checkSubtree(t1.right, t2);
}

function tree(){
  let head = new Node(10);
  head.right = new Node(1);
  head.left = new Node(2);
  head.right.right = new Node(4);
  head.left.left = new Node(7);
  head.left.right = new Node(2);
  head.left.right.left = new Node(1);
  head.left.right.right = new Node(2);
  head.left.right.right.left = new Node(1);
  head.left.right.right.right = new Node(3);

  let h2 = new Node(2);
  h2.left = new Node(1);
  h2.right = new Node(3);
  //h2.right.right = new Node(4);

  console.log( head);
  console.log(h2);
  console.log(checkSubtree(head, h2));
}

tree();
