
import { getRepository } from 'typeorm';
import { Enderecos } from './../entities/Enderecos';


export class GetAllEnderecosService {
  async execute() {
    const repo = getRepository(Enderecos);

    const enderecos = await repo.find();

    return enderecos;
  }
}