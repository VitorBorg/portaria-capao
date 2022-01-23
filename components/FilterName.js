import React, {useState} from "react";
import moment from "moment";

function CadastroExternal({onClose, setSearch}){
    

  const [date, setDate] = useState('')

  const [errors, setErrors] = useState({date: null})

  //console.log("before errors: " + errors)
  const isValidFormData = () => {

    if(date == "" ){
      setErrors({day: 'Indique um dia!'})
      return false
    }
    setErrors({})
    return true
  }


  const handleSubmitFilter = async (e) => {
    setSearch(date)
    onClose()
  }

  const handleName = (text) => {
    setDate(text)
  }

  return(
        <div>
            <div className="flex items-center antialiased">
      <div className="flex flex-col rounded-lg border border-gray-300 shadow-xl"
      >
        <div>
        <div
          className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p className="font-semibold text-gray-800">Filtro da lista por nome nos dias</p>
        </div>
        
        <div className="flex flex-col px-6 py-5 bg-gray-50">


        <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div>
              <p className="mb-2 font-semibold text-gray-700">Nome</p>
              <input
                type="name"
                name="name"
                placeholder="Campo obrigatório"
                className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                onChange={e => handleName(e.target.value)}
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
          onClick={handleSubmitFilter}
          >Filtrar
          </button>
        </div>
        </div>
      </div>
    </div>
        </div>
    );
}

export default CadastroExternal;