
import { getRepository } from 'typeorm';
import { Enderecos } from '../entities/Enderecos';


export class GetEnderecoService {
  async execute(id) {
    const repo = getRepository(Enderecos);

    const enderecos = await repo.find({usuario_id: id});

    if(!enderecos){
      return new Error("Endereço não encontrado");
    }

    return enderecos;
  }
}