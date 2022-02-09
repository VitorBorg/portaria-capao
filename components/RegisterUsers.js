import {
    PlusIcon,
	SaveIcon
} from "@heroicons/react/solid";
import React, {useEffect, useState} from "react";
import api from '../pages/services/api'
import CadastroNumberPhones from "./CadastroModalUsers";
import Card from "./Card";
import Pagination from "./Pagination";

function strcmp(a, b)
{   
    return (a<b?-1:(a>b?1:0));  
}

function RegisterUsers(){

	const [clientsMain, setClientsMain] = useState([])
	const [clientsSearch, setClientsSearch] = useState([])
	const [refresh, setRefresh] = useState(false)

	//to delete
	const [hasRegister, setHasRegister] = useState(false)
	const [tryDelete, setTryDelete] = useState(false)

	const [open, setOpen] = useState(false);
	const [idEdit, setIdEdit] = useState(null);

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage] = useState(20);

	const [search, setSearch] = useState("");
	

	//Getting data from database
	useEffect(() => {
		api.get('/user').then(({data}) => {
			setClientsMain(data.data)
		})

		api.get('/regInternal').then(({data}) => {
			setHasRegister(data.data.length > 0)
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

			if(!hasRegister){
				await api.delete(`/user/${_id}`)
				setClientsMain(clientsMain.filter(client => client._id !== _id))
			} else		
				setTryDelete(true)
			
				

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
	

	function gridList (arr) {
		return(
		(arr.map(client => (
			<div  key={client._id}>
				<Card 
					name={client.name}
					type={client.phoneSecond}
					img={<img className="object-scale-down w-32 h-32"
									src={client.link == '' ||  client.link == null?'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png'
										: client.link
									}
									alt="" />}
					buttons={<div>
							<button className="bgGREEN px-2 py-1 rounded-lg text-white font-semibold cursor-pointer text-[14px]"
							onClick={() => (setIdEdit(client), setOpen(!open))}
							>Editar</button>
							<button className="bgRED px-2 py-1 rounded-lg text-white font-semibold cursor-pointer ml-2 text-[14px]"
							onClick={() => handleDeleteClient(client._id, client.name)}
							>Excluir</button>
						</div>}
					/>
					</div>	
					
			)))
		)
	}

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

					<button className="bgGREEN px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer
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


{ console.log("has? " + tryDelete),tryDelete
?	(<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded ">
  <strong className="font-bold">Erro!</strong>
  <span className="">{" Você só pode excluir um usuário quando não houver registros no sistema!"}</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
		</span>
		</div>)
		: null}


		<div>
			<div>
			<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
				<div className="rounded-lg overflow-hidden">	
					<section className="grid grid-cols-6 2xl:grid-cols-7 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 space-x-3 pt-4">
							{loading == false ? search == ""? gridList(currentPosts) : gridList(clientsSearch) : <h1>Carregando</h1>}
					</section>

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