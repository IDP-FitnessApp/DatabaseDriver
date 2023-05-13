import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { SubscriptionService } from "./subscription.service";
import { CreateSubscriptionDTO } from "./dto/CreateSubscriptionDTO";

@Controller('subscription')
export class SubscriptionController {
    constructor(
        private readonly subscriptionService: SubscriptionService
    ) {}

    @Post('create')
    async createSubscription(@Req() request: {userId: string}, @Body() subscriptionData: CreateSubscriptionDTO) {
        return this.subscriptionService.createSubscription(request.userId, subscriptionData);
    }

    @Get('/user')
    async getSubscriptionsOfUser(@Req() request: {userId: string}) {
        return this.subscriptionService.getSubscriptionsOfUser(request.userId);
    }
}