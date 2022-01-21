
import { Request, Response } from 'express';
import { UpdateUsersService } from './../services/UpdateUsersService';


export class UpdateUsersController {
  async handle(request: Request, response: Response) {
    const id = Number(request.body.params.id);
    const { nome, cpf } = request.body.params;

    const service = new UpdateUsersService();

    const result = await service.execute({ id, nome, cpf});

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}