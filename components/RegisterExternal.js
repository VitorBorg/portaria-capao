import { PlusIcon, LogoutIcon, DotsVerticalIcon } from "@heroicons/react/solid";

import React, { useEffect, useState } from "react";
import api from "../pages/services/api";

import CadastroNumberPhones from "./CadastroExternal";
import FilterDay from "./FilterDay";
import FilterName from "./FilterName";

import Pagination from "./Pagination";
import moment from "moment";

function strcmp(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function RegisterExternal() {
  const [databaseClients, setDatabaseClients] = useState([]);
  const [clientsMain, setClientsMain] = useState([]);
  const [clientsSearch, setClientsSearch] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const [open, setOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [openDay, setOpenDay] = useState(false);
  const [openName, setOpenName] = useState(false);
  const [idEdit, setIdEdit] = useState(null);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);

  const [searchDay, setSearchDay] = useState("");
  const [searchName, setSearchName] = useState("");
  const [search, setSearch] = useState("");

  //Getting data from database
  useEffect(() => {
    api.get("/regExternal").then(({ data }) => {
      setDatabaseClients(data.data);
      setRefresh(false);
    });
  }, [, refresh]);

  /*//Refresh
	useEffect(() => {
		api.get('/regExternal').then(({data}) => {
			setDatabaseClients(data.data)
		})
	}, [refresh])
	*/

  //Getting data from database
  useEffect(() => {
    setClientsMain(
      databaseClients.filter(
        (client) =>
          strcmp(
            client.createdAt.substring(0, 10),
            moment().format("YYYY-MM-DD")
          ) == 0
      )
    );
  }, [databaseClients]);

  /////////////////////Search implementation
  useEffect(() => {
    //filtro de nome no dia atual
    if (search != "") {
      setClientsSearch(
        clientsMain.filter((client) =>
          client.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    //filtro de dia
    else if (searchDay != "") {
      setClientsMain(
        databaseClients.filter(
          (client) => strcmp(client.createdAt.substring(0, 10), searchDay) == 0
        )
      );
    }
    //filtro de nome em todos os dias
    else if (searchName != "") {
      setClientsMain(
        databaseClients.filter((client) =>
          client.name.toLowerCase().includes(searchName.toLowerCase())
        )
      );
    }
  }, [search, searchDay, searchName]);

  ///////////////// PAGINATION
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setPosts(clientsMain);
      setLoading(false);
    };

    fetchPosts();
  }, [clientsMain]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts
    .slice(0)
    .reverse()
    .slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  ///////////////// Delete user implementation
  const handleDeleteClient = async (_id) => {
    try {
      await api.delete(`/regExternal/${_id}`);
      setClientsMain(clientsMain.filter((client) => client._id !== _id));
    } catch (e) {
      console.log(e);
    }
  };

  const handleGetSearch = (text) => {
    setSearch(text);
  };

  function gridList(arr) {
    return arr.map((client) => (
      <tr key={client._id}>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-full"
                src="https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="text-gray-900 whitespace-no-wrap">{client.name}</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {client.phoneFirst}
          </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">
            {client.createdAt != null
              ? client.createdAt.substring(0, 10).split("-").reverse().join("/")
              : "processando..."}
          </p>
        </td>

        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div
            className="
						flex"
          >
            <button
              className="bgGREEN px-4 py-2 rounded-full text-white font-semibold cursor-pointer"
              onClick={() => (setIdEdit(client), setOpen(!open))}
            >
              Editar
            </button>
            <button
              className="bgRED px-4 py-2 rounded-full text-white font-semibold cursor-pointer ml-2"
              onClick={() => handleDeleteClient(client._id)}
            >
              Excluir
            </button>
          </div>
        </td>
      </tr>
    ));
  }
  const dropDown = (
    <div className="py-1" role="none">
      <a
        href="#"
        className="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-0"
        onClick={() => (
          setOpenDay(!openDay),
          setOpenDropDown(!openDropDown),
          (setSearchName(""), setSearchDay(""), setSearch(""), setRefresh(true))
        )}
      >
        Filtro por data
      </a>
      <a
        href="#"
        className="text-gray-700 block px-4 py-2 text-sm"
        role="menuitem"
        tabIndex="-1"
        id="menu-item-1"
        onClick={() => (
          setOpenName(!openName),
          setOpenDropDown(!openDropDown),
          (setSearchName(""), setSearchDay(""), setSearch(""), setRefresh(true))
        )}
      >
        Filtro por nome
      </a>
      {(searchName != "" || searchDay != "" || search != "") && (
        <a
          href="#"
          className="text-gray-700 block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-1"
          onClick={() => (
            setSearchName(""), setSearchDay(""), setSearch(""), setRefresh(true)
          )}
        >
          Limpar Filtros
        </a>
      )}
    </div>
  );

  return (
    <div className="container">
      <div className="pt-10 w-content">
        <div className="bg-white p-8 rounded-md w-full">
          <div className=" flex justify-between pb-6">
            <div>
              <h2 className="text-gray-600 font-semibold">
                Registro de entrada de visitantes
              </h2>
              <span className="text-xs">Entradas na c??mara</span>
            </div>
            <div className="flex content-center justify-between">
              <div className="flex bg-gray-50 items-center p-2 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>

                <input
                  className="bg-gray-50 outline-none ml-1 block "
                  type="text"
                  name=""
                  id=""
                  placeholder="Pesquisar..."
                  onChange={(e) => handleGetSearch(e.target.value)}
                />
              </div>
              <div className="lg:ml-40 ml-10 mr-12 pr-8 space-x-8">
                <button
                  className="bgGREEN px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer
					"
                  onClick={() => (setIdEdit(null), setOpen(!open))}
                >
                  {" "}
                  <PlusIcon className="h-5 w-5" />
                </button>

                {open && (
                  <div className="modal">
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
                )}

                {/* /////////////////////////////////// MENU DROP DROWN */}
                <div className="inline-block">
                  <div>
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={() => setOpenDropDown(!openDropDown)}
                    >
                      <DotsVerticalIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <div
                    className="origin-top-right absolute mt-2 w-56 rounded-md shadow-lg bg-gray-200 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    {openDropDown && dropDown}
                  </div>
                </div>

                {openDay && (
                  <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                      <FilterDay
                        onClose={() => setOpenDay(!openDay)}
                        setSearch={setSearchDay}
                        currentDate={searchDay}
                      />
                    </div>
                  </div>
                )}

                {openName && (
                  <div className="modal">
                    <div className="overlay"></div>
                    <div className="modal-content">
                      <FilterName
                        onClose={() => setOpenName(!openName)}
                        setSearch={setSearchName}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="py-4">
              <div className="min-w-full rounded-lg">
                <div className="flex content-center">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Nome
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Telefone
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Criado em
                        </th>

                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Op????es
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {loading == false ? (
                        search == "" ? (
                          gridList(currentPosts)
                        ) : (
                          gridList(clientsSearch)
                        )
                      ) : (
                        <h1>Carregando</h1>
                      )}
                    </tbody>
                  </table>
                </div>

                <div>
                  <Pagination
                    postPerPage={postPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterExternal;
