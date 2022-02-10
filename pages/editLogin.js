import Head from 'next/head'
import SideBar from '../components/SideBar'
import React, {useEffect, useState} from "react";

export default function Home() {
        
  const [name, setName] = useState("Processando...")
  const [link, setLink] = useState("Processando...")

  const [changePassword, setChangePassword] = useState(false)

  const [currentPassword, SetCurrentPassword] = useState('')
  const [currentPassword2, SetCurrentPassword2] = useState('')

  const [newPassword, SetNewPassword] = useState('')
  const [newPassword2, SetNewPassword2] = useState('')

  const [temperature, setTemperature] = useState('')

  const handleChangeName = (text) => {
    setName(text)
  }

  const handleChangeLink = (text) => {
    setLink(text)
  }

  const handleChangePassword = (text) => {
    SetCurrentPassword(text)
  }

  
  const handleChangePassword2 = (text) => {
    SetCurrentPassword2(text)
  }

  return (
    <div className="">
      <Head>
        <title>Portaria</title>
        <link rel="icon" href="https://www.prefeitura.capaodoleao.com.br/wp-content/uploads/2017/01/brasao-a4-309x400.jpg" />
      </Head>

      <main className="flex">
        <SideBar/>
        
        <div className='flex-container content-center justify-center'>
        <form className='flex-item'
        onSubmit={() => console.log("OI")}>
        <div
          className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p className="font-semibold text-gray-800">Editar conta de login</p>
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
              <p className="mb-2 font-semibold text-gray-700">Foto de login</p>
              <input
                type="text"
                name="link"
                placeholder="Campo obrigatório"
                className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                id="link"
                value={link}
                onChange={e => handleChangeLink(e.target.value)}
              >
              </input>
            </div>
            
          </div>



          <div className="mb-2 font-semibold text-gray-700">
              É necessário confirmar a senha para alterar qualquer Informação da conta!
            </div>
          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Senha</p>
              <input type="password" 
              id="telPrincipal" 
              name="telPrincipal"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                value={currentPassword}
                placeholder="Insira a sua senha atual"
                onChange={e => handleChangePassword(e.target.value)}
                />
            </div>
            
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Confirmar senha</p>
              <input type="password" 
              id="telPrincipal" 
              name="telPrincipal"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                value={currentPassword2}
                placeholder="Confirme a sua senha atual"
                onChange={e => handleChangePassword2(e.target.value)}
                />
            </div>
    
            {/* SVG ICON TEST */}
            {(strcmp(currentPassword, "") != 0) ? 
                (strcmp(currentPassword, currentPassword2) == 0)
                ? 
                (<div className='mt-7'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-green-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>)
                :
                (<div className='mt-7'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-red-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>)
            : 
                (<div className='mt-7'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                </div>)
            }

          </div>



{changePassword?(          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">

            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Nova Senha</p>
              <input type="tel" 
              id="telPrincipal" 
              name="telPrincipal"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                value={newPassword}
                placeholder="Insira sua nova senha"
                onChange={e => handleChangefirstNumber(e.target.value)}
                />
            </div>
            
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Confirmar nova senha</p>
              <input type="tel" 
              id="telPrincipal" 
              name="telPrincipal"
              className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                value={newPassword2}
                placeholder="Confirme sua nova senha"
                onChange={e => handleChangefirstNumber(e.target.value)}
                />
            </div>
    
          </div>)
          : 
          <button className="w-fit px-4 py-2 text-white font-semibold bgRED rounded"
          onClick={() => setChangePassword(true)}
          > Alterar senha
          </button>}
         
        </div>
        <div
          className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >

          <button className="px-4 py-2 text-white font-semibold bgBLUE rounded"
          type='submit'
          > Atualizar
          </button>
        </div>
        </form>


        </div>

      </main>
    </div>
  )
}

function strcmp(a, b)
{   
    return (a<b?-1:(a>b?1:0));  
}
