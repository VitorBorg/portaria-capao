import React, {useEffect, useState} from "react";
import api from '../pages/services/api'

function CadastroModalUser({clients,setClientsMain, onClose, theId, setRefresh}){
    
  const [name, setName] = useState("")

  const [link, setLink] = useState("")
  const [secondNumber, setsecondNumber] = useState('')
  const [errors, setErrors] = useState({name: null, link: null, secondNumber: null})

  //console.log("before errors: " + errors)
  const isValidFormData = () => {

    if(name == "" ){
      setErrors({name: 'Selecione uma pessoa!'})
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
          
        if(secondNumber == "")
           secondNumber = "Vereador"

        await api.put(`/user/${iId}`, {name, link, secondNumber})
        setClientsMain(clients.map(client => client._id === iId ? {name, link, secondNumber, _id: iId} : client))
    
        setName('')
        setsecondNumber('')
        setLink('')

        onClose()
        setRefresh(true)
    
      } catch (e) {
        console.log(e)
      }
    } else{
      console.log("add")
      e.preventDefault()

      if(!isValidFormData()) return

      try {

      //  console.log('data: ', name)
       // console.log('data: ', email)
      //  console.log('data: ', firstNumber)
      //  console.log('data: ', secondNumber)

      if(secondNumber == "")
        secondNumber = "Vereador"


        const {data} = await api.post('/user', {
          name,
          link,
          secondNumber
        })

      setClientsMain(clients.concat(data.data))

      setName('')
      setsecondNumber('')
      setLink('')

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
      setsecondNumber(theId.phoneSecond)
      setLink(theId.link)
  
    }
    }, [theId])
  const handleChangeLink = (text) => {
    setLink(text)
  }

  const handleChangeSecondNumber = (text) => {
    setsecondNumber(text)
  }

  const handleChangeName = (text) => {
    setName(text)
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
          <p className="font-semibold text-gray-800">Registro de Usuários</p>
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
                value={name} required
                onChange={e => handleChangeName(e.target.value)}
              >
              </input>
            </div>
            
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Tipo de usuário</p>
              <select
                type="text"
                name="name"
                className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id="name"
                value={secondNumber}
                onChange={e => handleChangeSecondNumber(e.target.value)}
              >
                <option value="Vereador">Vereador</option>
                <option value="Assessor">Assessor</option>
                <option value="Funcionário">Funcionário</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">

            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Link para foto</p>
              <input type="text" 
              id="link" 
              name="link"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                value={link}
                placeholder="Campo obrigatório"
                onChange={e => handleChangeLink(e.target.value)}
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

export default CadastroModalUser;
