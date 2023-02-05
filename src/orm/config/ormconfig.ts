import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const config: DataSourceOptions = {
  type: 'mariadb',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: ['src/orm/entities/**/*.js'],
  migrations: ['src/orm/migrations/**/*.js'],
  subscribers: ['src/orm/subscriber/**/*.js'],
  namingStrategy: new SnakeNamingStrategy(),
};

export default config;
