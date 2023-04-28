import { Subscription } from "src/core/subscription/entity/subscription.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'user'})
export class User {
    constructor(partialData: Partial<User>) {
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
    first_name: string;

    @Column({
        nullable: true
    })
    last_name: string;

    @Column({
        nullable: true,
        unique: true
    })
    email: string;

    @Column({
        nullable: true
    })
    phone: string;

    @Column({
        nullable: true
    })
    address: string;

    @OneToMany(() => Subscription, (subscription) => subscription.user)
    subscriptions: Subscription[];
}