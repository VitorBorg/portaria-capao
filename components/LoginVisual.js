import { useEffect, useState } from "react"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
//import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { providers, getSession, csrfToken } from 'next-auth/react'

function LoginVisual({providers, csrfToken}){
	const {data: session } = useSession()
	const router = useRouter()

	console.log("i:", session)

	const [error, setError] = useState('')
	//const router = useRouter()

	const handleSubmit = async (event) => {
		event.preventDefault()
		//console.log(providers)

		let dataUsername = event.target.username.value
		let dataPassword = event.target.password.value

		const response = await signIn('credentials', {
			username: dataUsername.toString(),
			password: dataPassword.toString(),
			redirect: false
			//callbackUrl: `${window.location.origin}/` 
		})

		if(await !response.ok){
			setError("Usuário ou senha inválidos!")
			return;
		} else
		setError("")
		
		router.push('/')
		//console.log(response)
	}

	useEffect(() => {
		if(process.browser && (session != null || session))
		  router.push('/')   
	}, [,session])

    return(
	<div className="h-screen md:flex">
		<div
			className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-green-700 i justify-around items-center hidden">
			<div>
				<h1 className="text-white font-bold text-4xl font-sans">Portaria da Câmara</h1>
				<p className="text-white mt-1">Câmara de Vereadores de capão do Leão</p>

			</div>
		</div>
		<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">

			<form 
			className="bg-white" 
			onSubmit={handleSubmit}
			method="post"
			>

			{strcmp(error, '') != 0 && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-2">
					<strong className="font-bold">Erro!</strong>
					<span className="">{" " + error}</span>
					<span className="absolute top-0 bottom-0 right-0 px-4 py-3">
					</span>
					</div>
				)}

				<h1 className="text-gray-800 font-bold text-2xl mb-1">Entre com o seu login!</h1>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
								d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
						</svg>

						<input 
						className="pl-2 outline-none border-none" 
						type="text" 
						name="username" 
						placeholder="Nome de usuário" />
					</div>

					<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
							fill="currentColor">
							<path fillRule="evenodd"
								d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
								clipRule="evenodd" />
						</svg>

						<input 
						className="pl-2 outline-none border-none" 
						type="password" 
						name="password" 
						placeholder="Senha" />
					</div>

					<button 
					type="submit"
					className="block w-full bg-green-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
					>Entrar</button>

					<span className="text-gray-500 font-bold font-sans pt-2"
					><a href="/">Quer criar uma nova conta? Se cadastre!</a>
					</span>
					
			</form>
		</div>
	</div>
    )
}


function strcmp(a, b)
{   
    return (a<b?-1:(a>b?1:0));  
}



export default LoginVisual;