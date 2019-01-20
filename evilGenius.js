// //
//
// Description
//
// An evil genius needs to check on his minions when they are supposed to be working. The minions are assigned a start time and end time when they need to be working. The evil genius is lazy and wants to minimize the number of visits to the lab to see if all the minions are working.
//
// In other words: You are given a set of closed intervals. Design an efficient algorithm for finding a minimum sized set of numbers that cover all the intervals.
// //
// //
// Examples
// Input: [0,3], [2,6], [3,4], [6,9]
// Answer: 2
// The smallest set that covers all intervals is (3,6). Another set that covers all intervals is (0,2,3,6) but this is not smaller than (3,6)
//
// Input: [1,2], [2,3], [3,4], [2,3], [3,4], [4,5]
// Answer: 2
// The smallest set that covers all intervals is (2,4).
//
// //
function evilGenius(intervals){
    let sorted = intervals.sort(function(a,b) {return a[1] - b[1]});
    let endPoint = Number.NEGATIVE_INFINITY;
    let check = 0;
    for(let i of intervals){
        if(endPoint < i[0]){
            endPoint = i[1];
            check++;
        }
    }
    return check;
}

console.log(evilGenius([[0,3],[2,6],[3,4],[6,9],[10,11], [-2,-1]]))
