require "../src/Levenshtein"

describe "Array", ->
  describe "#minimum", ->
    it "returns the minimum value", ->
     ((new Array(1, 2, 3)).minimum()).should.equal 1
     ((new Array(5, 4, 6)).minimum()).should.equal 4
     ((new Array(8, 9, 7)).minimum()).should.equal 7

describe "Levenshtein", ->
  describe "#levenshteinDistance", ->
    it "performs a deletion", ->
     ("a".levenshteinDistance("aa")).should.equal 1
     ("pabloo".levenshteinDistance("pablo")).should.equal 1

    it "peforms an insertion", ->
     ("a".levenshteinDistance("ab")).should.equal 1
     ("ablo".levenshteinDistance("pablo")).should.equal 1

    it "performs a substituition", ->
     ("a".levenshteinDistance("b")).should.equal 1
     ("fablo".levenshteinDistance("pablo")).should.equal 1

