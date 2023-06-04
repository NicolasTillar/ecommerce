import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import flash from 'connect-flash'
import session from 'express-session'
import MethodOverride from 'method-override'
import passport from 'passport'


const app = express()

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('pages/index')
})

app.listen(3020,()=>{
    console.log('el servidor se está ejecutando')
})