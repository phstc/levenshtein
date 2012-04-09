fs = require 'fs'
vm = require 'vm'

includeInThisContext = (path) ->
    # http://stackoverflow.com/a/9946809/464685
    code = fs.readFileSync path
    vm.runInThisContext code, path

includeInThisContext "#{__dirname}/Levenshtein.js"

startTime = new Date().getTime()

# 4.793 seconds

fs.readFile "#{__dirname}/../assets/word.list.txt", 'utf-8', (err, data) ->
  if err
    console.error "Could not open file: %s", err
    process.exit 1
  lines = data.split /\n/
  for line, i in lines 
    console.log line if "causes".levenshteinDistance(line) == 1
    console.log (new Date().getTime() - startTime) / 1000 if i == (lines.length - 1)