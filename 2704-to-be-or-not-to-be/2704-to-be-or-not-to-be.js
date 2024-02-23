/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  return {
      toBe: (val5) => {
          if (val !== val5) throw new Error ("Not Equal");
          else return true;

      },
         notToBe: (val5) => {
          if (val === val5) throw new Error ("Equal");
          else return true;
      }
      
  }


    // if (toBe(val) === "true") {
    //     console.log("Not Equal")
    // } else { 
    //     console.log("Equal")

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */