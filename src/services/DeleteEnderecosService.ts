
import { getRepository } from 'typeorm';
import { Enderecos } from './../entities/Enderecos';


export class DeleteEnderecosService {
  async execute(id: number) {
    const repo = getRepository(Enderecos);

    if(!await repo.findOne(id)){
      return new Error("Endereço não encontrado");
    }

    await repo.delete(id);
  }
}