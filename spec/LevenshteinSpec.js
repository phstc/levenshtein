describe("Levenshtein", function() {

  /*
  beforeEach(function() {
  });
  */

  describe("minimum", function(){
    it("should return the minimum value", function(){
     expect(minimum(1, 2, 3)).toEqual(1);
     expect(minimum(5, 4, 6)).toEqual(4);
     expect(minimum(8, 9, 7)).toEqual(7);
    });
  });
});
