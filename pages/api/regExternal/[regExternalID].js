import Phone from "../../../models/regExternalInfo";
import dbConnect from "../../services/db";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;
  const { regExternalID } = req.query;

  switch (method) {
    case "PUT":
      try {
        const { name, email, firstNumber, hourEnter, hourLeft } = req.body;

        if (!name && !firstNumber) throw "invalid data";

        await Phone.updateOne(
          { _id: regExternalID },
          {
            name: name,
            email: email,
            firstNumber: firstNumber,
            hourEnter: hourEnter,
            hourLeft: hourLeft,
          }
        );
        res.status(200).json("PHONE PUT: " + firstNumber);
      } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, e });
      }

      break;

    case "DELETE":
      try {
        await Phone.deleteOne({ _id: regExternalID });

        res.status(202).json({ success: true });
      } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, e });
      }
  }
}
