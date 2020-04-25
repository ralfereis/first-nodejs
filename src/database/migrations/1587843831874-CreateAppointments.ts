import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateAppointments1587843831874
  implements MigrationInterface {
  name = 'CreateAppointments1587843831874';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "appointments" ADD "upadte_at" TIMESTAMP NOT NULL DEFAULT now()`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "appointments" DROP COLUMN "upadte_at"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "appointments" DROP COLUMN "created_at"`,
      undefined,
    );
  }
}
