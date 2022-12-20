import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import senderRoutes from "./handlers/Sender";
import bikerRoutes from "./handlers/Biker";
import parclesRoutes from "./handlers/Parcel";

const app: express.Application = express()
const address:string = "localhost:8080"

app.use(bodyParser.json())

app.get("/", function (req: Request, res: Response) {
  res.send("Hello World!");
});

senderRoutes(app);
bikerRoutes(app);
parclesRoutes(app);

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;