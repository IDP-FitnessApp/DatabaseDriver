import { Gym } from "src/core/gym/entity/gym.entity";
import { User } from "src/core/user/entity/user.entity";
import { Workout } from "src/core/workout/entity/workout.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'subscription'})
export class Subscription {
    constructor(partialData: Partial<Subscription>) {
        Object.assign(this, partialData);
    }

    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @CreateDateColumn({
        nullable: false,
    })
    created_at: Date;

    @UpdateDateColumn({
        nullable: false,
    })
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;

    @Column({
        nullable: true
    })
    price: number;

    @Column({
        nullable: true
    })
    currency: string;

    @Column({
        nullable: true
    })
    name: string;

    @Column({
        nullable: true
    })
    start_date: string;

    @Column({
        nullable: true
    })
    end_date: string;

    @Column({ name: 'user_id' })
    user_id: number;

    @Column({ name: 'gym_id' })
    gym_id: number;

    @ManyToOne(() => User, (user) => user.subscriptions, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Gym, (gym) => gym.subscriptions, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'gym_id' })
    gym: Gym;

    @OneToMany(() => Workout, (workout) => workout.subscription)
    workouts: Workout[];
}