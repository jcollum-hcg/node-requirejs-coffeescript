# Main server module with dependency for Express
define ['express'], (express) ->

	app = express()

	app.use (req, res, next) ->
		res.write "Hello there!"
		res.end()

	return app # app is exported from module