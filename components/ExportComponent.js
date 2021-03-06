import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import ModalPDF from "./pdf/modalPDF";

function ExportComponent () {

   const [openMonth, setOpenMonth] = useState(false)
   const [openDay, setOpenDay] = useState(false)
   const [openUser, setOpenUser] = useState(false)

    return (
    <div className="bg-white">
       <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
<section
   className="
   bg-white
   lg:pt-[20px]
   pb-12
   lg:pb-[90px]
   z-20
   overflow-hidden
   "
   >
   <div className="container">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full">
            <div className="text-center mx-auto mb-[60px] lg:mb-8 max-w-[510px]">
               <span className="font-semibold text-lg text-green-900 mb-2 block">
               Backup
               </span>
               <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-gray-800
                  mb-4
                  "
                  >
                  Página para exportar os dados
               </h2>
               <p className="text-sm text-body-color mb-5">
                 Os dados só estarão seguros depois que forem exportados (em pdf) e colocados em nuvem. DADOS NO BANCO NÃO ESTÃO SEGUROS DE PERDAS!
               </p>
               <div className="mt-10">
               <a href="/" className="border rounded md py-4 px-8 text-center bgGREEN text-white hover:bg-green-900">Saber mais sobre backup</a>
               </div>
            </div>
         </div>
      </div>
      <div className="flex flex-wrap justify-center -mx-4">
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               bg-white
               rounded-xl
               z-10
               overflow-hidden
               border border-green-900 border-opacity-50
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               mt-10
               "
               >
               <span className="text-green-900 font-semibold text-lg block mb-4">
               Backup obrigatório
               </span>
               <h2 className="font-bold text-gray-800 mb-5 text-[42px]">
                Backup do mês
               </h2>
               <p
                  className="
                  text-base text-body-color
                  pb-5
                  mb-3
                  border-b border-[#F2F2F2]
                  "
                  >
                  Este backup deve ser feito todo último dia útil do mês. Ele exportará os registros e essa exportação é a que deve ir para a nuvem.
               </p>

               
               <a
                  onClick={() => setOpenMonth(!openMonth)}
                  className="
                  cursor-pointer
                  w-full
                  block
                  text-base
                  font-semibold
                  text-green-900
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-green-900
                  transition
                  "
                  >
               Fazer backup
               </a>
               {openMonth &&(
                     <div 
                     className="modal">
                        <div className="overlay"></div>
                        <div className="modal-content">	
                           <ModalPDF 
                           onClose={() => setOpenMonth(!openMonth)}
                           backupType = {0}
                           />
                           </div>
                        </div>
                        
                     )
                  }
            </div>
         </div>


         {
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
         <div
            className="
            bg-white
            rounded-xl
            z-10
            overflow-hidden
            border border-green-900 border-opacity-50
            shadow-pricing
            py-10
            px-8
            sm:p-12
            lg:py-10 lg:px-6
            xl:p-12
            mb-10
            mt-10
            "
            >
               <span className="text-green-900 font-semibold text-lg block mb-4">
               Backup opcional
               </span>
               <h2 className="font-bold text-gray-700 mb-5 text-[42px]">
               Backup de um dia
               </h2>
               <p
                  className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                  >
                 Opção para alguma situação específica onde seja necessário obter o registro de algum dia.
               </p>
               <a
                   onClick={() => setOpenDay(!openDay)}
                  className="
                  cursor-pointer
                  w-full
                  block
                  text-base
                  font-semibold
                  text-green-900
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-green-900
                  transition
                  "
                  >
               Fazer backup
               </a>

               {openDay &&(
                     <div 
                     className="modal">
                        <div className="overlay"></div>
                        <div className="modal-content">	
                           <ModalPDF 
                           onClose={() => setOpenDay(!openDay)}
                           backupType = {1}
                           />
                           </div>
                        </div>
                        
                     )
                  }

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
         }



{
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
         <div
            className="
            bg-white
            rounded-xl
            z-10
            overflow-hidden
            border border-green-900 border-opacity-50
            shadow-pricing
            py-10
            px-8
            sm:p-12
            lg:py-10 lg:px-6
            xl:p-12
            mb-10
            mt-10
            "
            >
               <span className="text-green-900 font-semibold text-lg block mb-4">
               Backup opcional
               </span>
               <h2 className="font-bold text-gray-700 mb-5 text-[42px]">
               Backup de um usuário
               </h2>
               <p
                  className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                  >
                 Opção para alguma situação específica onde seja necessário obter o registro de um empregado da câmara.
               </p>
               <a
                   onClick={() => setOpenUser(!openUser)}
                  className="
                  cursor-pointer
                  w-full
                  block
                  text-base
                  font-semibold
                  text-green-900
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-green-900
                  transition
                  "
                  >
               Fazer backup
               </a>

               {openUser &&(
                     <div 
                     className="modal">
                        <div className="overlay"></div>
                        <div className="modal-content">	
                           <ModalPDF 
                           onClose={() => setOpenUser(!openUser)}
                           backupType = {2}
                           />
                           </div>
                        </div>
                        
                     )
                  }

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
         }


      </div>
   </div>
</section>


    </div>
    );
};

export default ExportComponent;