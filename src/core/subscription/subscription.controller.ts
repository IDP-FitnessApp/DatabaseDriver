import { Body, Controller, Post } from "@nestjs/common";
import { SubscriptionService } from "./subscription.service";
import { CreateSubscriptionDTO } from "./dto/CreateSubscriptionDTO";

@Controller('subscription')
export class SubscriptionController {
    constructor(
        private readonly subscriptionService: SubscriptionService
    ) {}

    @Post('create')
    async createSubscription(@Body() subscriptionData: CreateSubscriptionDTO) {
        return this.subscriptionService.createSubscription(subscriptionData);
    }
}