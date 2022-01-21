
import { getRepository } from 'typeorm';
import { Users } from '../entities/Users';
import { Enderecos } from './../entities/Enderecos';

type EnderecosRequest = {
  endereco: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  usuario_id: number
}

export class CreateEnderecosService {
  async execute({
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    uf,
    cep,
    usuario_id
  }: EnderecosRequest) {    
   
    const repo = getRepository(Enderecos);
    const repoUsuarios = getRepository(Users)

    if (!await repoUsuarios.findOne(usuario_id)) {
      return new Error("Usuário não encontrado");
    }

    const end = repo.create({
      endereco,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      cep,
      usuario_id
    })

    await repo.save(end);

    return end
  }
}