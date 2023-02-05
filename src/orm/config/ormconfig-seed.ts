import 'dotenv/config';
import path from 'path';

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
  entities: [path.join(__dirname, '..', 'entities', '**', '*.*')],
  migrations: [path.join(__dirname, '..', 'migrations', '**', '*.*')],
  namingStrategy: new SnakeNamingStrategy(),
};

export default configSeed;
