
import { getRepository, getManager } from 'typeorm';
import { Users } from '../entities/Users';


export class GetAllUsersService {
  async execute() {
    const repo = getRepository(Users);

    const usuarios = await repo.find();

    return usuarios;
  }
}