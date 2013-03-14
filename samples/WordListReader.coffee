fs = require "fs"
vm = require "vm"
require "../src/Levenshtein"

fs.readFile "#{__dirname}/word.list.txt", "utf-8", (err, wordList) ->
  if err
    console.error "Could not open file: %s", err
    process.exit 1

  findSimilarWords "causes", wordList

findSimilarWords = (word, wordList) ->
  startTime = new Date().getTime()
  similarDistance = 1
  similarCounter = 0
  wordList.split(/\n/).forEach (wordToCompare) ->
    if isSimilar(word, wordToCompare)
      console.log wordToCompare
      similarCounter++

  console.log "Similar words (distance == 1): #{similarCounter}"
  console.log "Time spent: #{(new Date().getTime() - startTime) / 1000} seconds"

isSimilar = (word, wordToCompare) ->
  word.levenshteinDistance(wordToCompare) == 1
