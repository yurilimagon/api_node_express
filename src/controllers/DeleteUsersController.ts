
import { Request, Response } from 'express';
import { DeleteUsersService } from '../services/DeleteUsersService';


export class DeleteUsersController {
  async handle(request: Request, response: Response) {
    const id = Number(request.query.id)
    
    const service = new DeleteUsersService();

    const result = await service.execute(Number(id));

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}