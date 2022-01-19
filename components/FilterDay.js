import React, {useState} from "react";
import moment from "moment";

function CadastroExternal({onClose, setSearch, currentDate}){
    

  const [date, setDate] = useState('')

  const [errors, setErrors] = useState({name: null, email: null, firstNumber: null, temperature: null})

  //console.log("before errors: " + errors)
  const isValidFormData = () => {

    if(day == "" ){
      setErrors({day: 'Indique um dia!'})
      return false
    }
    if(month == "") {
      setErrors({month: 'Indique um mês!'})
      return false
    }
    if(year == "") {
      setErrors({year: 'Indique um ano!'})
      return false
    }
    setErrors({})
    return true
  }


  const handleSubmitFilter = async (e) => {
    setSearch(date)
    onClose()
  }

  const handleDate = (text) => {
    setDate(text)
  }

  return(
        <div>
            <div className="flex items-center antialiased">
      <div className="flex flex-col rounded-lg border border-gray-300 shadow-xl"
      >
        <form
        onSubmit={handleSubmitFilter}>
        <div
          className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p className="font-semibold text-gray-800">Filtro da lista por data</p>
        </div>
        
        <div
          className="flex flex-row justify-between p-6 bg-white"
        >
        <p>Data atual: {currentDate? currentDate : moment().format("YYYY-MM-DD").split("-").reverse().join("/")}</p>
        </div>
        
        <div className="flex flex-col px-6 py-5 bg-gray-50">


        <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div>
              <p className="mb-2 font-semibold text-gray-700">Dia</p>
              <input
                type="date"
                name="name"
                placeholder="Campo obrigatório"
                className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                onChange={e => handleDate(e.target.value)}
              >
              </input>
            </div>
          </div>
         
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
          >Filtrar
          </button>
        </div>
        </form>
      </div>
    </div>
        </div>
    );
}

export default CadastroExternal;