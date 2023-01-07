import { DataSource } from 'typeorm';

import config from 'orm/config/ormconfig';

export const AppDataSource = new DataSource(config);
