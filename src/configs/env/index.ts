type Environments = {
  appUrl: string;
  port: number;
  apiMyReadings: string;
};

export const envs = (): Environments => {
  return {
    appUrl: process.env.APP_URL,
    port: Number(process.env.PORT),
    apiMyReadings: process.env.API_MY_READINGS,
  };
};

export default {
  folderPath: '.env',
};
