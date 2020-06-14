import { Pool } from 'pg';
import keys from './keys';
export const pool = new Pool(keys.database);