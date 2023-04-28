import { Subscription } from "src/core/subscription/entity/subscription.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'workout'})
export class Workout {
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
    name: string;

    @Column({
        nullable: true
    })
    description: string;

    @Column({
        nullable: true
    })
    difficulty: string;

    @Column({
        nullable: true
    })
    type: string;

    @Column({
        nullable: true
    })
    duration_minutes: number;

    @Column({ name: 'subscription_id' })
    subscription_id: number;

    @ManyToOne(() => Subscription, (subscription) => subscription.workouts, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'subscription_id' })
    subscription: Subscription;
}