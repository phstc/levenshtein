describe "Array", ->
  describe "#minimum", ->
    it "returns the minimum value", ->
     expect((new Array(1, 2, 3)).minimum()).toEqual 1
     expect((new Array(5, 4, 6)).minimum()).toEqual 4
     expect((new Array(8, 9, 7)).minimum()).toEqual 7

describe "Levenshtein", ->
  describe "#levenshteinDistance", ->
    it "performs a deletion", ->
     expect("a".levenshteinDistance("aa")).toEqual 1
     expect("pabloo".levenshteinDistance("pablo")).toEqual 1

    it "peforms an insertion", ->
     expect("a".levenshteinDistance("ab")).toEqual 1
     expect("ablo".levenshteinDistance("pablo")).toEqual 1

    it "performs a substituition", ->
     expect("a".levenshteinDistance("b")).toEqual 1
     expect("fablo".levenshteinDistance("pablo")).toEqual 1

