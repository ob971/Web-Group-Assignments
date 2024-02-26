import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { IsEmail } from 'class-validator';
import { Expense } from '../../expense/entity/expense.entity';
import { UserRole } from 'src/userRole/role.enum';
@Entity()
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsEmail()
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ type: 'enum', enum: UserRole, nullable: true })
  role: UserRole;

  @OneToMany(() => Expense, (expense) => expense.child)
  expenses: Expense[];

  async checkPassword(password: string) {
    const newPassword: string = await bcrypt.hash(password, this.salt);
    return this.password === newPassword;
  }
}
