// Quick Question 1 //
// What does the following code return? new Set([1,1,2,2,3,4])

// It returns:
// {size: 4, 1, 2, 3, 4}




// Quick Question 2 //
// What does the following code return? [...new Set("referee")].join("")

// It returns:
// 'ref'




// Quick Question 3 //
// What does the Map m look like after running the following code?
/*
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
*/

// It looks like:
// {size: 2, (3) [1, 2, 3] => true, (3) [1, 2, 3] => false}





// hasDuplicate //
const hasDuplicate = (arr) => {
    let s = new Set()
    for(let n of arr) {
        if(s.has(n)) return true
        s.add(n)
    }
    return false
}
// Better version: const hasDuplicate = arr => new Set(arr).size !== arr.length




// vowelCount //
const vowelCount = (str) => {
    let vowelMap = new Map()
    for(let c of str.toLowerCase()) {
        if(/[aeiou]/.test(c)) {
            if(!(vowelMap.get(c))) {
                vowelMap.set(c, 1)
            } else {
                vowelMap.set(c, vowelMap.get(c) + 1)
            }
        }
    }
    return vowelMap
}


