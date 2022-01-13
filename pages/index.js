import Head from 'next/head'
import Center from '../components/Center'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Portaria</title>
        <link rel="icon" href="https://www.prefeitura.capaodoleao.com.br/wp-content/uploads/2017/01/brasao-a4-309x400.jpg" />
      </Head>

      <main className="flex">
        <SideBar/>
        <Center/>
      </main>
    </div>
  )
}
