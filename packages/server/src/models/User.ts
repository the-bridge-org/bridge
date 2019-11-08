import { Field, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @Field({
    nullable: true,
    description: "Only register, login, and me will return access token",
  })
  token?: string;

  @Field(() => Int)
  @Column({ default: (Date.now() / 1000) | 0 })
  createdAt: number;
}
