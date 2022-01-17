import Phone from "../../../models/UserInfo"
import dbConnect from "../../services/db"

dbConnect()

export default async function handler(req, res) {
    const {method} = req
    const {UserID} = req.query

    switch(method) {
        case 'PUT':
            try{
                const {name, email, firstNumber, secondNumber} = req.body

                if(!name && !firstNumber) throw 'invalid data'

                await Phone.updateOne({_id: UserID}, {
                    name: name, 
                    email: email, 
                    phoneFirst: firstNumber,
                    phoneSecond: secondNumber
                })
                res.status(202).json({success: true})
            }catch(e){
                console.log(e)
                res.status(500).json({success: false, e})
            }

        break;

        case 'DELETE':
            try {          
                await Phone.deleteOne({_id: UserID})

                res.status(201).json(UserID + "")
            } catch (e) {
                console.log(e)
                res.status(500).json({success: false, e})
            }
    }
}