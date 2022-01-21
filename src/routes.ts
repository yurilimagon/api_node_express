import { Router } from "express";
import { CreateEnderecosController } from "./controllers/CreateEnderecosController";
import { CreateUsersController } from './controllers/CreateUsersController';
import { DeleteUsersController } from "./controllers/DeleteUsersController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { UpdateUsersController } from './controllers/UpdateUsersController';
import { DeleteEnderecosController } from './controllers/DeleteEnderecosController';
import { GetAllEnderecosController } from './controllers/GetAllEnderecosController';
import { UpdateEnderecosController } from './controllers/UpdateEnderecosController';
import { GetUserController } from './controllers/GetUserController';
import { GetEnderecoController } from './controllers/GetEnderecoController';

const routes = Router();

//Usuários
routes.get("/usuarios", new GetAllUsersController().handle);
routes.get("/usuario/:id", new GetUserController().handle);
routes.post("/usuarios", new CreateUsersController().handle);
routes.put("/usuarios", new UpdateUsersController().handle);
routes.delete("/usuarios", new DeleteUsersController().handle);

//Endereços
routes.get("/enderecos", new GetAllEnderecosController().handle);
routes.get("/endereco", new GetEnderecoController().handle);
routes.post("/enderecos", new CreateEnderecosController().handle);
routes.put("/enderecos/:id", new UpdateEnderecosController().handle);
routes.delete("/enderecos", new DeleteEnderecosController().handle);

export { routes };