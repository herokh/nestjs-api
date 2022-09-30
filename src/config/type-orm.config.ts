import { configuration } from './configuration';

export const typeOrmConfiguration = async (): Promise<any> => {
  let config = await configuration();
  let result = {
    type: config.db.type,
    host: config.db.host,
    port: config.db.port,
    username: config.db.user,
    password: config.db.password,
    database: config.db.name,
    entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
    synchronize: true,
    logging: true,
  };
  return result;
};
