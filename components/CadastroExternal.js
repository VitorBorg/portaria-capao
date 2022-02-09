import React, {useEffect, useState} from "react";
import api from '../pages/services/api'

function CadastroExternal({clients,setClientsMain, onClose, theId, setRefresh}){
    
  const [name, setName] = useState("")

  const [firstNumber, setfirstNumber] = useState('')
  const [temperature, setTemperature] = useState('')

  const [errors, setErrors] = useState({name: null, temperature: null})

  //console.log("before errors: " + errors)
  const isValidFormData = () => {

    if(name == "" ){
      setErrors({name: 'Selecione uma pessoa!'})
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

        await api.put(`/regExternal/${iId}`, {name, firstNumber, temperature})

        setClientsMain(clients.map(client => client._id === iId ? 
          {name, firstNumber, temperature, _id: iId} : client))
    
        setName('')

        setTemperature('')
        setfirstNumber('')

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

        const {data} = await api.post('/regExternal', {name, firstNumber, temperature})

        setClientsMain(clients.concat(data.data))

        setName('')
        setTemperature('')
        setfirstNumber('')

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
      setfirstNumber(theId.phoneFirst)
      setTemperature(theId.temperature)

     // console.log("ATT: " + theId.phoneFirst + "; AFTER: " + theId.name)
    }
    }, [theId])

  const handleChangefirstNumber = (text) => {
    setfirstNumber(text)
  }

  const handleChangeTemperature = (text) => {
    setTemperature(text)
  }

  const handleChangeName = (text) => {
    setName(text)
  }

  useEffect(() => {
    const listener = event => {
      if ((event.code === "Enter" || event.code === "NumpadEnter")) {
        console.log("Enter key was pressed. Run your function.");
        handleSubmitCreateClient(event);
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [name,firstNumber,temperature,]);

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
            
          </div>

          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Telefone</p>
              <input type="tel" 
              id="telPrincipal" 
              name="telPrincipal"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                value={firstNumber}
                placeholder="Campo opcional"
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


          <hr />
         
        </div>
        <div
          className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >
          <button className="px-4 py-2 text-white font-semibold bgRED rounded
          "
          onClick={onClose}>
            Cancelar
            
          </button>

          <button className="px-4 py-2 text-white font-semibold bgBLUE rounded"
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