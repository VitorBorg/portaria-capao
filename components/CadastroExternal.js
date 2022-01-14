import { set } from 'mongoose'
import React, {useEffect, useState} from "react";
import api from '../pages/services/api'

function CadastroExternal({clients,setClientsMain, onClose, theId}){
    
  const [name, setName] = useState("")
  //const [id, setId] = useState(null)

  const [email, setEmail] = useState("")
  const [hourEnter, setHourEnter] = useState('')
  const [hourLeft, setHourLeft] = useState('')
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
      setErrors({email: 'Indique sua temperatura!'})
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

        await api.put(`/regExternal/${iId}`, {name, email, firstNumber, secondNumber})
        setClientsMain(clients.map(client => client._id === iId ? {name, email, firstNumber, secondNumber, _id: iId} : client))
    
        setName('')
        setEmail('')
        setsecondNumber('')
        setfirstNumber('')
    
      } catch (e) {
        console.log(e)
      }
    } else{
      console.log("add")
      e.preventDefault()

      if(!isValidFormData()) return

      try {

        const hourEnterFinal = (hourEnter.getHours() + 3 + ":" + hourEnter.getMinutes())
        //const hourLeftFinal = (hourLeft.getHours() + 3 + ":" + hourLeft.getMinutes())

        console.log('data: ', name)
        console.log('data: ', email)
        console.log('data: ', firstNumber)
        console.log('data: ', temperature)
        console.log('data: ', hourEnterFinal)


        const {data} = await api.post('/regExternal', {
          name,
          email,
          firstNumber,
          temperature,
          hourEnterFinal
        })
        
      console.log('GO FOR IT')

      setClientsMain(clients.concat(data.data))

      setName('')
      setEmail('')
      setsecondNumber('')
      setfirstNumber('')

      {() => onClose}
        
    } catch (e) {
      console.log("error: " + e)
      }

    }
  }

  useEffect(() => {
    if(theId){
      setName(theId.name)
      setEmail(theId.email)
      setfirstNumber(theId.phoneSecond)

      setsecondNumber(theId.phoneFirst)
  
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
    setHourEnter(text)
  }

  const handleChangeHourLeft = (text) => {
    setHourLeft(text)
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
          <p className="font-semibold text-gray-800">Registro de telefones úteis</p>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">


        <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Nome da instituição</p>
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
              <p className="mb-2 font-semibold text-gray-700">Telefone Principal</p>
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
              <input type="tel" 
              id="telSecundary" 
              name="telSecundary"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                placeholder="Campo Obrigatório"
                value={secondNumber}
                onChange={e => handleChangeSecondNumber(e.target.value)}
                />
            </div>    
          </div>

          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Horário de entrada</p>
              <input type="time" 
              id="hourEnter" 
              name="hourEnter"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                min="06:00" max="22:00" required
                onChange={e => handleChangeHourEnter(e.target.valueAsDate)}
                />
            </div>
            
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Horário de Saída</p>
              <input type="time" 
              id="hourLeft" 
              name="hourLeft"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                min="06:00" max="22:00" required
                onChange={e => handleChangeHourLeft(e.target.valueAsDate)}
                />
            </div>
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