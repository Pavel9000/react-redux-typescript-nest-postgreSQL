import { Column, DataType, Model, Table } from "sequelize-typescript";
import { Iregistration } from '../types/user';


@Table({tableName: 'users'})
export class User extends Model<User, Iregistration> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string
    @Column({type: DataType.STRING, allowNull: false})
    password: string
    @Column({type: DataType.STRING, allowNull: false})
    date_born: string
}