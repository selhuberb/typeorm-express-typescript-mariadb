import { DataSource } from 'typeorm';

import { AppDataSource } from './data-sources/data-source';

export const dbCreateConnection = async (): Promise<DataSource | null> => {
  try {
    const conn = await AppDataSource.initialize();
    //const conn = await AppDataSource.initialize();
    console.info(
      `Database connection success. Node env: '${process.env.NODE_ENV}' Database: '${conn.options.database}'`,
    );
  } catch (err) {
    if (err.name === 'AlreadyHasActiveConnectionError' || err.name === 'CannotConnectAlreadyConnectedError') {
      const activeConnection = AppDataSource.manager.connection;
      return activeConnection;
    }
    console.log(err);
  }
  return null;
};
