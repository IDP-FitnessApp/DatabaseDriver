import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "./dto/CreateUserDTO";

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post('create')
    async createUser(@Body() userData: CreateUserDTO) {
        return this.userService.createUser(userData);
    }
}