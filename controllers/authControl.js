class AuthControl{
    static login(req,res){

        const {username, password} = req.body

        if(username === process.env.USERNAME_SECRET && password === process.env.PASSWORD_SECRET){

            return res.status(200).json({
                status : "OK",
                message : "berhasil login"
            })
        }
        

        return res.status(401).json({
            status : "Unauthorized",
            message : "silahkan check username dan password anda"
        })
    }
}

export default AuthControl