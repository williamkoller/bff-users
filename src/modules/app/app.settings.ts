import { ConfigModule } from '@nestjs/config';
import envFolder, { envs } from '@/configs/env';

export const imports = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: envFolder.folderPath,
    load: [envs],
  }),
];
