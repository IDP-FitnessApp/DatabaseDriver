import { Module } from "@nestjs/common";
import { GymController } from "./gym.controller";
import { GymService } from "./gym.service";
import { Gym } from "./entity/gym.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [Gym],
            'idp_database',
        ),
    ],
    providers: [
        GymService
    ],
    controllers: [
        GymController
    ],
})
export class GymModule {}