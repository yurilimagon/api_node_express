
import { getRepository } from 'typeorm';
import { Enderecos } from './../entities/Enderecos';
import { Users } from './../entities/Users';

type EnderecoUpdateRequest = {
  id: number,
  endereco: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;
  usuario_id: number
}

export class UpdateEnderecosService {
  async execute({ 
    id,
    endereco,
    numero,
    complemento,
    bairro,
    cidade,
    uf,
    cep,
    usuario_id 
  }:EnderecoUpdateRequest) {
    const repo = getRepository(Enderecos);

    const repoUsers = getRepository(Users);

    const end = await repo.findOne(id);
    const usuario = await repoUsers.findOne(usuario_id);

    if(!end){
      return new Error("Endereço não cadastrado");
    }
    if(!usuario){
      return new Error("Usuário não cadastrado");
    }

    end.endereco = endereco ? endereco : end.endereco;
    end.numero = numero ? numero : end.numero;
    end.complemento = complemento ? complemento : end.complemento;
    end.bairro = bairro ? bairro : end.bairro;
    end.cidade = cidade ? cidade : end.cidade;
    end.uf = uf ? uf : end.uf;
    end.cep = cep ? cep : end.cep;
    end.usuario_id = usuario_id ? usuario_id : end.usuario_id;

    await repo.save(end);

    return end
  }
}