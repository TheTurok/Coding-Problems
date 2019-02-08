function perm(input){
  if(input.length <= 1)
    return [input];

  let num = input.pop();
  const rest = perm(input);
  let permutations = [];

  let curr;
  for(let j = 0; j < rest.length; j++){
    curr = rest[j];
    for(let i = 0; i < curr.length + 1; i++){
      permutations.push(curr.slice(0, i) + num + curr.slice(i, rest.length));
    }
  }

  return permutations;
}

console.log(perm([1,2,3]));
