import React, {useEffect, useState} from "react";
import api from '../pages/services/api'

function CadastroExternalLeft({clients,setClientsMain, onClose, theId, setRefresh}){
    
  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [hourEnter, setHourEnter] = useState('07:00')
  const [hourEnterFlag, setHourEnterFlag] = useState(false)
  const [hourLeft, setHourLeft] = useState('00:00')
  const [hourLeftFlag, setHourLeftFlag] = useState(false)

  const [firstNumber, setfirstNumber] = useState('')
  const [temperature, setTemperature] = useState('')

  
  const handleSubmitCreateClient = async (e) => {
      e.preventDefault()

        //if(!theId.name && !theId.email) return
    
      try {
        let iId = theId._id;

        setName(theId.name)
        setEmail(theId.email)
        setTemperature(theId.temperature)
        setfirstNumber(theId.firstNumber)
        setHourEnter(theId.hourEnter)

        await api.put(`/regExternal/${iId}`, {name, email, firstNumber, temperature, hourEnter, hourLeft})

        setClientsMain(clients.map(client => client._id === iId ? 
          {name, email, firstNumber, temperature, hourEnter, hourLeft, _id: iId} : client))
    
        setName('')
        setEmail('')
        setTemperature('')
        setfirstNumber('')
        setHourEnter('07:00')
        setHourLeft('13:00')
        setHourEnterFlag(false)
        setHourLeftFlag(false)

        onClose()
        setRefresh(true)
    
      } catch (e) {
        console.log(e)
      }
    
  }

  useEffect(() => {
    if(theId){
      setName(theId.name)
      setEmail(theId.email)
      setfirstNumber(theId.phoneFirst)
      setTemperature(theId.temperature)
      setHourEnter(theId.hourEnter)
      setHourLeft(theId.hourLeft)

      console.log("ATT: " + theId.phoneFirst + "; AFTER: " + theId.name)
    }
    }, [theId])

  const handleChangeHourLeft = (text) => {
    setHourLeftFlag(true)

    console.log((text.getHours() + "").length + ", " + (text.getHours() + ""))
    let hour = ((text.getHours() + "").length <= 1? "0" + ((text.getHours() + 3 ) + "") : text.getHours() + 3)
    let minute = ((text.getMinutes() + "").length <= 1? "0" + (text.getMinutes() + "") : text.getMinutes())
    
    setHourLeft((hour.length == 3? hour.substring(1, 3): hour) + ":" + minute)
  }

  return(
        <div>
            <div className="flex justify-center h-screen items-center antialiased">
      <div className="flex flex-col mx-auto rounded-lg border border-gray-300 shadow-xl"
      >
        <form
        onSubmit={handleSubmitCreateClient}>
        <div
          className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p className="font-semibold text-gray-800">Registro de saída</p>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">

          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
              
            {theId && theId.hourLeft == "00:00" &&  (
            
            <div className="">
              <p className="mb-2 font-semibold text-gray-700">Horário de Saída</p>
              <input type="time" 
              id="hourLeft" 
              name="hourLeft"
              value={
                (!hourLeftFlag && theId.hourLeft? hourLeft: console.log("DOING NOTHING"))
                }
              className="p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                min="06:00" max="22:00" required
                onChange={e => handleChangeHourLeft(e.target.valueAsDate)}
                />
            </div>
            )}
          </div>

          <hr />
         
        </div>
        <div
          className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >
          <button className="px-4 py-2 text-white font-semibold bg-red-400 rounded
          "
          onClick={onClose}>
            Cancelar
            
          </button>

          <button className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
          type='submit'
          >{theId? 'Atualizar' : 'Cadastrar'}
          </button>
        </div>
        </form>
      </div>
    </div>
        </div>
    );
}

export default CadastroExternalLeft;