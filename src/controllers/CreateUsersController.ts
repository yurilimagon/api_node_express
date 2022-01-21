
import { Request, Response } from 'express';
import { CreateUsersService } from '../services/CreateUsersService';


export class CreateUsersController {
  async handle(request: Request, response: Response) {
    const { nome, cpf } = request.body.params    

    const service = new CreateUsersService();

    const result = await service.execute({ nome, cpf });

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}