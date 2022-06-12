namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
    NODE_ENV: string;
    API_KEY: string;
  }
}
