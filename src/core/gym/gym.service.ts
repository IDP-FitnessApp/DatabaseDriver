import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Gym } from "./entity/gym.entity";
import { CreateGymDTO } from "./dto/CreateGymDTO";

@Injectable()
export class GymService {
    constructor(
        @InjectRepository(Gym, 'idp_database')
        private readonly gymRepository: Repository<Gym>,
    ) {}

    async createGym(gymData: CreateGymDTO) {
        try {
            const newGym = await this.gymRepository.save(this.gymRepository.create({
                name: gymData.name,
                address: gymData.address,
                phone: gymData.phone,
                email: gymData.email,
                open_time: gymData?.open_time,
                close_time: gymData?.close_time,
                capacity: gymData.capacity
            }));
            return newGym;
        }
        catch(error) {
            throw new HttpException('create_gym_failed', HttpStatus.CONFLICT);
        }
    }

    async getAllGyms() {
        return await this.gymRepository.find();
    }
}