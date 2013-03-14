express = require "express"
routes = require "./routes"

app = module.exports = express.createServer()

# Configuration
app.configure ->
  app.set "views", "#{__dirname}/views"
  app.set "view engine", "jade"
  app.use express.bodyParser()
  app.use express.methodOverride()
  app.use app.router
  app.use express.static("#{__dirname}/public")

app.configure "development", ->
  app.use express.errorHandler(dumpExceptions: true, showStack: true)

app.configure "production", ->
  app.use express.errorHandler()

# Routes
app.get "/", routes.index
app.get "/:name", routes.index
app.get "/api/levenshtein", routes.levenshtein
app.get "/api/levenshtein/:name", routes.levenshtein

app.listen 3000, ->
  console.log "Express server listening on port %d in %s mode", app.address().port, app.settings.env

