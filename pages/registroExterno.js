import Register from "../components/register";
import SideBar from "../components/SideBar";
import Head from 'next/head'

function registroInterno() {
    return (
        <div className="">
        <Head>
          <title>Portaria</title>
          <link rel="icon" href="https://www.prefeitura.capaodoleao.com.br/wp-content/uploads/2017/01/brasao-a4-309x400.jpg" />
        </Head>
  
        <main className="flex">
          <SideBar/>
          <Register/>
        </main>
      </div>
    );
}

export default registroInterno;