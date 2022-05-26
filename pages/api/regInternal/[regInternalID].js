import Phone from "../../../models/regInternalInfo";
import dbConnect from "../../services/db";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;
  const { regInternalID } = req.query;

  switch (method) {
    case "PUT":
      try {
        const { name, userType, hourEnter, hourLeft } = req.body;

        if (!name && !userType) throw "invalid data";

        await Phone.updateOne(
          { _id: regInternalID },
          {
            name: name,
            userType: userType,
            hourEnter: hourEnter,
            hourLeft: hourLeft,
          }
        );
        res.status(200).json({ success: true });
      } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, e });
      }

      break;

    case "DELETE":
      try {
        await Phone.deleteOne({ _id: regInternalID });

        res.status(202).json({ success: true });
      } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, e });
      }
  }
}
