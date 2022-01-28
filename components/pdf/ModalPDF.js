import React, {useEffect, useState} from "react";
import api from "../../pages/services/api";
import PdfCreate from "./PdfCreate";

function strcmp(a, b)
{   
    return (a<b?-1:(a>b?1:0));  
}

function ModalPDF({onClose}){
    
	const [databaseClientsInternal, setDatabaseClientsInternal] = useState([])
  const [databaseClientsExternal, setDatabaseClientsExternal] = useState([])
  const [databaseClientsUsersData, setDatabaseClientsUsersData] = useState([])

  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false)
  const [start, setStart] = useState(false)
  const [finished, setFinished] = useState(false)

  const [detail, setDetail] = useState('...')
  const [btnDelete, setBtnDelete] = useState(null)

  useEffect(() => {
    if(start && date != ''){
      setLoading(true)


      api.get('/regExternal').then(({data}) => {
        setDatabaseClientsExternal(data.data.filter(client => 
          strcmp(client.createdAt.substring(5,7), date) == 0))
      })


      api.get('/regInternal').then(({data}) => {
        setDatabaseClientsInternal(data.data.filter(client => 
          strcmp(client.createdAt.substring(5,7), date) == 0))
      })
/*
      api.get('/user').then(({data}) => {
        setDatabaseClientsUsersData(data.data)
      })
      */
/*


      setLoading(false)
      setStart(false)
      setFinished(true)
      */
    }

  }, [start])

	const done = (data) => {
    console.log("Made it!")
    setLoading(false)
    setStart(false)
    setFinished(true)
	}
  

  const handleChangeDate = (text) => {
    setDate(text)
  }

  return(
        <div>
        {loading && (
          <PdfCreate 
          dataExternal={databaseClientsExternal}
          dataInternal= {databaseClientsInternal}
          finished = {done}
          date = {date}
          detl={setDetail}
          btnDelete={setBtnDelete}
          />
        )
}


            <div className="flex items-center antialiased">
      <div className="flex flex-col rounded-lg border border-gray-300 shadow-xl"
      >

    {/*MENSAGEM DE CARREGAMENTO*/}
          {loading && (
              <div
              >
                  <div
                    className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
                  >
                    <ul>
                      <li>
                        <p className="font-semibold text-gray-800">Processando backup...</p>
                      </li>
                      <li>
                        <p className=" text-gray-800">{detail}</p>
                      </li>
                    </ul>

                  </div>
              </div>
          )}

    {/*POPUP*/}
          {!loading && (
        <div
        >
        <div
          className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p className="font-semibold text-gray-800">Backup do mês</p>
        </div>
        
        
        <div className="flex flex-col px-6 py-5 bg-gray-50">


        <div className="flex flex-col w-full items-center mb-5">

        {finished && (<h1 className="mb-3">BACKUP FEITO COM SUCESSO</h1>)}

        {(!loading && !finished) && (
              <div className="">
                <p className="mb-2 font-semibold text-gray-700">Mês</p>
                <select
                  type="text"
                  name="name"
                  className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  id="name" required
                  //value={""}
                  placeholder="Selecione um mês"
                  onChange={e => handleChangeDate(e.target.value)}
                >
                 <option value="00">Selecione um mês</option>
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Março</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
                </select>
              </div>
            )
          }

          {!loading && finished && (
              <div className="">
                {/*
                  <button className="px-4 py-2 text-white font-semibold bg-red-400 rounded
                      "
                      onClick={() => (setFinished(false), onClose())}>
                        Excluir estes arquivos do banco
                  </button>
                */
                btnDelete}
               </div>
            )
          }
        </div>
         
        </div>
        <div
          className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >
          <div className="pr-2">
          {(!loading && !finished) && (
            <button className="px-4 py-2 text-white font-semibold bg-red-400 rounded
            "
            onClick={() => (setFinished(false), onClose())}>
              Cancelar
              
            </button>
          )}

          {/*(loading || finished) && (
            <button className="px-4 py-2 text-white font-semibold bg-red-400 rounded
            "
            onClick={() => (setFinished(false), onClose())}>
              fechar janela
              
            </button>
          )*/}  
          </div>

    {(!loading && !finished) && (
          <button className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
          onClick={() =>(date != "" && setStart(true))}
          >Fazer backup
          </button>
      )}
        </div>
        </div>
        )}
      </div>
    </div>
        </div>
    );
}

export default ModalPDF;