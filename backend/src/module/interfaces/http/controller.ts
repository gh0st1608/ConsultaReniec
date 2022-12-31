import { Request, Response } from "express";
import PersonApplication from "../../application/person.application";
import Person from "../../domain/person";
//import { Tokens } from "../../domain/auth.repository";

export default class {
  application: PersonApplication;

  constructor(readonly app: PersonApplication) {
    this.application = app;
    this.getPersons = this.getPersons.bind(this);
  }

  async getPersons(req: Request, res: Response) {
    const { document, fatherLastname, motherLastname, names, ubigeousAddress, address, payload } = req.body;
    console.log("req.body", req.body)
    const persons = await this.application.getPersons( {document, fatherLastname, motherLastname, names, ubigeousAddress, address, payload});

    if (persons) {
      res.json({persons: persons});
    } else {
      res.status(404).send("Not found person");
    }
  }


  /*
  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const results: Tokens = await this.application.register(
      name,
      email,
      password
    );
    res.json(results);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const tokens: Tokens | null = await this.application.login(email, password);

    if (tokens) {
      res.json(tokens);
    } else {
      res.status(401).send("Not found user");
    }
  }

  validateAccessToken(req: Request, res: Response) {
    const { accessToken } = req.body;
    this.application
      .validateAccessToken(accessToken)
      .then(() => res.json({ valid: true }))
      .catch((err: { status: number; message: string }) => {
        console.log(err);
        res.status(err.status).send(err.message);
      });
  }
*/



}
