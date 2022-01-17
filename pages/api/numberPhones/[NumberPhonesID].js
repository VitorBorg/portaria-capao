import Phone from "../../../models/PhoneNumber"
import dbConnect from "../../services/db"

dbConnect()

export default async function handler(req, res) {
    const {method} = req
    const {NumberPhonesID} = req.query

    switch(method) {
        case 'PUT':
            try{
                const {name, email, firstNumber, secondNumber} = req.body

                if(!name && !firstNumber) throw 'invalid data'

                await Phone.updateOne({_id: NumberPhonesID}, {
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
                await Phone.deleteOne({_id: NumberPhonesID})

                res.status(201).json({success: true})
            } catch (e) {
                console.log(e)
                res.status(500).json({success: false, e})
            }
    }
}