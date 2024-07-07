import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars { //variavle de enttorno
  PORT: number;
  DATABASE_URL: string;
}

const envsSchema = joi.object({  // validador de esquema si elpuerto no es un numero lanza errror
  PORT: joi.number().required(),
  DATABASE_URL: joi.string().required(), // REQUIRED ES OBLIGATORIO
})
.unknown(true);

const { error, value } = envsSchema.validate( process.env );


if ( error ) {
  throw new Error(`Config validation error: ${ error.message }`); // vañidacion si falta el puerto
}

const envVars:EnvVars = value; 


export const envs = {
  port: envVars.PORT,
 databaseUrl: envVars.DATABASE_URL,
}