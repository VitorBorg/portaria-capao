import React, {useEffect, useState} from "react";
import api from '../pages/services/api'

function CadastroExternal({clients,setClientsMain, onClose, theId, setRefresh}){
    
  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [hourEnter, setHourEnter] = useState('07:00')
  const [hourEnterFlag, setHourEnterFlag] = useState(false)
  const [hourLeft, setHourLeft] = useState('00:00')
  const [hourLeftFlag, setHourLeftFlag] = useState(false)

  const [firstNumber, setfirstNumber] = useState('')
  const [temperature, setTemperature] = useState('')

  const [errors, setErrors] = useState({name: null, email: null, firstNumber: null, temperature: null})

  //console.log("before errors: " + errors)
  const isValidFormData = () => {

    if(name == "" ){
      setErrors({name: 'Selecione uma pessoa!'})
      return false
    }
    if(email == "") {
      setErrors({email: 'Indique o seu email!'})
      return false
    }
    if(temperature == "") {
      setErrors({temperature: 'Indique sua temperatura!'})
      return false
    }
    setErrors({})
    return true
  }

  
  const handleSubmitCreateClient = async (e) => {
    if(theId){
      e.preventDefault()

        //if(!theId.name && !theId.email) return
    
      try {
        let iId = theId._id;

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
    } else{
      e.preventDefault()

      if(!isValidFormData()) return

      try {

        /*
        console.log(
          "name: ", name,
          "email: ", email,
          "firstNumber: ", firstNumber,
          "temperature: ", temperature,
          "hourEnter: ", hourEnter,
          "hourLeft: ", hourLeft
        )
*/

        const {data} = await api.post('/regExternal', {name, email, firstNumber, temperature, hourEnter, hourLeft})

        setClientsMain(clients.concat(data.data))

        setName('')
        setEmail('')
        setTemperature('')
        setfirstNumber('')
        setHourEnter('07:00')
        setHourEnterFlag(false)
        setHourLeftFlag(false)

        onClose()
        setRefresh(true)
        
    } catch (e) {
      console.log("error: " + e)
      }

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


  const handleChangeEmail = (text) => {
    setEmail(text)
  }

  const handleChangefirstNumber = (text) => {
    setfirstNumber(text)
  }

  const handleChangeTemperature = (text) => {
    setTemperature(text)
  }

  const handleChangeName = (text) => {
    setName(text)
  }

  const handleChangeHourEnter = (text) => {
      setHourEnterFlag(true)

      var hour = ((text.getHours() + "").length == 1? "0" + ((text.getHours() + 3 ) + "") : text.getHours() + 3)
      var minute = ((text.getMinutes() + "").length <= 1? "0" + (text.getMinutes() + "") : text.getMinutes())

      setHourEnter((hour.length == 3? hour.substring(1, 3): hour) + ":" + minute)
      
  }

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
          <p className="font-semibold text-gray-800">Registro de entrada de visitantes</p>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">


        <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Nome</p>
              <input
                type="text"
                name="name"
                placeholder="Campo obrigatório"
                className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id="name"
                value={name}
                onChange={e => handleChangeName(e.target.value)}
              >
              </input>
            </div>
            
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Email</p>
              <input
                type="email"
                name="email"
                className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id="email"
                placeholder="Campo opcional"
                value={email}
                onChange={e => handleChangeEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Telefone</p>
              <input type="tel" 
              id="telPrincipal" 
              name="telPrincipal"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                min="06:00" max="22:00" required
                value={firstNumber}
                placeholder="Campo obrigatório"
                onChange={e => handleChangefirstNumber(e.target.value)}
                />
            </div>
            
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Temperatura</p>
              <input type="text" 
              id="telSecundary" 
              name="telSecundary"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                placeholder="Campo Obrigatório"
                value={temperature}
                onChange={e => handleChangeTemperature(e.target.value)}
                />
            </div>    
          </div>

          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Horário de entrada</p>
              <input type="time" 
              id="hourEnter" 
              name="hourEnter"
              value={
                (!hourEnterFlag && theId? hourEnter: console.log("DOING NOTHING"))
                }
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                min="06:00" max="22:00" required
                onChange={e => handleChangeHourEnter(e.target.valueAsDate)}
                />
            </div>
            

            {theId && (
            
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Horário de Saída</p>
              <input type="time" 
              id="hourLeft" 
              name="hourLeft"
              value={
                (!hourLeftFlag && theId.hourLeft? hourLeft: console.log("DOING NOTHING"))
                }
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
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

export default CadastroExternal;