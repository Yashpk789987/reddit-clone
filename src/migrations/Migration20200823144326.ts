import { Migration } from '@mikro-orm/migrations';

export class Migration20200823144326 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user_" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "username" text not null, "password" text not null);');
    this.addSql('alter table "user_" add constraint "user__username_unique" unique ("username");');

    this.addSql('drop table if exists "user" cascade;');
  }

}
