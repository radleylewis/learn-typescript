/**
 * satisfies operator
 **/

type Config = {
  port: string | number;
  url: string;
  pass: string;
  user: string;
};

const config = {
  port: 888,
  url: "http://databaseconnectionurl.com",
  pass: "1234admin",
  user: "boris",
} satisfies Config;

config.port


export { config }

