import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './user.entity';
import { SignUpDto } from './dtos/signupDto';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  const mockUserRepository = {
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getSignIn', () => {
    it('should return sign-in message', () => {
      expect(controller.getSignIn()).toBe('Page inscription');
    });
  });

  describe('postSignUp', () => {
    it('should return a message from service', async () => {
      const dto: SignUpDto = {
        username: 'john',
        email: 'john@example.com',
        password: 'securePass123',
      };

      jest.spyOn(service, 'userSignUp').mockResolvedValue('Account created');

      const result = await controller.postSignUp(dto);
      expect(result).toEqual({ message: 'Account created' });
      expect(service.userSignUp).toHaveBeenCalledWith(dto);
    });
  });
});
