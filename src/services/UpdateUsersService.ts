
import { getRepository } from 'typeorm';
import { Users } from '../entities/Users';

type UserUpdateRequest = {
  id: number,
  nome: string;
  cpf: string;
}

export class UpdateUsersService {
  async execute({ id, nome, cpf }:UserUpdateRequest ): Promise<Users | Error> {
    const repo = getRepository(Users);

    const usuario = await repo.findOne(id);

    if(!usuario){
      return new Error("Usuário não cadastrado");
    }

    usuario.nome = nome ? nome : usuario.nome;
    usuario.cpf = cpf ? cpf : usuario.cpf;

    await repo.save(usuario);

    return usuario
  }
}