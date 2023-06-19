import express from 'express'
import AuthControl from '../controllers/authControl.js'

const auth = express.Router()

auth.post("/login",AuthControl.login)


export default auth