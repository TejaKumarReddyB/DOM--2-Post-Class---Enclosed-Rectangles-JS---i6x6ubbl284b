function updateStructure(rec1,rec2){
	//write your code
	// rec1
	let rec1Left = rec1.left;
	rec1Left = Number(rec1Left.substr(0, rec1Left.length-2));
	let rec1Width = rec1.width;
	rec1Width = Number(rec1Width.substr(0, rec1Width.length-2));
	let rec1Top = rec1.top;
	rec1Top = Number(rec1Top.substr(0, rec1Top.length-2));
	let rec1Height = rec1.height;
	rec1Height = Number(rec1Height.substr(0, rec1Height.length-2));
	// rec2
	let rec2Left = rec2.left;
	rec2Left = Number(rec2Left.substr(0, rec2Left.length-2));
	let rec2Width = rec2.width;
	rec2Width = Number(rec2Width.substr(0, rec2Width.length-2));
	let rec2Top = rec2.top;
	rec2Top = Number(rec2Top.substr(0, rec2Top.length-2));
	let rec2Height = rec2.height;
	rec2Height = Number(rec2Height.substr(0, rec2Height.length-2));
  function checkA() {
  	if(rec1Top <= rec2Top) {
  
      if(rec1Left<= rec2Left) {

        if(rec1Left+ rec1Width >= rec2Left+rec2Width) {

          if(rec1Top + rec1Height >= rec2Top + rec2Height) {
          console.log('here');
            rec2Top = rec2Top - rec1Top;
            rec2Left = rec2Left - rec1Left;
            let ans1 = {...rec1}; 
            ans1.children = [{
              top: rec2Left+"px",
              left: rec2Top + "px",
              width: rec2Width+ "px",
              height: rec2Height + "px",
			  			children: []
            }]
            return ans1;
          }
          return checkB()
        }
        return checkB()
      }
      return checkB()
    }
    return checkB()
  }
  function checkB() {
  	if(rec1Top >= rec2Top) {
      if(rec1Left>= rec2Left) {
        if(rec1Left+ rec1Width <= rec2Left+rec2Width) {
          if(rec1Top + rec1Height <= rec2Top + rec2Height) {
            rec1Top = rec1Top - rec2Top;
            rec1Left = rec1Left - rec2Left;
            let ans2 = {...rec2}; 

            ans2.children = [{
              top: rec1Left+"px",
              left: rec1Top + "px",
              width: rec1Width+ "px",
              height: rec1Height + "px",
			  children: []
            }];
            return ans2;
          }
					return {...rec1};
        }
        return {...rec1};
      }
      return {...rec1};
    }
    return {...rec1};
  }
 return checkA()
}

module.exports = updateStructure;
