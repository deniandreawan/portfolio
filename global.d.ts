namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    GITHUB_TOKEN: string;
    ANALYZE: string;
  }
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
