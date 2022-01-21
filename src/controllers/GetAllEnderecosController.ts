
import { Request, Response } from 'express';
import { GetAllEnderecosService } from './../services/GetAllEnderecosService';


export class GetAllEnderecosController {
  async handle(request: Request, response: Response) {

    const service = new GetAllEnderecosService();

    const result = await service.execute();

    return response.json(result);
  }
}