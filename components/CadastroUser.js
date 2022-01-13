import { set } from 'mongoose'
import {useState} from 'react'
import api from '../pages/services/api'

/*seleciona categoria
funcionario

assessor

vereador

*/

function CadastroUser(){

  const [clients, setClients] = useState([])
    
  const [name, setName] = useState(0)
  const [id, setId] = useState(null)

  const [temperature, setTemperature] = useState(0)
  const [hourEnter, setHourEnter] = useState('')
  const [hourLeft, setHourLeft] = useState('')

  const [errors, setErrors] = useState({name: null, temperature: null, hourEnter: null, hourLeft: null})

  //console.log("before errors: " + errors)
  const isValidFormData = () => {

    if(name == 0 ){
      setErrors({name: 'Selecione uma pessoa!'})
      return false
    }
    if(temperature == 0) {
      setErrors({temperature: 'Indique sua temperatura!'})
      return false
    }
    setErrors({})
    return true
  }

  
  const handleSubmitCreateClient = async (e) => {
    e.preventDefault()

    if(!isValidFormData()) return

    try {

      const hourEnterFinal = (hourEnter.getHours() + 3 + ":" + hourEnter.getMinutes())
      const hourLeftFinal = (hourLeft.getHours() + 3 + ":" + hourLeft.getMinutes())

      console.log('data: ', name)
      console.log('data: ', temperature)
      console.log('data: ', hourEnterFinal)
      console.log('data: ', hourLeftFinal)


      const {data} = await api.post('/clients', {
        name,
        temperature,
        hourEnterFinal,
        hourLeftFinal
      })

    //SENDO TO DATABASE //setClients(clients.)
    console.log('GO FOR IT')

    setClients(clients.concat(data.data))

    setName('')
    setTemperature('')
    setHourLeft('')
    setHourEnter('')
      
    } catch (e) {
      console.log("error: " + e)
    }
    //console.log(name, temperature)
    //console.log(" Enter:",(hourEnter.getHours() + 3 + ":" + hourEnter.getMinutes()))
    //console.log(" Left:",(hourLeft.getHours() + 3 + ":" + hourLeft.getMinutes()))
  }

  const handleDeleteClient = (_id) => {
    //get the database pos by id
    console.log("HERE")
  }

  const handleSubmitUpdateClient = (e) => {
    e.preventDefault()

    if(!name && !temperature) return

    //SENDO TO DATABASE //setClients(clients.)
    console.log('GO FOR IT')

    //console.log(name, temperature)
    //console.log(" Enter:",(hourEnter.getHours() + 3 + ":" + hourEnter.getMinutes()))
    //console.log(" Left:",(hourLeft.getHours() + 3 + ":" + hourLeft.getMinutes()))
  }



  const handleChangeTemperature = (text) => {
    setTemperature(text)
  }

  const handleChangeHourEnter = (text) => {
    setHourEnter(text)
  }

  const handleChangeHourLeft = (text) => {
    setHourLeft(text)
  }

  const handleChangeName = (text) => {
    setName(text)
  }

  return(
        <div>
            <div className="flex justify-center h-screen items-center bg-gray-200 antialiased">
      <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl"
      >
        <form
        onSubmit={handleSubmitCreateClient}>
        <div
          className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p className="font-semibold text-gray-800">Registro de entrada</p>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">

        <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Nome</p>
              <select
                type="text"
                name="name"
                className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id="name"
                onChange={e => handleChangeName(e.target.value)}
              >
                <option value="Assessor">Assessor</option>
                <option value="Funcionario">Funcionário</option>
                <option value="Vereador">Vereador</option>
              </select>
            </div>

            
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Assessor de</p>
              <select
                type="text"
                name="name"
                className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id="name"
                onChange={e => handleChangeName(e.target.value)}
              >
                <option value="0">Selecione um vereador</option>
                <option value="1">Vitor</option>
                <option value="2">Vitor</option>
              </select>
            </div>
          </div>


        <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Nome</p>
              <select
                type="text"
                name="name"
                className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id="name"
                onChange={e => handleChangeName(e.target.value)}
              >
                <option value="0">{}</option>
                <option value="1">Vitor</option>
                <option value="2">Vitor</option>
              </select>
            </div>
            
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Email</p>
              <input
                type="email"
                name="email"
                className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id="email"
                onChange={e => handleChangeTemperature(e.target.valueAsNumber)}
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
                onChange={e => handleChangeHourEnter(e.target.valueAsDate)}
                />
            </div>
            
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Telefone Secundário</p>
              <input type="tel" 
              id="telSecundary" 
              name="telSecundary"
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
          onClick={() => handleDeleteClient()}>
            Cancelar
          </button>
          <button className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
          type='submit'
          >
            Salvar
          </button>
        </div>
        </form>
      </div>
    </div>
        </div>
    );
}

export default CadastroUser;