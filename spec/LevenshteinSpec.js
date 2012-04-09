describe("Levenshtein", function() {
  describe("minimum", function(){
    it("should return the minimum value", function(){
     expect((new Array(1, 2, 3)).minimum()).toEqual(1);
     expect((new Array(5, 4, 6)).minimum()).toEqual(4);
     expect((new Array(8, 9, 7)).minimum()).toEqual(7);
    });
  });

  describe("Distance calculation", function(){
    it("should do a deletion", function(){
     expect("a".levenshteinDistance("aa")).toEqual(1)
    });
    it("should do an insertion", function(){
     expect("a".levenshteinDistance("ab")).toEqual(1)
     expect("ablo".levenshteinDistance("pablo")).toEqual(1)
    });
    it("should do a substituition", function(){
     expect("a".levenshteinDistance("b")).toEqual(1)
     expect("fablo".levenshteinDistance("pablo")).toEqual(1)
    });
  });
});
