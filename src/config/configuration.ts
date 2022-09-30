import { Default } from './config.interface';

export const configuration = async (): Promise<Default> => {
  const { config } = <{ config: Default }>(
    await import(`${__dirname}/envs/default`)
  );
  return config;
};
