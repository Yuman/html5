class Difference{
  maximumDifference = 0;

  constructor(elems){
    this.elements = elems;    
  }
  
  computeDifference(){
      let maxElem = -Infinity;
      let minElem = Infinity;
      for(const elem of this.elements){
        maxElem = elem > maxElem ? elem : maxElem;
        minElem = elem < minElem ? elem : minElem;
      } 
      this.maximumDifference = maxElem - minElem;
  }
}

let diff = new Difference([-5, 5]);
diff.computeDifference();
console.log(diff.maximumDifference); // expect 10

let diff = new Difference([1, 2, 4, 6, 7, 8, 50, -50]);
diff.computeDifference();
console.log(diff.maximumDifference);  //expect 100