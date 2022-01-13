import { ChevronDownIcon, UserAddIcon } from "@heroicons/react/outline";
import Register from "./register";

function Center () {
    return (
        <div className="w-full bg-white">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="w-full bg-gradient-to-tr from-gray-800 to-green-800 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                    <p className="text-xl text-white font-bold">Informações</p>
                    <p className="text-base text-gray-400 font-normal">O que o sistema faz?</p>
                    <p className="text-base leading-relaxed text-gray-500 font-normal">Se você tem dúvidas do que o sistema faz clique no botão abaixo e saiba todas as funcionalidades.</p>
                    <div className="flex justify-start space-x-2">
                        <a href="#" className="text-gray-500 hover:text-gray-600">
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gradient-to-tr from-gray-800 to-green-800 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                    <p className="text-xl text-white font-bold">Informações</p>
                    <p className="text-base text-gray-400 font-normal">Como o sistema foi montado?</p>
                    <p className="text-base leading-relaxed text-gray-500 font-normal">Se você quer saber como o sistema foi feito (e organizado), o que foi utilizado, e como fazer backup do banco use o botão abaixo!</p>
                    <div className="flex justify-start space-x-2">
                        <a href="#" className="text-gray-500 hover:text-gray-600">
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="pt-5">

        </div>

    </section>
</div>
    );
};

export default Center;