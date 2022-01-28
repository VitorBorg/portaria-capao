import React, {useEffect, useState} from "react";
import api from '../pages/services/api'

function Center () {

   const [regExternalDatabase, setRegExternalDatabase] = useState("")
   const [regInternalDatabase, setRegInternalDatabase] = useState("")

   const [userDatabase, setUserDatabase] = useState("")
   
   const [phonesDatabase, setPhonesDatabase] = useState("")

   useEffect(() => {

		api.get('/regExternal').then(({data}) => {
			setRegExternalDatabase(data.data.length)
		})

      api.get('/regInternal').then(({data}) => {
			setRegInternalDatabase(data.data.length)
		})

      api.get('/user').then(({data}) => {
			setUserDatabase(data.data.length)
		})

      api.get('/numberPhones').then(({data}) => {
			setPhonesDatabase(data.data.length)
		})


	}, [])

    return (
       
    <div className="bg-white">
       <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />



       
<section
   className="
   bg-white
   lg:pt-[50px]
   pb-12
   lg:pb-[90px]
   relative
   z-20
   overflow-hidden
   "
   >
   <div className="container">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full">
            <div className="text-center mx-auto mb-[60px] lg:mb-8 max-w-[510px]">
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
                Informações sobre o sistema
               </h2>
               <span className="text-base text-body-color">
                 Informações sobre a utilização do sistema, como ele foi feito e alguns dados que estão no banco.
               </span>
            </div>
         </div>
      </div>
      
      <div className="flex flex-wrap justify-center -mx-4">
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               bg-white
               rounded-xl
               relative
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
               "
               >
               <span className="text-green-900 font-semibold text-lg block mb-4">
               Informações
               </span>
               <h2 className="font-bold text-gray-800 mb-5 text-[42px]">
                {regExternalDatabase + regInternalDatabase} 
                <span className="text-base text-body-color  font-semibold text-lg block mb-4">
                /registros estão no banco de dados
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
                  <span className="absolute right-4 top-4 z-[-1]">
                     <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="38.9138"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 38.9138 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 38.9138 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 38.9138 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 38.9138 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 38.9138 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 38.9138 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 38.9138 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="1.42021"
                           r="1.42021"
                           transform="rotate(180 38.9138 1.42021)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 26.4157 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 26.4157 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 26.4157 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 26.4157 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 26.4157 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 26.4157 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 26.4157 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 26.4157 1.4202)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 13.9177 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 13.9177 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 13.9177 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 13.9177 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 13.9177 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 13.9177 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 13.9177 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="1.42019"
                           r="1.42021"
                           transform="rotate(180 13.9177 1.42019)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 1.41963 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 1.41963 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 1.41963 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 1.41963 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 1.41963 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 1.41963 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 1.41963 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 1.41963 1.4202)"
                           fill="#53915a"
                           />
                     </svg>
                  </span>
               </div>
            </div>
         </div>
         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               bg-white
               rounded-xl
               relative
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
               "
               >
               <span className="text-green-900 font-semibold text-lg block mb-4">
               Informações
               </span>
               <h2 className="font-bold text-gray-800 mb-5 text-[42px]">
                {userDatabase}
                <span className="text-base text-body-color  font-semibold text-lg block mb-4">
                /usuários cadastrados no sistema
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
                  <span className="absolute right-4 top-4 z-[-1]">
                     <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="38.9138"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 38.9138 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 38.9138 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 38.9138 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 38.9138 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 38.9138 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 38.9138 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 38.9138 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="1.42021"
                           r="1.42021"
                           transform="rotate(180 38.9138 1.42021)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 26.4157 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 26.4157 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 26.4157 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 26.4157 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 26.4157 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 26.4157 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 26.4157 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 26.4157 1.4202)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 13.9177 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 13.9177 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 13.9177 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 13.9177 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 13.9177 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 13.9177 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 13.9177 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="1.42019"
                           r="1.42021"
                           transform="rotate(180 13.9177 1.42019)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 1.41963 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 1.41963 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 1.41963 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 1.41963 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 1.41963 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 1.41963 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 1.41963 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 1.41963 1.4202)"
                           fill="#53915a"
                           />
                     </svg>
                  </span>
               </div>
            </div>
         </div>

         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               bg-white
               rounded-xl
               relative
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
               "
               >
               <span className="text-green-900 font-semibold text-lg block mb-4">
               Informações
               </span>
               <h2 className="font-bold text-gray-800 mb-5 text-[42px]">
                {phonesDatabase} 
                <span className="text-base text-body-color  font-semibold text-lg block mb-4">
                /números úteis cadastrados no banco
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
                  <span className="absolute right-4 top-4 z-[-1]">
                     <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="38.9138"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 38.9138 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 38.9138 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 38.9138 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 38.9138 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 38.9138 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 38.9138 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 38.9138 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="1.42021"
                           r="1.42021"
                           transform="rotate(180 38.9138 1.42021)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 26.4157 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 26.4157 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 26.4157 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 26.4157 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 26.4157 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 26.4157 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 26.4157 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 26.4157 1.4202)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 13.9177 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 13.9177 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 13.9177 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 13.9177 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 13.9177 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 13.9177 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 13.9177 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="1.42019"
                           r="1.42021"
                           transform="rotate(180 13.9177 1.42019)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 1.41963 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 1.41963 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 1.41963 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 1.41963 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 1.41963 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 1.41963 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 1.41963 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 1.41963 1.4202)"
                           fill="#53915a"
                           />
                     </svg>
                  </span>
               </div>
            </div>
         </div>



         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               bg-white
               rounded-xl
               relative
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
               "
               >
               <span className="text-green-900 font-semibold text-lg block mb-4">
               Tutorial
               </span>
               <h2 className="font-bold text-gray-800 mb-5 text-[42px]">
               Sistema
                <span className="text-base text-body-color  font-semibold text-lg block mb-4">
                /O que foi usado para fazer o sistema? 
                  </span>
               </h2>
               <span className="text-base text-body-color">
                 O sistema foi feito com node.js utilizando React para o front-end e Tailwind para o estilo, Node.js + Next.js para o back-end, mongoose para schema model, e para o banco usa-se o gerenciador MONGO-DB. <br/> O email cadastrado no mongo é o email da portaria.
               </span>
             
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
                  <span className="absolute right-4 top-4 z-[-1]">
                     <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="38.9138"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 38.9138 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 38.9138 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 38.9138 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 38.9138 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 38.9138 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 38.9138 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 38.9138 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="1.42021"
                           r="1.42021"
                           transform="rotate(180 38.9138 1.42021)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 26.4157 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 26.4157 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 26.4157 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 26.4157 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 26.4157 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 26.4157 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 26.4157 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 26.4157 1.4202)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 13.9177 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 13.9177 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 13.9177 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 13.9177 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 13.9177 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 13.9177 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 13.9177 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="1.42019"
                           r="1.42021"
                           transform="rotate(180 13.9177 1.42019)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 1.41963 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 1.41963 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 1.41963 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 1.41963 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 1.41963 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 1.41963 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 1.41963 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 1.41963 1.4202)"
                           fill="#53915a"
                           />
                     </svg>
                  </span>
               </div>
            </div>
         </div>




         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               bg-white
               rounded-xl
               relative
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
               "
               >
               <span className="text-green-900 font-semibold text-lg block mb-4">
               Tutorial
               </span>
               <h2 className="font-bold text-gray-800 mb-5 text-[42px]">
               Backup
                <span className="text-base text-body-color  font-semibold text-lg block mb-4">
                /Como fazer o backup?
                  </span>
               </h2>
               <span className="text-base text-body-color">
                 Para fazer o backup deve-se ir na página "Exportações" e selecionar o backup do mês. O sistema pegará os registros (do mês selecionado) e fará um arquivo .pdf. Feito todo o processo esses arquivos gerados devem ser colocados em nuvem: na conta capaocamarabackup@gmail.com.
               </span>
             
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
                  <span className="absolute right-4 top-4 z-[-1]">
                     <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="38.9138"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 38.9138 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 38.9138 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 38.9138 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 38.9138 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 38.9138 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 38.9138 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 38.9138 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="1.42021"
                           r="1.42021"
                           transform="rotate(180 38.9138 1.42021)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 26.4157 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 26.4157 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 26.4157 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 26.4157 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 26.4157 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 26.4157 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 26.4157 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 26.4157 1.4202)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 13.9177 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 13.9177 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 13.9177 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 13.9177 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 13.9177 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 13.9177 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 13.9177 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="1.42019"
                           r="1.42021"
                           transform="rotate(180 13.9177 1.42019)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 1.41963 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 1.41963 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 1.41963 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 1.41963 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 1.41963 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 1.41963 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 1.41963 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 1.41963 1.4202)"
                           fill="#53915a"
                           />
                     </svg>
                  </span>
               </div>
            </div>
         </div>




         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               bg-white
               rounded-xl
               relative
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
               "
               >
               <span className="text-green-900 font-semibold text-lg block mb-4">
               Tutorial
               </span>
               <h2 className="font-bold text-gray-800 mb-5 text-[42px]">
               Registros
                <span className="text-base text-body-color  font-semibold text-lg block mb-4">
                /Como funcionam?
                  </span>
               </h2>
               <span className="text-base text-body-color">
                 O registro de visitas é utilizado para registrar a entrada e saída da comunidade na câmara de vereadores.<br/>  Enquanto que o interno é para os servidores. <br/> Para registrar alguém no interno é necessário que essa pessoa já esteja cadastrada no sistema (em usuários).
               </span>
             
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
                                 #4fb88c
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
                  <span className="absolute right-4 top-4 z-[-1]">
                     <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="38.9138"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 38.9138 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 38.9138 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 38.9138 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 38.9138 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 38.9138 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 38.9138 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 38.9138 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="1.42021"
                           r="1.42021"
                           transform="rotate(180 38.9138 1.42021)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 26.4157 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 26.4157 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 26.4157 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 26.4157 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 26.4157 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 26.4157 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 26.4157 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 26.4157 1.4202)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 13.9177 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 13.9177 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 13.9177 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 13.9177 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 13.9177 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 13.9177 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 13.9177 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="1.42019"
                           r="1.42021"
                           transform="rotate(180 13.9177 1.42019)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 1.41963 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 1.41963 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 1.41963 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 1.41963 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 1.41963 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 1.41963 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 1.41963 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 1.41963 1.4202)"
                           fill="#53915a"
                           />
                     </svg>
                  </span>
               </div>
            </div>
         </div>




         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               bg-white
               rounded-xl
               relative
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
               "
               >
               <span className="text-green-900 font-semibold text-lg block mb-4">
               Tutorial
               </span>
               <h2 className="font-bold text-gray-800 mb-5 text-[42px]">
               Banco
                <span className="text-base text-body-color  font-semibold text-lg block mb-4">
                /Como acessar o mongodb? 
                  </span>
               </h2>
               <span className="text-base text-body-color">
                 <ul>
                    <li>
                       Acesse "cloud.mongodb.com", acesse pelo google com o email da portaria. (capaoportaria@gmail.com)
                    </li>
                      Terá apenas um banco de dados, e o nome dele será "CapaoPortaria". O login e senha deles estão no arquivo da TI de senhas.
                 </ul>
               </span>
             
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
                  <span className="absolute right-4 top-4 z-[-1]">
                     <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="38.9138"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 38.9138 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 38.9138 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 38.9138 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 38.9138 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 38.9138 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 38.9138 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 38.9138 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="1.42021"
                           r="1.42021"
                           transform="rotate(180 38.9138 1.42021)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 26.4157 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 26.4157 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 26.4157 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 26.4157 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 26.4157 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 26.4157 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 26.4157 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 26.4157 1.4202)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 13.9177 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 13.9177 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 13.9177 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 13.9177 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 13.9177 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 13.9177 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 13.9177 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="1.42019"
                           r="1.42021"
                           transform="rotate(180 13.9177 1.42019)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 1.41963 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 1.41963 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 1.41963 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 1.41963 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 1.41963 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 1.41963 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 1.41963 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 1.41963 1.4202)"
                           fill="#53915a"
                           />
                     </svg>
                  </span>
               </div>
            </div>
         </div>





         <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               className="
               bg-white
               rounded-xl
               relative
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
               "
               >
               <span className="text-green-900 font-semibold text-lg block mb-4">
               Tutorial
               </span>
               <h2 className="font-bold text-gray-800 mb-5 text-[42px]">
               Banco
                <span className="text-base text-body-color  font-semibold text-lg block mb-4">
                /O sistema não está mais listando nada? 
                  </span>
               </h2>
               <span className="text-base text-body-color">
                  A conexão com o banco foi perdida. Isso, provavelmente, é causado pela troca de ip do computador.
                  <ul>
                     <li>
                        1. Acesse o mongo db
                     </li>
                     <li>
                        2. Vá em databases, na categoria deployment.
                     </li>
                     <li>
                        3. No banco, clique em connect, e selecione o botão "go back".
                     </li>
                     <li>
                        4. Clique em "ip access List Tab", vá em edit, e clique no botão "ADD CURRENT IP ADDRESS".
                     </li>
                     <li>

                     </li>
                  </ul>
               </span>
             
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
                  <span className="absolute right-4 top-4 z-[-1]">
                     <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <circle
                           cx="38.9138"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 38.9138 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 38.9138 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 38.9138 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 38.9138 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 38.9138 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 38.9138 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 38.9138 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="38.9138"
                           cy="1.42021"
                           r="1.42021"
                           transform="rotate(180 38.9138 1.42021)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 26.4157 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 26.4157 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 26.4157 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 26.4157 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 26.4157 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 26.4157 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 26.4157 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="26.4157"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 26.4157 1.4202)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 13.9177 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 13.9177 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 13.9177 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 13.9177 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 13.9177 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 13.9177 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 13.9177 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="13.9177"
                           cy="1.42019"
                           r="1.42021"
                           transform="rotate(180 13.9177 1.42019)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="87.4849"
                           r="1.42021"
                           transform="rotate(180 1.41963 87.4849)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="74.9871"
                           r="1.42021"
                           transform="rotate(180 1.41963 74.9871)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="62.4892"
                           r="1.42021"
                           transform="rotate(180 1.41963 62.4892)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="38.3457"
                           r="1.42021"
                           transform="rotate(180 1.41963 38.3457)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="13.634"
                           r="1.42021"
                           transform="rotate(180 1.41963 13.634)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="50.2754"
                           r="1.42021"
                           transform="rotate(180 1.41963 50.2754)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="26.1319"
                           r="1.42021"
                           transform="rotate(180 1.41963 26.1319)"
                           fill="#53915a"
                           />
                        <circle
                           cx="1.41963"
                           cy="1.4202"
                           r="1.42021"
                           transform="rotate(180 1.41963 1.4202)"
                           fill="#53915a"
                           />
                     </svg>
                  </span>
               </div>
            </div>
         </div>


      </div>
   </div>
</section>
    </div>
    );
};

export default Center;