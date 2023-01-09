import { MigrationInterface, QueryRunner } from "typeorm";

export class Task1665129120723 implements MigrationInterface {
    name = 'Task1665129120723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "title" character varying(30) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "title" character varying(20) NOT NULL`);
    }

}
