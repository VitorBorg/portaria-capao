import React, {useEffect, useState} from "react";
import api from '../pages/services/api'

function CadastroInternal({clients,setClientsMain, onClose, theId, setRefresh}){
    
  const [clientsList, setClientsList] = useState([])
	const [clientsSearch, setClientsSearch] = useState([])

  const [name, setName] = useState("")

  const [hourEnter, setHourEnter] = useState('07:00')
  const [hourEnterFlag, setHourEnterFlag] = useState(false)
  const [hourLeft, setHourLeft] = useState('00:00')
  const [hourLeftFlag, setHourLeftFlag] = useState(false)

  const [userType, setUserType] = useState('null')
  const [temperature, setTemperature] = useState('')

  const [errors, setErrors] = useState({name: null, email: null, temperature: null})

  //console.log("before errors: " + errors)
  const isValidFormData = () => {

    if(userType == "" ){
      setErrors({userType: 'Selecione uma função!'})
      return false
    }
    if(name == "" || name == "Campo obrigatório") {
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

        await api.put(`/regInternal/${iId}`, {name, userType, temperature, hourEnter, hourLeft})

        setClientsMain(clients.map(client => client._id === iId ? 
          {name, userType, temperature, hourEnter, hourLeft, _id: iId} : client))
    
        setName('')
        setUserType('')
        setTemperature('')
        setHourEnter('07:00')
        setHourLeft('00:00')
        setHourEnterFlag(false)
        setHourLeftFlag(false)

        onClose()
        setRefresh(true)
    
      } catch (e) {
        console.log(e)
      }
    } else{
      e.preventDefault()

      //if(!isValidFormData()) return

      try {

        console.log("entering")
        console.log(
          "name: ", name,
          "usertype: ", userType,
          "temperature: ", temperature,
          "hourEnter: ", hourEnter,
          "hourLeft: ", hourLeft
        )


        const {data} = await api.post('/regInternal', {name, userType, temperature, hourEnter, hourLeft})

        setClientsMain(clients.concat(data.data))

        setName('')
        setUserType('')
        setTemperature('')
        setHourEnter('07:00')
        setHourLeft('13:00')
        setHourEnterFlag(false)
        setHourLeftFlag(false)

        onClose()
        setRefresh(true)
        
    } catch (e) {
      console.log("YOU: ")
      console.log("error: " + e)
      }

    }
  }

  useEffect(() => {
    if(theId){
      setUserType(theId.userType)
      setTemperature(theId.temperature)
      setHourEnter(theId.hourEnter)
      setHourLeft(theId.hourLeft)
      setName(theId.name)

      console.log("useEffect: ", theId)
    }
    }, [theId])


/////////  GET LIST TO CADASTRO
function strcmp(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

	//Getting data from database
	useEffect(() => {
		api.get('/user').then(({data}) => {
			setClientsList(data.data)
      //console.log("List: ", data.data)
		})
	}, [])

	/////////////////////Search implementation
	useEffect(() => {
		setClientsSearch(clientsList.filter(client => strcmp(client.phoneSecond, userType) == 0))
	}, [userType])

///////////////////////////////////////////////////////////////////////
  const handleChangeUserType = (text) => {
    setUserType(text)
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

    //console.log((text.getHours() + "").length + ", " + (text.getHours() + ""))
    let hour = ((text.getHours() + "").length <= 1? "0" + ((text.getHours() + 3 ) + "") : text.getHours() + 3)
    let minute = ((text.getMinutes() + "").length <= 1? "0" + (text.getMinutes() + "") : text.getMinutes())
    
    setHourLeft((hour.length == 3? hour.substring(1, 3): hour) + ":" + minute)
  }

  const listDataShowEdit = 
  !theId? (null) : (
    <div className="">
        <p className="mb-2 font-semibold text-gray-700">Usuário</p>
        <input type="text" 
              id="telSecundary" 
              name="telSecundary"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                value={theId.name + ", " + theId.userType}
                readOnly="readOnly"
                />
      </div>
  )


  const listDataSearch = 
  (userType == "null" || theId)? (listDataShowEdit) : (
  <div>
      <div className="">
        <p className="mb-2 font-semibold text-gray-700">Nome</p>
        <select
          type="text"
          name="name"
          placeholder="Campo obrigatório"
          className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
          id="name" required
          value={name}
          onChange={e => handleChangeName(e.target.value)}
        >
        
        <option value="null">Campo Obrigatório</option>
        {clientsSearch.map(client => (
          <option key={client._id} value={client.name}>{client.name}</option>
          ))}
        </select>
      </div>
  </div>
  )
  


  return(
    <div>
      <div className="flex justify-center h-screen w-screen items-center antialiased">
      <div className="flex flex-col rounded-lg border border-gray-300 shadow-xl"
      >
        <form
        onSubmit={handleSubmitCreateClient}>
        <div
          className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p className="font-semibold text-gray-800">Registro de entrada Interno</p>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">


        <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">

        { theId? (null) : (
          <div className=" mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Função</p>
              <select
                type="text"
                name="userType"
                className="p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id="userType"
                value={userType}
                onChange={e => handleChangeUserType(e.target.value)}
              >
                <option value="null">Campo Obrigatório</option>
                <option value="Vereador">Vereador</option>
                <option value="Assessor">Assessor</option>
                <option value="Funcionário">Funcionário</option>
              </select>
            </div>
           )}
                   
              {listDataSearch}
     
          </div>

          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">

            
            <div className="w-full mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Temperatura</p>
              <input type="text" 
              id="telSecundary" 
              name="telSecundary"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                placeholder="Campo Obrigatório" required
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
                (!hourEnterFlag && theId? hourEnter: console.log())
                }
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                min="06:00" max="22:00" required
                onChange={e => handleChangeHourEnter(e.target.valueAsDate)}
                />
            </div>
            

            {theId && theId.hourLeft != "00:00" && (
            
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Horário de Saída</p>
              <input type="time" 
              id="hourLeft" 
              name="hourLeft"
              value={
                (!hourLeftFlag && theId.hourLeft? hourLeft: console.log())
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

export default CadastroInternal;