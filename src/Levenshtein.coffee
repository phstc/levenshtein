Array.prototype.minimum = () ->
  # Hmmm... I know, I know... I can do it more dynamic.
  Math.min(Math.min(this[0], this[1]), this[2])


String.prototype.levenshteinDistance = (wordToCompare) ->
  distance = new Array

  for i in [0..this.length]
    distance[i] = new Array
    distance[i][0] = i

  for j in [0..wordToCompare.length]
    distance[0][j] = j

  for i in [1..this.length]
    for j in [1..wordToCompare.length]
      deletion         = distance[i - 1][j] + 1
      insertion        = distance[i][j - 1] + 1
      substitutionCost = if (this.charAt(i - 1) == wordToCompare.charAt(j - 1)) then 0 else 1
      substitution     = distance[i - 1][j - 1] + substitutionCost
      distance[i][j]   = (new Array(deletion, insertion, substitution)).minimum()

  distance[this.length][wordToCompare.length]

