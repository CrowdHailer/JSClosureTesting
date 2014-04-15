env = {
  JSClosureTest: true
};

describe("Fizzbuzz", function () {
  beforeEach(function(){
    fizzbuzz = fizzbuzzGenerator()
  });
  describe("Private Methods", function () {
    it("knows when a number is divisible by 3", function () {
      expect(fizzbuzz._test.isDivisibleByThree(3)).toBe(true);
    });

    it("knows when a number is not divisible by 3", function () {
      expect(fizzbuzz._test.isDivisibleByThree(1)).toBe(false);
    });

    it("knows when a number is divisible by 5", function () {
      expect(fizzbuzz._test.isDivisibleByFive(5)).toBe(true);
    });

    it("knows when a number is not divisible by 5", function () {
      expect(fizzbuzz._test.isDivisibleByFive(1)).toBe(false);
    });

    it("knows when a number is divisible by 15", function () {
      expect(fizzbuzz._test.isDivisibleByFifteen(15)).toBe(true);
    });

    it("knows when a number is not divisible by 15", function () {
      expect(fizzbuzz._test.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe("Public Behaviour", function () {
    it("should return 1 given 1", function () {
      expect(fizzbuzz(1)).toEqual(1);
    });

    it("should return fizz given 3", function () {
      expect(fizzbuzz(3)).toEqual("fizz");
    });

    it("should return buzz given 5", function () {
      expect(fizzbuzz(5)).toEqual("buzz");
    });

    it("should return fizzbuzz given 15", function () {
      expect(fizzbuzz(15)).toEqual("fizzbuzz");
    });
  });
});