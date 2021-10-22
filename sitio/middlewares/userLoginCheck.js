//para saber siel usuario esta logeado y entrar a rutas (pág) como admin

module.exports = (req,res,next) => {
if(req.session.userLogin){
    next()
}else{
        res.redirect('/')
    }}