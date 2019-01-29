class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


function minimalTree(array){
  if(array.length === 0)
    return null;
  if(array.length === 1)
    return new Node(array[0]);

  let mid = Math.floor(array.length/2);
console.log(array);
  let head = new Node(array[mid]);
  head.left = minimalTree(array.slice(0 , mid));
  head.right = minimalTree(array.slice(mid+1, array.length));

  return head;

}

let array = [1,5,12,17,18,20,30,32];
console.log(minimalTree(array));
