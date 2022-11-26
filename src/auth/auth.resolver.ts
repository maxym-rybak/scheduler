import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { AuthService } from './auth.service'
import { AuthLoginInput } from './dto/auth-login.input'
import { LoginResponse } from './dto/login-response.type'

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  login(@Args('authLoginInput') authLoginInput: AuthLoginInput) {
    return this.authService.loginUser(authLoginInput)
  }
}
