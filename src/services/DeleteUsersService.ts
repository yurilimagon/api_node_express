
import { getRepository } from 'typeorm';
import { Users } from '../entities/Users';


export class DeleteUsersService {
  async execute(id: number) {
    const repo = getRepository(Users);

    if(!await repo.findOne(id)){
      return new Error("Usuário não encontrado");
    }

    await repo.delete(id);
  }
}