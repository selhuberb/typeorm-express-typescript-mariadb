import { DataSource } from 'typeorm';

import configSeed from 'orm/config/ormconfig-seed';

export const SeedAppDataSource = new DataSource(configSeed);
