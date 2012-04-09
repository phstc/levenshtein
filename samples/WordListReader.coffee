fs = require 'fs'
vm = require 'vm'

includeInThisContext = (path) ->
    # http://stackoverflow.com/a/9946809/464685
    code = fs.readFileSync path
    vm.runInThisContext code, path

includeInThisContext "#{__dirname}/../src/Levenshtein.js"

startTime = new Date().getTime()

# 4.793 seconds

fs.readFile "#{__dirname}/word.list.txt", 'utf-8', (err, data) ->
  if err
    console.error "Could not open file: %s", err
    process.exit 1
  friends = 0
  data.split(/\n/).forEach (line, i, arr) ->
    if "causes".levenshteinDistance(line) == 1 
      console.log line 
      friends++
    if i == (arr.length - 1)
      console.log "friends: #{friends}"
      console.log "Time spent: #{(new Date().getTime() - startTime) / 1000}s"
