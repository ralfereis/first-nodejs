import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterUpdateAtFieldInUsers1609354895102
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'updated-at');
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'upadte_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
    await queryRunner.dropColumn('users', 'upadte_at');
  }
}
