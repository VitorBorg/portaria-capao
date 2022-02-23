import React, {useEffect, useState} from "react";
import pdfMaker from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import api from "../../pages/services/api";

function pdfFile (date, info, external, user, backupTypePdf){
  pdfMaker.vfs = pdfFonts.pdfMake.vfs

  let month = "null";

  if(backupTypePdf != 2)
  switch (date) {
    case '01':
      month = "Janeiro"
      break;
    case '02':
      month = "Fevereiro"
      break;
    case '03':
      month = "Março"
      break;
    case '04':
      month = "Abril"
      break;
    case '05':
      month = "Maio"
      break;
    case '06':
      month = "Junho"
      break;
    case '07':
      month = "Julho"
      break;
    case '08':
      month = "Agosto"
      break;
    case '09':
      month = "Setembro"
      break;
    case '10':
      month = "Outubro"
      break;
    case '11':
      month = "Novembro"
      break;
    case '12':
      month = "Dezembro"
      break;
  } else {
    month = ""
    

}

  const reportTitle = [
    {
    text: month,
    fontSize: 15,
    bold: true,
    margin: [15,20,0,45], // l,t,r,b
    }
  ]

//EXTERNO
const dadosExternal = external.map((client) => {
  return [
          {text: client.name, fontSize: 9, margin: [0,2,0,2]},
          {text: client.phoneFirst, fontSize: 9, margin: [0,2,0,2]},
          {text: client.temperature, fontSize: 9, margin: [0,2,0,2]},
          {text: client.createdAt.substring(0,10).split('-').reverse().join('/'), fontSize: 9, margin: [0,2,0,2]}
  ]
})

const detailsExternal = [
  {
    table: {
      headerRows: 1,
      widths: [65,65,65,65],
      body: [
              [
                {text:'Nome', style:'tableHeader', fontSize:10},
                {text:'Telefone', style:'tableHeader', fontSize:10},
                {text:'Temperatura', style:'tableHeader', fontSize:10},
                {text:'Data', style:'tableHeader', fontSize:10}
              ],
            ...dadosExternal
            ]
      },
  }
];


///REGISTRO INTERNO
  const dados = info.map((client) => {
    return [
            {text: 
              ((user.filter(userData => userData._id == client.name))[0].name),
              fontSize: 9, margin: [0,2,0,2]},
            {text: client.userType, fontSize: 9, margin: [0,2,0,2]},
            {text: client.temperature, fontSize: 9, margin: [0,2,0,2]},
            {text: client.hourEnter, fontSize: 9, margin: [0,2,0,2]},
            {text: client.hourLeft, fontSize: 9, margin: [0,2,0,2]},
            {text: client.createdAt.substring(0,10).split('-').reverse().join('/'), fontSize: 9, margin: [0,2,0,2]}
    ]
  })

  const details = [
    {
      table: {
        style: 'tableExample',
        margin: [0,2,0,2],
        headerRows: 1,
        widths: [65,65,65,65,65,65],
        body: [
                [
                  {text:'Nome', style:'tableHeader', fontSize:10},
                  {text:'tipo de Usuário', style:'tableHeader', fontSize:10},
                  {text:'Temperatura', style:'tableHeader', fontSize:10},
                  {text:'Entrada', style:'tableHeader', fontSize:10},
                  {text:'Saída', style:'tableHeader', fontSize:10},
                  {text:'Data', style:'tableHeader', fontSize:10}
                ],
              ...dados
              ]
        },
    }
  ];

  function rodape(currentPage, pageCount){
    return [
      {
        text: currentPage + '/' + pageCount,
        margin: [0,10,20,0], // l,t,r,b
        alignment: "right"
      }
    ]
  }

  const docDefinitions = {
    pageSize: 'A4',
    pageMarings: [15,50,15,40],

    header: [reportTitle],
    content: [
              {text: 'Registro de visitas', style: 'subheader'},
              'Tabela que registra a entrada e saída de pessoas sem vínculo com a Câmara de Vereadores de Capão do Leão.',
              {text: '', style: 'subheader'},
              '',
            detailsExternal,
            {text: 'Registro de Empregados', pageBreak: 'before', style: 'subheader'},
            'Tabela que registra a entrada e saída de vereadores, assessores e funcionários na Câmara de Vereadores de Capão do Leão.',
            {text: '', style: 'subheader'},
            '',
            details
          ],
    footer: rodape,
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 30, 0, 10]
      },
      Titleheader: {
        pageBreak: 'before',
        fontSize: 18,
        bold: true,
        margin: [0, 40, 0, 10]
      },
      subheader: {
        fontSize: 16,
        bold: true,
        margin: [0, 10, 0, 5]
      },
      tableExample: {
        margin: [0, 5, 0, 15]
      },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: 'black'
      }
    }
  }

  pdfMaker.createPdf(docDefinitions).download();
};


// Create Document Component
function PdfCreate ({dataExternal, dataInternal, dataUser, finished, date, detl, btnDelete, backupTypePdf}) {

  const [processingDone, setProcessingDone] = useState(false)

  const creating = () => {
    if(dataExternal != undefined && dataInternal != undefined && dataUser != undefined){
      detl('Dados encontrados... Processando...')

      pdfFile(date, dataInternal, dataExternal, dataUser, backupTypePdf);
      
      btnDelete(

           !processingDone && (
             <div className="container">
              <div className="flex flex-wrap mb-5 mt-5 content-center">
                  <a className="px-4 py-2 text-white font-semibold rounded bg-blue-500 cursor-pointer"
                   href="/Export"
                      >
                        Concluir processo
                  </a>
              </div>


             {backupTypePdf == 0 && (<button className="flex flex-wrap px-4 py-2 text-white font-semibold bg-red-400 rounded
                  content-center"
                  onClick={() => (
                    dataExternal.map((client) => {
                      api.delete(`/regExternal/${client._id}`)
                    }),
              
                    dataInternal.map((client) => {
                      api.delete(`/regInternal/${client._id}`)
                    }),

                    setProcessingDone(true)
                  )}>
                    Excluir estes arquivos do banco
              </button>)
            }
            </div>
          
          )
      )


      finished();
    }
    else {
      <div>
        {detl('Buscando registros no banco e montando o pdf...')}
      </div>
    }
		
	}

  return(
    <div>
      {creating()}
    </div>
  )
}

export default PdfCreate;