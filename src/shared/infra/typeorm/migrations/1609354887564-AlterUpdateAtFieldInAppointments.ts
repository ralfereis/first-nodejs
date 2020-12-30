import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterUpdateAtFieldInAppointments1609354887564
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'updated-at');
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'upadte_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
    await queryRunner.dropColumn('appointments', 'upadte_at');
  }
}
