import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const configSeed: DataSourceOptions = {
  type: 'mariadb',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: ['src/orm/entities/**/*.js'],
  migrations: ['src/orm/seeds/**/*.js'],
  namingStrategy: new SnakeNamingStrategy(),
};

export default configSeed;
