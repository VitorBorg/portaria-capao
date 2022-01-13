import {
    PlusIcon,
	SaveIcon
} from "@heroicons/react/solid";
import React, {useState} from "react";
import Cadastro from "./Cadastro";


function Register(){

	const [open, setOpen] = useState(false);

	const popuP = () => {
		console.log("Click")
		setOpen(!open)
	}


    return(
        <div>
            <div className="pt-10">
            
            <div className="bg-white p-8 rounded-md w-full">
	<div className=" flex items-center justify-between pb-6">
		<div>
			<h2 className="text-gray-600 font-semibold">Registro Interno</h2>
			<span className="text-xs">Entradas na câmara</span>
		</div>
		<div className="flex items-center justify-between">
			<div className="flex bg-gray-50 items-center p-2 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fillRule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clipRule="evenodd" />
				</svg>
				<input className="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="Pesquisar..."/>
          </div>
		  
		  <div className="lg:ml-40 ml-10 space-x-8">
					<button className="bg-green-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer
					"
					onClick={popuP}
					> <PlusIcon className="h-5 w-5" />
					</button>

					{
						open && (
							<div 
							className="modal">
								<div className="overlay"></div>
								<div className="modal-content"><Cadastro/>
								</div>
							</div>
						)
					}

					<button className="bg-yellow-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer"
					>Selecionar outro dia</button>

					</div>

			</div>
		</div>
		<div>
			<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
				<table className="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Nome
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Horário
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Temperatura
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Saída
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Opções
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div className="flex items-center">
										<div className="flex-shrink-0 w-10 h-10">
											<img className="w-full h-full rounded-full"
                                                src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"
                                                alt="" />
                                        </div>
											<div className="ml-3">
												<p className="text-gray-900 whitespace-no-wrap">
													Mário
												</p>
											</div>
										</div>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">06:20</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										15°
									</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">06:20</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

									<span
                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
										<span className="relative pl-2">Editar</span>
									</span>
									<span
                                        className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                        <span aria-hidden
                                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
									<span className="relative">Excluir</span>
									</span>

								</td>
							</tr>
						</tbody>
					</table>

					<div
						className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
						<span className="text-xs xs:text-sm text-gray-900">
                            Mostrando 1 página de 3
                        </span>
						<div className="inline-flex mt-2 xs:mt-0">
							<button
                                className="text-sm text-indigo-50 transition duration-150 hover:bg-green-500 bg-green-600 font-semibold py-2 px-4 rounded-l">
                                Anterior
                            </button>
							&nbsp; &nbsp;
							<button
                                className="text-sm text-indigo-50 transition duration-150 hover:bg-green-500 bg-green-600 font-semibold py-2 px-4 rounded-r">
                                Próximo
                            </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


            </div>

        </div>


        
    );
}

export default Register;