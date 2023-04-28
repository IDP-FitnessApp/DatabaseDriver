import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { CreateUserDTO } from "./dto/CreateUserDTO";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User, 'idp_database')
        private readonly userRepository: Repository<User>,
    ) {}

    async createUser(userData: CreateUserDTO) {
        try {
            const newGym = await this.userRepository.save(this.userRepository.create({
                first_name: userData.first_name,
                last_name: userData.last_name,
                address: userData.address,
                phone: userData.phone,
                email: userData.email
            }));
            return newGym;
        }
        catch(error) {
            throw new HttpException('create_user_failed', HttpStatus.CONFLICT);
        }
    }
}