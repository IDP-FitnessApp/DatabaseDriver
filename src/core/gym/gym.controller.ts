import { Body, Controller, Post } from "@nestjs/common";
import { GymService } from "./gym.service";
import { CreateGymDTO } from "./dto/CreateGymDTO";

@Controller('gym')
export class GymController {
    constructor(
        private readonly gymService: GymService
    ) {}

    @Post('create')
    async createGym(@Body() gymData: CreateGymDTO) {
        return this.gymService.createGym(gymData);
    }
}