// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.


function remove(arr, item){
    if(arr.indexOf(item) < 0){
        return arr
    }
    else{
        while(arr.indexOf(item) >= 0){
          let idx = arr.indexOf(item);
          arr.splice(idx, 1);
        }
        return arr
    }

}

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

function remove(arr, item){
    if(arr.indexOf(item) < 0){
        return arr
    }
    else{
        let arr2 = arr.slice()
        while(arr2.indexOf(item) >= 0){
          let idx = arr2.indexOf(item);
          arr2.splice(idx, 1);
        }
        return arr2
    }
}

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(arr){
    let i = 0;
    let t = 0;
    while(i < (arr.length)){
        t = (t + arr[i]);
        i++;
    }
    return t
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(arr1){
    arr1.push("egg")
      if(arr1 == "egg"){
          console.log("please put an array, bub")
      }
      else{
          arr1.pop();
          let i1 = 0;
          let t1 = 0;
          while(i1 < (arr1.length)){
              t1 = (t1 + arr1[i1]);
              i1++;
          }
  
          let avg = (t1/(arr1.length))
          return avg
      }
  }

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

function minimum(arr2){
    arr2.push("test");
    if(arr2 == "test"){
      console.log("please put an array, bub");
    }
    else{
      arr2.pop();
      let m = Infinity;
      for (let m1 of arr2){
          if(m1 < m){
              m = m1;
          }
      }
      return m
    }
  }


// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

function selectionSort(list){
    if(list.length <= 1){
        console.log("yo, no.");
        return list;
    }
    else{
        let ref = list.slice(0);
        console.log(ref);
        let result = [];
        let i = ref.length;
        while(i > 0){
            console.log(ref.length);
            let tempMin = minimum(ref);
            console.log(tempMin);
            ref.splice(ref.indexOf(tempMin), 1);
            result.push(tempMin);
            i = ref.length;
        }
        if(result == list){
            return list;
        }
        else{
        return result
        }
    }
}



// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
