const createError = require("http-errors")

//404 error handler
function notFoundHandler(req, res, next){
    next(createError(404, "Your request content was not found"))
};

//defualt error handler
function errorHandler(err, req, res, next){

    res.locals.error = process.env.NODE_ENV ==="development" ? err: {message: err.message};

    res.status(err.status || 500)

    if(!res.locals.html){
        res.render("error", {title : "Error page"});
    }
    else{
        res.json(res.locals.error)
    }
};

module.exports = {
    notFoundHandler,
    errorHandler,
}