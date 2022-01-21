
import { Request, Response } from 'express';
import { GetEnderecoService } from './../services/GetEnderecoService';


export class GetEnderecoController {
  async handle(request: Request, response: Response) {

    const id = Number(request.query.id) 

    const service = new GetEnderecoService();

    const result = await service.execute(id);

    return response.json(result);

  }
}