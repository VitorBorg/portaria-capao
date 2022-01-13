import Phone from "../../models/PhoneNumber"
import dbConnect from "../services/db"

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
                const {name, email, firstNumber, secondNumber} = req.body
                console.log("Hi")
                console.log("nome " + name)
                console.log("temperatura " + email)
                console.log("hourEnterFinal " + firstNumber)
                console.log("hourLeftFinal " + secondNumber)

                if(!name && !email) throw 'invalid data'

                const phone = await Phone.create({
                    name: name, 
                    email: email, 
                    phoneFirst: firstNumber,
                    phoneSecond: secondNumber
                    })

                res.status(201).json({success: true, data: phone})
                console.log("phone name " + phone)
            } catch (e) {
                console.log(e)
                res.status(500).json({success: false, e})
            }
    }
}