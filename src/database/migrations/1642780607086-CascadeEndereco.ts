import {MigrationInterface, QueryRunner} from "typeorm";

export class CascadeEndereco1642780607086 implements MigrationInterface {
    name = 'CascadeEndereco1642780607086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`enderecos\` DROP FOREIGN KEY \`FK_702a2d47c2a196c1c8596dbf2b5\``);
        await queryRunner.query(`ALTER TABLE \`enderecos\` ADD CONSTRAINT \`FK_702a2d47c2a196c1c8596dbf2b5\` FOREIGN KEY (\`usuario_id\`) REFERENCES \`usuarios\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`enderecos\` DROP FOREIGN KEY \`FK_702a2d47c2a196c1c8596dbf2b5\``);
        await queryRunner.query(`ALTER TABLE \`enderecos\` ADD CONSTRAINT \`FK_702a2d47c2a196c1c8596dbf2b5\` FOREIGN KEY (\`usuario_id\`) REFERENCES \`usuarios\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
