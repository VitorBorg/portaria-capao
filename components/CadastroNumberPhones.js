import React, {useEffect, useState} from "react";
import api from '../pages/services/api'

function CadastroNumberPhones({clients,setClientsMain, onClose, theId, setRefresh}){
    
  const [name, setName] = useState("")

  const [email, setEmail] = useState("")

  const [firstNumber, setfirstNumber] = useState('')
  const [secondNumber, setsecondNumber] = useState('')

  const [errors, setErrors] = useState({name: null, email: null, firstNumber: null, secondNumber: null})

  const isValidFormData = () => {

    if(name == "" ){
      setErrors({name: 'Identifique uma pessoa!'})
      return false
    }
    if(firstNumber == "") {
      setErrors({email: 'Indique um contato principal!'})
      return false
    }
    setErrors({})
    return true
  }

  
  const handleSubmitCreateClient = async (e) => {
    if(theId){
      e.preventDefault()
    
      try {
        let iId = theId._id;

        await api.put(`/numberPhones/${iId}`, {name, email, firstNumber, secondNumber})
        setClientsMain(clients.map(client => client._id === iId ? {name, email, firstNumber, secondNumber, _id: iId} : client))
    
        setName('')
        setEmail('')
        setsecondNumber('')
        setfirstNumber('')
      
        onClose()
        setRefresh(true)
        console.log("SET")
    
      } catch (e) {
        console.log(e)
      }
    } else{
      e.preventDefault()

      if(!isValidFormData()) return

      try {


        const {data} = await api.post('/numberPhones', {
          name,
          email,
          firstNumber,
          secondNumber
        })

      setClientsMain(clients.concat(data.data))

      setName('')
      setEmail('')
      setsecondNumber('')
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
      setEmail(theId.email)
      setsecondNumber(theId.phoneSecond)
      setfirstNumber(theId.phoneFirst)
  
    }
    }, [theId])


  const handleChangeEmail = (text) => {
    setEmail(text)
  }

  const handleChangefirstNumber = (text) => {
    setfirstNumber(text)
  }

  const handleChangeSecondNumber = (text) => {
    setsecondNumber(text)
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
  }, [name,email,firstNumber,secondNumber,]);

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
                value={name} required
                onChange={e => handleChangeName(e.target.value)}
              >
              </input>
            </div>
            
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Contato secundário</p>
              <input
                type="text"
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
              <p className="mb-2 font-semibold text-gray-700">Endereço</p>
              <input type="text" 
              id="telSecundary" 
              name="telSecundary"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                min="06:00" max="22:00"
                placeholder="Campo opcional"
                value={secondNumber}
                onChange={e => handleChangeSecondNumber(e.target.value)}
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

export default CadastroNumberPhones;