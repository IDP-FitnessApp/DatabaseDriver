import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CoreModule } from './core/core.module';
import { User } from './core/user/entity/user.entity';
import { Gym } from './core/gym/entity/gym.entity';
import { Subscription } from './core/subscription/entity/subscription.entity';
import { Workout } from './core/workout/entity/workout.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'idp_database',
      useFactory: (): TypeOrmModuleOptions => ({
        type: 'mysql',
        host: 'mysql',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'idp_database',
        entities: [User, Gym, Subscription, Workout],
        synchronize: true,
      }),
    }),
    CoreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
