import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // Add your authentication logic here
    // For example, check if a valid JWT token exists in the request headers
    return true; // or false if the request should be denied
  }
}

/**
 * Guard: Class annotated w/ @Injectable implements CanActivate
 * Single repsonsibilty to handle logic if request can reach route handler
 */

// Example of using Authorization and Auth gurads 

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}