import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Enderecos } from './Enderecos';

@Entity("usuarios")
export class Users {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
  
  @Column()
  cpf: string;

  @OneToMany(type => Users, enderecos => Enderecos, {
    cascade: true
  })
  enderecos: Enderecos[];
  

  @CreateDateColumn()
  created_at: Date;

}