import { Entity, Column, CreateDateColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Users } from './Users';

@Entity("enderecos")
export class Enderecos {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  endereco: string;

  @Column()
  numero: number;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  cep: string;

  @Column()
  usuario_id: number;

  @ManyToOne(type => Users, enderecos => Enderecos, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: "usuario_id" })
  usuario: Users;

  @CreateDateColumn()
  created_at: Date;

}