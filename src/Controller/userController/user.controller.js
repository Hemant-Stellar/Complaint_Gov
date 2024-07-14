import express from 'express'
import saveUser from "../../Models/userIdModel/userIdModel.js"
const app=express();
const signup=async(req,res)=>{
    try{
        const {username,fullname,password}=req.body
        const createUser=saveUser(username,fullname,password)
        if(!createUser){
            res.status(400).send("User Already exists")
        }
        res.status(200).send("user created successfully")
    }catch(err){
        res.status(500).json({Message:err.Message})
    }
}