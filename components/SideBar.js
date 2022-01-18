import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
    HeartIcon,
    RssIcon,
    Phone,
    SaveIcon
} from "@heroicons/react/solid";

function SideBar () {
    return (
        <div className="text-gray-300 font-bold  font-sans p-11 border-r border-gray-100 bg-gradient-to-tr from-blue-800 to-green-800
        overflow-y-scroll scrollbar-hide min-h-screen min-w-fit
">
            <div className="">
                <div className="flex justify-center">
                    <img className="h-20 w-15" src="https://i.imgur.com/dbzXiww.png"/>
                </div>
                <p></p>
            </div>
            <div className="space-y-6 pt-6 mt-8">
                <button className="flex items-center space-x-2 hover:text-gray-400"
                >
                    <p>Sair</p>
                </button>

                <button className="flex items-center space-x-2 hover:text-gray-400"
                >
                    <HomeIcon className="h-5 w-5" />
                    <a href="/">Página Inicial</a>
                </button>

                <button className="flex items-center space-x-2 hover:text-gray-400"
                href="/registroInterno">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
    </svg>
                <a href="/registroInterno">Registro Interno</a>
                </button>

                <button className="flex items-center space-x-2 hover:text-gray-400"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
    </svg>
                <a href="/registroExterno">Registro de Visitas</a>
                </button>

                <button className="flex items-center space-x-2 hover:text-gray-400"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
                    <a href="/numerosuteis">Números Úteis</a>
                </button>

                <button className="flex items-center space-x-2 hover:text-gray-400"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
                     <a href="/numerosInterno">Usuários</a>
                    
                </button>

                <button className="flex items-center space-x-2 hover:text-gray-400"
                >
                   <SaveIcon className="h-5 w-5" />
                     <a href="/Export">Exportar</a>
                    
                </button>
            </div>

            <div className="fixed inset-x-0 bottom-0 p-5">
                <p>Você está logado como:</p>
                <div className="flex">
                    <p>Mario Silva</p>
                    {","}&nbsp;
                    <p>Porteiro</p>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
