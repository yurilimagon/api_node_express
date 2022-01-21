
import { getManager, getRepository } from 'typeorm';
import { Users } from '../entities/Users';


export class GetUserService {
  async execute(id) {
    const repo = getRepository(Users);
    
    const usuario = await repo.findOne(id);    

    if(!usuario){
      return new Error("Usuário não encontrado");
    }

    return usuario;
  }
}