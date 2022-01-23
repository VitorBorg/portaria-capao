import {
    PlusIcon,
	SaveIcon
} from "@heroicons/react/solid";
import React, {useEffect, useState} from "react";
import api from '../pages/services/api'
import CadastroNumberPhones from "./CadastroModalUsers";
import Pagination from "./Pagination";


function RegisterUsers(){

	const [clientsMain, setClientsMain] = useState([])
	const [clientsSearch, setClientsSearch] = useState([])
	const [refresh, setRefresh] = useState(false)

	const [open, setOpen] = useState(false);
	const [idEdit, setIdEdit] = useState(null);

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(15);

	const [search, setSearch] = useState("");
	

	//Getting data from database
	useEffect(() => {
		api.get('/user').then(({data}) => {
			setClientsMain(data.data)
		})
		setRefresh(false)
	}, [])

	useEffect(() => {
		api.get('/user').then(({data}) => {
			setClientsMain(data.data)
		})
		setRefresh(false)
	}, [refresh])



	/////////////////////Search implementation
	useEffect(() => {
		if(search != "")
			setClientsSearch(clientsMain.filter(client => client.name.toLowerCase().includes(search.toLowerCase())))
	}, [search])

	///////////////// PAGINATION
	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true)
			setPosts(clientsMain)
			setLoading(false)
		}

		fetchPosts();
	}, [clientsMain])

	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
	const currentPosts = posts.slice(0).reverse().slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	///////////////// Delete user implementation
	const handleDeleteClient = async (_id) => {
		try {
			await api.delete(`/user/${_id}`)
			setClientsMain(clientsMain.filter(client => client._id !== _id))
		}
		catch(e){
			console.log(e)
		}
	}

	const handleGetSearch = (text) => {
		setSearch(text)
	}

	const showFunctionName = (value) => {


		switch(value){
			case '1':
				return 'Assessor'
			case '2':
				return 'Funcionário'  
			default:
				return 'Vereador'
		}
	}
	

	const listData = currentPosts.map(client => (
		<tr key={client._id}>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				<div className="flex items-center">
					<div className="flex-shrink-0 w-10 h-10">
						<img className="w-full h-full rounded-full"
							src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"
							alt="" />
					</div>
						<div className="ml-3">
							<p className="text-gray-900 whitespace-no-wrap">
							{client.name}
							
							</p>
						</div>
					</div>
			</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				<p className="text-gray-900 whitespace-no-wrap">
				{client.phoneSecond}
				</p>
			</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				<p className="text-gray-900 whitespace-no-wrap">{client.phoneFirst}</p>
			</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				<p className="text-gray-900 whitespace-no-wrap">{client.email}</p>
			</td>

			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

				<div className="
				flex">
					<button className="bg-green-400 px-4 py-2 rounded-full text-white font-semibold cursor-pointer"
					onClick={() => (setIdEdit(client), setOpen(!open))}
					>Editar</button>
					<button className="bg-red-400 px-4 py-2 rounded-full text-white font-semibold cursor-pointer ml-2"
					onClick={() => handleDeleteClient(client._id)}
					>Excluir</button>
				</div>
			</td>
	</tr>
 


	))

	
	const listDataSearch = clientsSearch.map(client => (
		<tr key={client._id}>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				<div className="flex items-center">
					<div className="flex-shrink-0 w-10 h-10">
						<img className="w-full h-full rounded-full"
							src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"
							alt="" />
					</div>
						<div className="ml-3">
							<p className="text-gray-900 whitespace-no-wrap">
							{client.name}
							
							</p>
						</div>
					</div>
			</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				<p className="text-gray-900 whitespace-no-wrap">
				{showFunctionName(client.phoneSecond)}
				</p>
			</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				<p className="text-gray-900 whitespace-no-wrap">{client.phoneFirst}</p>
			</td>
			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
				<p className="text-gray-900 whitespace-no-wrap">{client.email}</p>
			</td>

			<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">

				<div className="
				flex">
					<button className="bg-green-400 px-4 py-2 rounded-full text-white font-semibold cursor-pointer"
					onClick={() => (setIdEdit(client), setOpen(!open))}
					>Editar</button>
					<button className="bg-red-400 px-4 py-2 rounded-full text-white font-semibold cursor-pointer ml-2"
					onClick={() => handleDeleteClient(client._id)}
					>Excluir</button>
				</div>
			</td>
	</tr>

	))

    return(
        <div className="container">
            <div className="pt-10 w-content">
            
    <div className="bg-white p-8 rounded-md w-full">
	<div className=" flex items-center justify-between pb-6">
		<div>
			<h2 className="text-gray-600 font-semibold">Registro de Usuários</h2>
			<span className="text-xs">usuários no sistema</span>
		</div>
		<div className="flex items-center justify-between">
			<div className="flex bg-gray-50 items-center p-2 rounded-md">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fillRule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clipRule="evenodd" />
				</svg>

				<input className="bg-gray-50 outline-none ml-1 block "
				 type="text" 
				 name="" 
				 id="" 
				 placeholder="Pesquisar..."
				 onChange={(e) => handleGetSearch(e.target.value)}
				 />

          </div>
		  <div className="lg:ml-40 ml-10 mr-8 pr-8 space-x-8">	

					<button className="bg-green-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer
					"
					 onClick={() => (setIdEdit(null),setOpen(!open))}
					 > <PlusIcon className="h-5 w-5" />
					 </button>

					 {
						 open && (
							 <div 
							 className="modal">
								<div className="overlay"></div>
						 		<div className="modal-content">
									 <CadastroNumberPhones 
									 clients={clientsMain} 
									 setClientsMain={setClientsMain} 
									 onClose={() => setOpen(!open)}
									 theId={idEdit}
									 setRefresh={setRefresh}
									 />
								</div>
						 	</div>
						 )
					 }

                    

				</div>
			</div>
		</div>
		<div>
			<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
				
				<div>

					<table className="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Nome da instituição
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Tipo de usuário
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Telefone Primário
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Email
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Opções
								</th>
							</tr>
						</thead>

						<tbody>

						{loading == false ?search == ""? listData : listDataSearch : <h1>Carregando</h1>
						}

						</tbody>

					</table>
				</div>

					<div>
						<Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
					</div>

				</div>
			</div>
		</div>
	</div>


            </div>

        </div>


        
    );
}

export default RegisterUsers;