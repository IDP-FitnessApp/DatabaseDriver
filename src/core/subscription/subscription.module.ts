import { Module } from "@nestjs/common";
import { SubscriptionService } from "./subscription.service";
import { SubscriptionController } from "./subscription.controller";
import { Subscription } from "./entity/subscription.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature(
            [Subscription],
            'idp_database',
        ),
    ],
    providers: [
        SubscriptionService
    ],
    controllers: [
        SubscriptionController
    ]
})
export class SubscriptionModule {}