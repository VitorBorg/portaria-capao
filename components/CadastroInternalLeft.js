import React, { useEffect, useState } from "react";
import api from "../pages/services/api";

function CadastroInternalLeft({
  clients,
  setClientsMain,
  onClose,
  theId,
  setRefresh,
  address,
}) {
  const [clientsList, setClientsList] = useState([]);
  const [clientsSearch, setClientsSearch] = useState([]);

  const [name, setName] = useState("");

  const [hourEnter, setHourEnter] = useState("07:00");
  const [hourEnterFlag, setHourEnterFlag] = useState(false);
  const [hourLeft, setHourLeft] = useState("00:00");
  const [hourLeftFlag, setHourLeftFlag] = useState(false);

  const [userType, setUserType] = useState("null");

  const [errors, setErrors] = useState({ name: null, email: null });

  //console.log("before errors: " + errors)
  const isValidFormData = () => {
    if (userType == "") {
      setErrors({ userType: "Selecione uma função!" });
      return false;
    }
    if (name == "") {
      setErrors({ name: "Selecione uma pessoa!" });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmitCreateClient = async (e) => {
    e.preventDefault();

    try {
      let iId = theId._id;

      setName(theId.name);
      setUserType(theId.userType);
      setHourEnter(theId.hourEnter);

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

    setRefresh(true);
  };

  useEffect(() => {
    if (theId) {
      setUserType(theId.userType);
      setHourEnter(theId.hourEnter);
      setHourLeft(theId.hourLeft);
      setName(theId.name);

      console.log("useEffect: ", theId);
    }
  }, [theId]);

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
  }, []);

  /////////////////////Search implementation
  useEffect(() => {
    setClientsSearch(
      clientsList.filter((client) => strcmp(client.phoneSecond, userType) == 0)
    );
  }, [userType]);

  ///////////////////////////////////////////////////////////////////////

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

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        handleSubmitCreateClient(event);
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [name, theId, userType, hourEnter, hourLeft]);

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
              <div className="flex flex-col w-content items-center mb-5 ">
                {theId && theId.hourLeft == "00:00" && (
                  <div className="mt-2">
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
                      className="p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
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
              <div className="pr-3">
                <button
                  className="px-4 py-2 text-white font-semibold bgRED rounded
            "
                  onClick={onClose}
                >
                  Cancelar
                </button>
              </div>

              <button
                className="px-4 py-2 text-white font-semibold bgBLUE rounded"
                type="submit"
              >
                {theId ? "Atualizar" : "Cadastrar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroInternalLeft;
