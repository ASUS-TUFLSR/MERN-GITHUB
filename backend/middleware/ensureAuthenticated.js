export async function ensureAuthenticated(req, res, next) {
    if(req.isAuthnticates()){
        return next();
    }
    res.redirect(process.env.CLIENT_BASE_URL + "/login")
}
