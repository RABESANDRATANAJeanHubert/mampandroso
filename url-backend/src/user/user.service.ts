import { Injectable } from '@nestjs/common';
import { SignUpDto } from './dtos/signupDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dtos/loginDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

async userLogin(body: LoginDto) {
  const { email, password } = body;
  const user = await this.usersRepository.findOne({ where: { email } });
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }
  return user;
}

  async userSignUp(body: SignUpDto): Promise<string> {
    try {
      const hash = await bcrypt.hash(body.password, 10);
      const user = this.usersRepository.create({
        ...body,
        password: hash,
      });
      await this.usersRepository.save(user);
      return 'success';
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
