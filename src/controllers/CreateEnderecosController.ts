
import { Request, Response } from 'express';
import { CreateEnderecosService } from '../services/CreateEnderecosService';


export class CreateEnderecosController {
  async handle(request: Request, response: Response) {

    
    const endereco = String(request.body.params.endereco)
    const numero = Number(request.body.params.numero)
    const complemento = String(request.body.params.complemento)
    const bairro = String(request.body.params.bairro)
    const cidade = String(request.body.params.cidade)
    const uf = String(request.body.params.uf)
    const cep = String(request.body.params.cep)
    const usuario_id = Number(request.body.params.usuario_id)    

    const service = new CreateEnderecosService();

    const result = await service.execute({
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      cep,
      usuario_id
    });


    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}