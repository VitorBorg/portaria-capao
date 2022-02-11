import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


function CheckLogin(){
    const {data: session } = useSession()
    const router = useRouter()

    //http://localhost:3041/registroInterno
    console.log("session", session, session === null)
  
    useEffect(() => {
        handleSubmit()  
    }, [session])

    const handleSubmit = () => {
        if(session !== undefined){

            if(session === null)
                router.push('/login')  
        }
    }

  return(
        <div>
        </div>
    );
}

export default CheckLogin;