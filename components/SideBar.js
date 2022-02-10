import {
    HomeIcon,
    SaveIcon,
    CogIcon
} from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";

function SideBar () {

    const [path, setPath] = useState('/')

    const usePathname = () => {
        setPath(window.location.pathname)
    }

    useEffect(function onFirstMount() {
        usePathname()
      }, []); // empty dependencies array means "run this once on first mount"

    return (
        <div className="text-gray-300 font-bold pl-6 font-sans border-r border-gray-100 bg-gradient-to-br from-[#156661] to-[#1C8657] 
        overflow-y-scroll scrollbar-hide min-h-screen min-w-fit
        "
        >


            {/*GAMBIARRA*/}

            <div className="widthMenu">
            </div>

            <div className="menuScroll ml-6">
            <div className="">
                <div className="flex justify-left pl-11 ml-8 mt-6">
                    <img className="h-20 w-15" src="https://i.imgur.com/dbzXiww.png"/>
                </div>
                <span></span>
            </div>
            <div className="space-y-2 pt-5 mt-8 ">
                <button className="flex items-center space-x-2 hover:text-gray-400"
                >
                    <span className="pl-10">Sair</span>
                </button>




              {path == "/" &&  <button className="w-full pt-4 pb-4 rounded-l-lg bg-gradient-to-r from-white to-white hover:to-white hover:from-white text-emerald-600 flex items-center space-x-2"
               >
                    <div className=""></div> 
                    <HomeIcon className="h-5 w-5" />
                    <a className="pl-1" href="/">Página Inicial</a>
                </button>}
                
                {path != "/" &&  <button className="w-full pt-4 pb-4 rounded-l-lg bg-gradient-to-r from-transparent to-transparent hover:to-white hover:from-white text-gray-200 hover:text-emerald-600 flex items-center space-x-2"
               >
                    <div className=""></div> 
                    <HomeIcon className="h-5 w-5" />
                    <a className="pl-1" href="/">Página Inicial</a>
                </button>}






             {path ==  "/registroInterno" && <button className="w-full pr-4 pt-4 pb-4 rounded-l-lg bg-gradient-to-r from-white to-white hover:to-white hover:from-white text-emerald-600 flex items-center space-x-2"
               >
                    <div className=""></div> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                <a className="pl-1" href="/registroInterno">Registro de Empregados</a>
                </button>}

                {path !=  "/registroInterno" && <button className="w-full pr-4 pt-4 pb-4 rounded-l-lg bg-gradient-to-r from-transparent to-transparent hover:to-white hover:from-white text-gray-200 hover:text-emerald-600 flex items-center space-x-2"
                >
                    <div className=""></div> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                <a className="pl-1" href="/registroInterno">Registro de Empregados</a>
                </button>}





               {path ==  "/registroExterno" && <button className="w-full pt-4 pb-4 rounded-l-lg bg-gradient-to-r from-white to-white hover:to-white hover:from-white text-emerald-600 flex items-center space-x-2"
               >
                    <div className=""></div> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                <a className="pl-1" href="/registroExterno">Registro de Visitas</a>
                </button>}

                {path !=  "/registroExterno" && <button className="w-full pt-4 pb-4 rounded-l-lg bg-gradient-to-r from-transparent to-transparent hover:to-white hover:from-white text-gray-200 hover:text-emerald-600 flex items-center space-x-2"
               >
                    <div className=""></div> 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                    </svg>
                <a className="pl-1" href="/registroExterno">Registro de Visitas</a>
                </button>}
               


                {path == "/numerosuteis" &&  <button className="w-full pt-4 pb-4 rounded-l-lg bg-gradient-to-r from-white to-white hover:to-white hover:from-white text-emerald-600 flex items-center space-x-2"
               >
                    <div className=""></div> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
                    <a className="pl-1" href="/numerosuteis">Números Úteis</a>
                </button>}

                {path != "/numerosuteis" && <button className="w-full pt-4 pb-4 rounded-l-lg bg-gradient-to-r from-transparent to-transparent hover:to-white hover:from-white text-gray-200 hover:text-emerald-600 flex items-center space-x-2"
               >
                    <div className=""></div> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
                    <a className="pl-1" href="/numerosuteis">Números Úteis</a>
                </button>}




                {path == "/numerosInterno" &&  <button className="w-full pt-4 pb-4 rounded-l-lg bg-gradient-to-r from-white to-white hover:to-white hover:from-white text-emerald-600 flex items-center space-x-2"
               >
                    <div className=""></div> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
                     <a className="pl-1" href="/numerosInterno">Usuários</a>
                    
                </button>}



                {path != "/numerosInterno" && <button className="w-full pt-4 pb-4 rounded-l-lg bg-gradient-to-r from-transparent to-transparent hover:to-white hover:from-white text-gray-200 hover:text-emerald-600 flex items-center space-x-2"
               >
                    <div className=""></div> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
                     <a className="pl-1" href="/numerosInterno">Usuários</a>
                    
                </button>}



             { path == "/Export" &&  <button className="w-full pt-4 pb-4 rounded-l-lg bg-gradient-to-r from-white to-white hover:to-white hover:from-white text-emerald-600 flex items-center space-x-2"
               >
                    <div className=""></div> 
                   <SaveIcon className="h-5 w-5" />
                     <a className="pl-1" href="/Export">Exportar</a>
                    
                </button>}

                
           { path != "/Export" &&  <button className="w-full pt-4 pb-4 rounded-l-lg bg-gradient-to-r from-transparent to-transparent hover:to-white hover:from-white text-gray-200 hover:text-emerald-600 flex items-center space-x-2"
               >
                    <div className=""></div> 
                   <SaveIcon className="h-5 w-5" />
                     <a className="pl-1" href="/Export">Exportar</a>
                    
                </button>}




            </div>
            </div>


            <div className="fixed right-5 top-3 ">
                <div className="flex">
                    <div className="font-sans border-r border-gray-100  bg-gradient-to-br from-[#156661] to-[#1C8657] rounded opacity-75">
                        <a href="/editLogin" className="cursor-pointer flex p-2">
                            <div className="w-7 h-7 ml-1">
                                <img className="w-full h-full rounded-full"
                                        src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"
                                        alt="" />
							</div>
                            <div className="flex mt-0.5 ml-1">
                                <span className="ml-1 mr-2">Desconhecido</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SideBar;
