import { Comparable } from "../Comparable";
import {Item} from "../item/Item";
import {Travel} from "../travel/Travel";
import {Column, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

export class Customer implements Comparable {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private name: string;

    @Column()
    private email: string;

    @Column()
    private phone: number;

    @ManyToOne(type => Item,{cascade : true})
    private items: Item[];

    @ManyToOne(type => Travel,{cascade : true})
    private shipments: Travel[];

    @ManyToOne(type => Travel,{cascade : true})
    private transports: Travel[];

    public get $id(): number {
        return this.id;
    }

    public set $id(value: number) {
        this.id = value;
    }

    public get $name(): string {
        return this.name;
    }

    public set $name(value: string) {
        this.name = value;
    }

    public get $email(): string {
        return this.email;
    }

    public set $email(value: string) {
        this.email = value;
    }

    public get $phone(): number {
        return this.phone;
    }

    public set $phone(value: number) {
        this.phone = value;
    }

    public get $items(): Item[] {
        return this.items;
    }

    public get $shipments(): Travel[] {
        return this.shipments;
    }

    public get $transports(): Travel[] {
        return this.transports;
    }

    constructor() {
        this.items = [];
        this.shipments = [];
        this.transports = [];
    }

    public addTravel(travel: Travel): void {
        this.shipments.push(travel);
    }

    public chooseTravel(travel: Travel): void {
        this.transports.push(travel);
    }

    public addItem(item: Item): void {
        this.items.push(item);
    }

    equal(object: any): boolean {
        if (!(object instanceof Customer)) return false;
        return this.id === object.id;
    }
}
