import Cadastro from "../components/Cadastro";
import Head from 'next/head'

function numerosUteis() {
    return (
        <div className="">
        <Head>
          <title>Portaria</title>
          <link rel="icon" href="https://www.prefeitura.capaodoleao.com.br/wp-content/uploads/2017/01/brasao-a4-309x400.jpg" />
        </Head>
  
        <main className="">
          <Cadastro/>
        </main>
      </div>
    );
}

export default numerosUteis;