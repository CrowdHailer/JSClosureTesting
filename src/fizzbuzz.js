function fizzbuzzGenerator () {
  function isDivisibleByThree (number) {
    return number % 3 === 0;
  }
  function isDivisibleByFive (number) {
    return number % 5 === 0;
  }
  function isDivisibleByFifteen (number) {
    return number % 15 === 0;
  }

  function fizzbuzz (n) {
    if (isDivisibleByFifteen(n)) {
      return "fizzbuzz";
    } else if (isDivisibleByThree(n)) {
      return "fizz";
    } else if (isDivisibleByFive(n)) {
      return "buzz";
    } else {
      return n ;
    };
  }
  /*For Tests*/
  if (env.JSClosureTest) {
    fizzbuzz._test = {
      isDivisibleByThree: isDivisibleByThree,
      isDivisibleByFive: isDivisibleByFive,
      isDivisibleByFifteen: isDivisibleByFifteen
    }
  };
  /*End Tests*/
  // for (name in arguments) {
  //     alert("this[" + name + "]=" + this[name]);
  // }
  // console.log(arguments);
  // alert(arguments);


  // reveal(fizzbuzz, [
  //   'isDivisibleByFifteen',
  //   'isDivisibleByFive',
  //   'isDivisibleByThree']
  // );



  return fizzbuzz;
 }