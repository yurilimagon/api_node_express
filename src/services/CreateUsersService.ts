
import { getRepository } from 'typeorm';
import { Users } from '../entities/Users';
type UserRequest = {
  nome: string;
  cpf: string;
}

export class CreateUsersService {
  async execute({ nome, cpf }:UserRequest ): Promise<Users | Error> {
    const repo = getRepository(Users);

    if(await repo.findOne({cpf})){
      return new Error("Usuário já registrado com este CPF");
    }

    const usuario = repo.create({
      nome,
      cpf
    })

    await repo.save(usuario);

    return usuario
  }
}