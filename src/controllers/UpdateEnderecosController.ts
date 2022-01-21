
import { Request, Response } from 'express';
import { UpdateEnderecosService } from './../services/UpdateEnderecosService';


export class UpdateEnderecosController {
  async handle(request: Request, response: Response) {
    const id = Number(request.params.id);
    const numero = Number(request.body.numero)
    const usuario_id = Number(request.body.usuario_id)

    const {
      endereco,
      complemento,
      bairro,
      cidade,
      uf,
      cep
    } = request.body

    const service = new UpdateEnderecosService();

    const result = await service.execute({
      id,
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      cep,
      usuario_id
    });

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}