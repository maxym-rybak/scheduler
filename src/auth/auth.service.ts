import { BadRequestException, Injectable } from '@nestjs/common'
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import { AuthLoginInput } from './dto/auth-login.input'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async loginUser(authLoginInput: AuthLoginInput): Promise<any> {
    const user = await this.userService.findOne({
      email: authLoginInput.email,
    })
    if (user && user.password === authLoginInput.password) {
      // const { password, ...result } = user;
      // this.jwtService.sign({ id: user.id });

      return {
        access_token: this.jwtService.sign({ id: user.id }),
      }
    }
    throw new BadRequestException('Wrong email or password')
  }

  // async login(user: any) {
  //   const payload = { username: user.username, sub: user.userId };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }
}
