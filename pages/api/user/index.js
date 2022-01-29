import Phone from "../../../models/UserInfo"
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
                const {name, link, secondNumber} = req.body

                if(!name) throw 'invalid data'

                const users = await User.create({
                    name: name, 
                    link: link, 
                    phoneSecond: secondNumber
                    })

                res.status(201).json({success: true, data: users})
                console.log("phone name " + phone)
            } catch (e) {
                console.log(e)
                res.status(500).json({success: false, e})
            }
    }
}