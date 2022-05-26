import Phone from "../../../models/regInternalInfo";
import dbConnect from "../../services/db";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const phones = await Phone.find({});
        res.status(200).json({ success: true, data: phones });
      } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, e });
      }

      break;

    case "POST":
      try {
        const { name, userType, hourEnter, hourLeft } = req.body;

        if (!name && !userType) throw "invalid data";

        const phone = await Phone.create({
          name: name,
          userType: userType,
          hourEnter: hourEnter,
          hourLeft: hourLeft,
        });

        res.status(201).json({ success: true, data: phone });
      } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, e });
      }
  }
}
