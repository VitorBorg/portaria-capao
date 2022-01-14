import Phone from "../../../models/regExternalInfo"
import dbConnect from "../../services/db"

dbConnect()

export default async function handler(req, res) {
    const {method} = req

    switch(method) {
        case 'GET':
            try{
                const phones = await Phone.find({})
                res.status(200).json({success: true, data: phones})
            }catch(e){
                console.log(e)
                res.status(500).json({success: false, e})
            }

        break;

        case 'POST':
            try {
                const {name, email, firstNumber,temperature, hourEnter} = req.body

                if(!name && !email) throw 'invalid data'

                const phone = await Phone.create({
                    name: name, 
                    email: email, 
                    phoneFirst: firstNumber,
                    temperature: temperature,
                    hourEnter: hourEnter
                    })

                res.status(201).json({success: true, data: phone})
            } catch (e) {
                console.log(e)
                res.status(500).json({success: false, e})
            }
    }
}