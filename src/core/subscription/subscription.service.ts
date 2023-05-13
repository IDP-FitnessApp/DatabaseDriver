import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Subscription } from "./entity/subscription.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSubscriptionDTO } from "./dto/CreateSubscriptionDTO";

@Injectable()
export class SubscriptionService {
    constructor(
        @InjectRepository(Subscription, 'idp_database')
        private readonly subscriptionRepository: Repository<Subscription>,
    ) {}

    async createSubscription(userId: string, subscriptionData: CreateSubscriptionDTO) {
        try {
            const newGym = await this.subscriptionRepository.save(this.subscriptionRepository.create({
                gym_id: subscriptionData.gym_id,
                user_id: userId,
                price: subscriptionData.price,
                currency: subscriptionData.currency,
                name: subscriptionData.name,
                start_date: subscriptionData.start_date,
                end_date: subscriptionData.end_date
            }));
            return newGym;
        }
        catch(error) {
            throw new HttpException('create_gym_failed', HttpStatus.CONFLICT);
        }
    }

    async getSubscriptionsOfUser(userId: string) {
        return await this.subscriptionRepository.find({
            where: {
                user_id: userId
            }
        });
    }
}