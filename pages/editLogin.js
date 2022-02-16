import Head from 'next/head'
import SideBar from '../components/SideBar'
import React, {useEffect, useState} from "react";
import { useSession } from 'next-auth/react'

export default function Home() {

  const [shit, setShit] = useState(true)

  const {data: session } = useSession()
        
  const [name, setName] = useState("Processando...")
  const [password, setPassword] = useState("")

  const [changePassword, setChangePassword] = useState(false)

  const [currentPassword, SetCurrentPassword] = useState('')
  const [currentPassword2, SetCurrentPassword2] = useState('')

  const [newPassword, setNewPassword] = useState('')
  const [newPassword2, setNewPassword2] = useState('')

  const [error, setError] = useState('')

  useEffect(() => {
    if(session !== null && session !== undefined){
      setName(session.user.name)
      setPassword(session.user.password)
    }
  }, [session])

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

  const handleChangeNewPassword = (text) => {
    setNewPassword(text)
  }

  const handleChangeNewPassword2 = (text) => {
    setNewPassword2(text)
  }

  const handleEditProfile = (text) => {
    if(currentPassword === password){
      //UPDATE
    }
    else 
      setError("Senha inválida")
  }


  const editForm = (
     
    <div className=''>
    <form className='flex-item'
    onSubmit={handleEditProfile}>
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


      <div className="mb-2 font-semibold text-gray-700">
          É necessário confirmar a senha para alterar qualquer Informação da conta!
        </div>
      <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
        <div className="w-full sm:w-1/2">
          <p className="mb-2 font-semibold text-gray-700">Senha</p>
          <input type="password" 
          id="currentPassword" 
          name="currentPassword"
          className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
            value={currentPassword}
            placeholder="Insira a sua senha atual"
            onChange={e => handleChangePassword(e.target.value)}
            />
        </div>
        
        <div className="w-full sm:w-1/2">
          <p className="mb-2 font-semibold text-gray-700">Confirmar senha</p>
          <input type="password" 
          id="currentPassword2" 
          name="currentPassword2"
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            </div>)
            :
            (<div className='mt-7'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
            </div>)
        : 
            (<div className='mt-7'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-red-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            </div>)
        }

      </div>



{changePassword?(          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">

        <div className="w-full sm:w-1/2">
          <p className="mb-2 font-semibold text-gray-700">Nova Senha</p>
          <input type="password" 
          id="newPassword" 
          name="newPassword"
          className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
            value={newPassword}
            placeholder="Insira sua nova senha"
            onChange={e => handleChangeNewPassword(e.target.value)}
            />
        </div>
        
        <div className="w-full sm:w-1/2">
          <p className="mb-2 font-semibold text-gray-700">Confirmar nova senha</p>
          <input type="password" 
          id="newPassword2" 
          name="newPassword2"
          className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
            value={newPassword2}
            placeholder="Confirme sua nova senha"
            onChange={e => handleChangeNewPassword2(e.target.value)}
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
  )

  const warningShit = (
    <div className='flex-container'>
      
      <div className="flex-item md:w-1/2 px-4">
            <div
               className="
               flex-item
               content-center
               bg-white
               rounded-xl
               z-10
               overflow-hidden
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
               >
               <h2 className="font-bold text-gray-800 mb-5 text-[42px]">
               DADOS DE LOGIN
                <span className="text-base text-body-color  font-semibold text-lg block mb-4">
                OS DADOS DE LOGIN FORAM SALVOS EM CÓDIGO, PARA ALTERÁ-LOS VÁ NAS VARIÁVEIS DE AMBIENTE E DEPOIS REINICIE O PROJETO.
                  </span>
               </h2>
             
               <div>
                  <span className="absolute right-0 top-7 z-[-1]">
                     <svg
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                        <defs>
                           <linearGradient
                              id="paint0_linear"
                              x1="86"
                              y1="0"
                              x2="86"
                              y2="172"
                              gradientUnits="userSpaceOnUse"
                              >
                              <stop stopColor="#53915a" stopOpacity="0.09" />
                              <stop
                                 offset="1"
                                 stopColor="#C4C4C4"
                                 stopOpacity="0"
                                 />
                           </linearGradient>
                        </defs>
                     </svg>
                  </span>
               </div>
            </div>
         </div>


    </div>
  )

  return (
    <div className="">
      <Head>
        <title>Portaria</title>
        <link rel="icon" href="https://www.prefeitura.capaodoleao.com.br/wp-content/uploads/2017/01/brasao-a4-309x400.jpg" />
      </Head>

      <main className="flex">
        <SideBar/>
       
       {!shit 
       ? editForm
       : warningShit}

      </main>
    </div>
  )
}

function strcmp(a, b)
{   
    return (a<b?-1:(a>b?1:0));  
}
