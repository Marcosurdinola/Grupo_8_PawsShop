module.exports = (req,res,next) =>{
    if(req.cookies.forEver){
        req.session.userLogin = req.cookies.forEver
    }
    next()
}