import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private entityManager: EntityManager,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = new User();
    user.name = createUserDto.name;
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    return this.entityManager.save(user);
  }

  async getUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async getUserById(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id: Number(id) } });
  }
}
