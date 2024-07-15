import saveUser from "../../Models/userIdModel/userIdModel.js"
import { Helper } from "../../Helpers/index.js";
import { Model } from "../../Models/index.js";

export const  signup= async(req,res)=>{
    try{
        const {username,fullname,password}=req.body
        const createUser= await saveUser(username,fullname,password)
        if(createUser){
            res.status(400).send("User Already exists")
        }
        else{
        res.status(200).send("user created successfully")
        }
    }catch(err){
        res.status(500).json({Message:err.Message})
    }
}


export const addComplaint = async (req,res) =>{
   const {
        Dak_ID,
        Date_Received, 
        Sender_Information, 
        Sender_Number, 
        Complaint_Details,
        Status,
        userName 
    } = req.body;

    try{
        const CreateComplaint= await Model.saveComplaint(
        Dak_ID,
        Date_Received, 
        Sender_Information, 
        Sender_Number, 
        Complaint_Details,
        Status,
        userName 
    )
        if(!CreateComplaint){
            res.status(400).send("complaint id already exist")
        }
        else{
         res.status(200).send("complaint added successfully")
        }
    }catch(err){
        console.log(err);
        res.status(500).json({Message:err.Message})
    }

}

export const checkProgress = async (req,res)=>{
    const {Dak_ID} = req.body;
    try{
        
        const check = await Helper.checkProgress(Dak_ID);
        if(!check){
            res.status(400).send("Dak_id not found ")
        }else{
        res.status(200).send(check);
        }
    }catch(err){
        res.status(500).json({Message:err.Message})
    }

}