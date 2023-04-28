import { Subscription } from "src/core/subscription/entity/subscription.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'gym'})
export class Gym {
    constructor(partialData: Partial<Gym>) {
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
    name: string;

    @Column({
        nullable: true
    })
    address: string;

    @Column({
        nullable: true
    })
    phone: string;

    @Column({
        nullable: true
    })
    email: string;

    @Column({
        nullable: true
    })
    open_time: string;

    @Column({
        nullable: true
    })
    close_time: string;

    @Column({
        nullable: true
    })
    capacity: number;

    @OneToMany(() => Subscription, (subscription) => subscription.gym)
    subscriptions: Subscription[];
}