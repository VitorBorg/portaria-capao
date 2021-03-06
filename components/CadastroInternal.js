import React, { useEffect, useState } from "react";
import api from "../pages/services/api";
import moment from "moment";

function CadastroInternal({
  clients,
  setClientsMain,
  onClose,
  theId,
  setRefresh,
}) {
  const [clientsList, setClientsList] = useState([]);
  const [clientsSearch, setClientsSearch] = useState([]);

  const [databaseClients, setDatabaseClients] = useState([]);

  const [name, setName] = useState("");

  const [hourEnter, setHourEnter] = useState("07:00");
  const [hourEnterFlag, setHourEnterFlag] = useState(false);
  const [hourLeft, setHourLeft] = useState("00:00");
  const [hourLeftFlag, setHourLeftFlag] = useState(false);

  const [userType, setUserType] = useState("null");

  const [errors, setErrors] = useState({ name: null });
  const [duplicateError, setDuplicateError] = useState("");

  //console.log("before errors: " + errors)
  const isValidFormData = () => {
    if (userType == "") {
      setErrors({ userType: "Selecione uma função!" });
      return false;
    }
    if (name == "" || name == "Campo obrigatório") {
      setErrors({ name: "Selecione uma pessoa!" });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmitCreateClient = async (e) => {
    if (theId) {
      e.preventDefault();

      //if(!theId.name && !theId.email) return

      try {
        let iId = theId._id;

        await api.put(`/regInternal/${iId}`, {
          name,
          userType,
          hourEnter,
          hourLeft,
        });

        setClientsMain(
          clients.map((client) =>
            client._id === iId
              ? { name, userType, hourEnter, hourLeft, _id: iId }
              : client
          )
        );

        setName("");
        setUserType("");
        setHourEnter("07:00");
        setHourLeft("00:00");
        setHourEnterFlag(false);
        setHourLeftFlag(false);

        onClose();
        setRefresh(true);
      } catch (e) {
        console.log(e);
      }
    } else {
      e.preventDefault();

      try {
        const { data } = await api.post("/regInternal", {
          name,
          userType,
          hourEnter,
          hourLeft,
        });

        setClientsMain(clients.concat(data.data));

        setName("");
        setUserType("");
        setHourEnter("07:00");
        setHourLeft("13:00");
        setHourEnterFlag(false);
        setHourLeftFlag(false);

        onClose();
        setRefresh(true);
      } catch (e) {
        console.log("error: " + e);
      }
    }
  };

  useEffect(() => {
    if (theId) {
      setUserType(theId.userType);
      setHourEnter(theId.hourEnter);
      setHourLeft(theId.hourLeft);
      setName(theId.name);

      //  console.log("useEffect: ", theId)
    }
  }, [theId]);

  //ALERT DUPLICATE
  useEffect(() => {
    if (strcmp(name, "") != 0) {
      databaseClients.filter((client) =>
        strcmp(client.name, name) == 0
          ? setDuplicateError("Usuário duplicado")
          : null
      );
    }
  }, [name]);

  /////////  GET LIST TO CADASTRO
  function strcmp(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  //Getting data from database
  useEffect(() => {
    api.get("/user").then(({ data }) => {
      setClientsList(data.data);
      //console.log("List: ", data.data)
    });

    api.get("/regInternal").then(({ data }) => {
      setDatabaseClients(
        data.data.filter(
          (userNumber) =>
            strcmp(
              userNumber.createdAt.substring(0, 10),
              moment().format("YYYY-MM-DD")
            ) == 0
        )
      );
    });
  }, []);

  /////////////////////Search implementation
  useEffect(() => {
    setClientsSearch(
      clientsList.filter((client) => strcmp(client.phoneSecond, userType) == 0)
    );
  }, [userType]);

  ///////////////////////////////////////////////////////////////////////
  const handleChangeUserType = (text) => {
    setUserType(text);
  };

  const handleChangeName = (text) => {
    setDuplicateError("");
    setName(text);
  };

  const handleChangeHourEnter = (text) => {
    setHourEnterFlag(true);

    var hour =
      (text.getHours() + "").length == 1
        ? "0" + (text.getHours() + 3 + "")
        : text.getHours() + 3;
    var minute =
      (text.getMinutes() + "").length <= 1
        ? "0" + (text.getMinutes() + "")
        : text.getMinutes();

    setHourEnter(
      (hour.length == 3 ? hour.substring(1, 3) : hour) + ":" + minute
    );
  };

  const handleChangeHourLeft = (text) => {
    setHourLeftFlag(true);

    //console.log((text.getHours() + "").length + ", " + (text.getHours() + ""))
    let hour =
      (text.getHours() + "").length <= 1
        ? "0" + (text.getHours() + 3 + "")
        : text.getHours() + 3;
    let minute =
      (text.getMinutes() + "").length <= 1
        ? "0" + (text.getMinutes() + "")
        : text.getMinutes();

    setHourLeft(
      (hour.length == 3 ? hour.substring(1, 3) : hour) + ":" + minute
    );
  };

  const listDataShowEdit = !theId ? null : (
    <div className="">
      <p className="mb-2 font-semibold text-gray-700">Usuário</p>
      <input
        type="text"
        id="telSecundary"
        name="telSecundary"
        className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
        value={
          clientsList.length > 0
            ? clientsList.filter((user) => user._id == theId.name)[0].name +
              ", " +
              theId.userType
            : "Processando..."
        }
        readOnly="readOnly"
      />
    </div>
  );

  const listDataSearch =
    userType == "null" || theId ? (
      listDataShowEdit
    ) : (
      <div>
        <div className="">
          <p className="mb-2 font-semibold text-gray-700">Nome</p>
          <select
            type="text"
            name="name"
            placeholder="Campo obrigatório"
            className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
            id="name"
            required
            value={name}
            onChange={(e) => handleChangeName(e.target.value)}
          >
            <option value="null">Campo Obrigatório</option>
            {clientsSearch.map((client) => (
              <option key={client._id} value={client._id}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );

  useEffect(() => {
    const listener = (event) => {
      if (
        strcmp(duplicateError, "") == 0 &&
        (event.code === "Enter" || event.code === "NumpadEnter")
      ) {
        console.log("Enter key was pressed. Run your function.");
        handleSubmitCreateClient(event);
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [duplicateError, name, theId, userType, hourEnter, hourLeft]);

  return (
    <div>
      <div className="flex justify-center h-screen w-screen items-center antialiased">
        <div className="flex flex-col rounded-lg border border-gray-300 shadow-xl">
          <form onSubmit={handleSubmitCreateClient}>
            <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
              <p className="font-semibold text-gray-800">
                Registro de entrada Interno
              </p>
            </div>

            <div className="flex flex-col px-6 py-5 bg-gray-50">
              {
                //ALERT ERROR
                strcmp(duplicateError, "") != 0 && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-2">
                    <strong className="font-bold">Erro!</strong>
                    <span className="">{" Registro duplicado!"}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
                  </div>
                )
              }

              <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                {theId ? null : (
                  <div className=" mt-2 sm:mt-0">
                    <p className="mb-2 font-semibold text-gray-700">Função</p>
                    <select
                      type="text"
                      name="userType"
                      className="p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                      id="userType"
                      value={userType}
                      onChange={(e) => handleChangeUserType(e.target.value)}
                    >
                      <option value="null">Campo Obrigatório</option>
                      <option value="Vereador">Vereador</option>
                      <option value="Assessor">Assessor</option>
                      <option value="Funcionário">Funcionário</option>
                    </select>
                  </div>
                )}

                {listDataSearch}
              </div>

              <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5"></div>

              <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                <div className="w-full sm:w-1/2">
                  <p className="mb-2 font-semibold text-gray-700">
                    Horário de entrada
                  </p>
                  <input
                    type="time"
                    id="hourEnter"
                    name="hourEnter"
                    value={!hourEnterFlag && theId ? hourEnter : console.log()}
                    className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                    min="06:00"
                    max="22:00"
                    required
                    onChange={(e) =>
                      handleChangeHourEnter(e.target.valueAsDate)
                    }
                  />
                </div>

                {theId && theId.hourLeft != "00:00" && (
                  <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
                    <p className="mb-2 font-semibold text-gray-700">
                      Horário de Saída
                    </p>
                    <input
                      type="time"
                      id="hourLeft"
                      name="hourLeft"
                      value={
                        !hourLeftFlag && theId.hourLeft
                          ? hourLeft
                          : console.log()
                      }
                      className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                      min="06:00"
                      max="22:00"
                      required
                      onChange={(e) =>
                        handleChangeHourLeft(e.target.valueAsDate)
                      }
                    />
                  </div>
                )}
              </div>

              <hr />
            </div>
            <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
              <button
                className="px-4 py-2 text-white font-semibold bgRED rounded
          "
                onClick={onClose}
              >
                Cancelar
              </button>

              {strcmp(duplicateError, "") == 0 ? (
                <button
                  className="px-4 py-2 text-white font-semibold bgBLUE rounded"
                  type="submit"
                >
                  {theId ? "Atualizar" : "Cadastrar"}
                </button>
              ) : (
                <button className="px-4 py-2 text-white font-semibold bg-gray-500 rounded noClick">
                  <a>Cadastrar</a>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroInternal;
