import Client from "../../models/Client"
import dbConnect from "../services/db"

dbConnect()

export default async function handler(req, res) {
    const {method} = req

    switch(method) {
        case 'GET':
            try{
                const clients = await Client.find({})
                res.status(200).json({success: true, data: clients})
            }catch(e){
                console.log(e)
                res.status(500).json({success: false, e})
            }

        break;

        case 'POST':
            try {
                const {name, temperature, hourEnterFinal, hourLeftFinal} = req.body

                if(!name && !temperature) throw 'invalid data'

                const client = await Client.create({
                    name: name, 
                    temperature: temperature, 
                    hourEnterFinal: hourEnterFinal,
                    hourLeftFinal: hourLeftFinal
                    })

                res.status(201).json({success: true, data: client})
                console.log("client name " + client)
            } catch (e) {
                console.log(e)
                res.status(500).json({success: false, e})
            }
    }
}