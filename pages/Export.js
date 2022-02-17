import Head from 'next/head'
import ExportComponent from '../components/ExportComponent'
import SideBar from '../components/SideBar'
import CheckLogin from '../components/CheckLogin'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Portaria</title>
        <link rel="icon" href="https://www.prefeitura.capaodoleao.com.br/wp-content/uploads/2017/01/brasao-a4-309x400.jpg" />
      </Head>

      <main className="flex">
        <CheckLogin />
        <SideBar/>
        <ExportComponent/>
      </main>
    </div>
  )
}
