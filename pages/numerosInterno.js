import RegisterUsers from "../components/RegisterUsers";
import SideBar from "../components/SideBar";
import Head from 'next/head'
import CheckLogin from '../components/CheckLogin'

function numerosInterno() {
    return (
        <div className="">
        <Head>
          <title>Portaria</title>
          <link rel="icon" href="https://www.prefeitura.capaodoleao.com.br/wp-content/uploads/2017/01/brasao-a4-309x400.jpg" />
        </Head>
  
        <main className="flex">
        <CheckLogin />
          <SideBar/>
          <RegisterUsers/>
        </main>
      </div>
    );
}

export default numerosInterno;