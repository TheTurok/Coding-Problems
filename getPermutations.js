function getPermutations(string) {
  if(string.length <= 1)
    return new Set().add(string);

  let char = string.slice(-1); //one string //one char
  const currSet = getPermutations(string.slice(0,string.length-1));
  const permutations = new Set();

  var it = currSet[Symbol.iterator]();
  let str;
  while(str = it.next().value){
    for(let i = 0; i < str.length+1; i++){
      permutations.add(str.substring(0,i) + char + str.substring(i,str.length));
    }
  }
  return permutations;
}
