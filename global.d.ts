namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    GITHUB_TOKEN: string;
    GITHUB_USERNAME: string;
  }
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
