import 'dotenv/config';
import { cleanEnv } from 'envalid';
import { str } from 'envalid/dist/validators';

const env = cleanEnv(process.env,{
    BACKEND_URL: str(),
    NODE_ENV: str({choices:['development','test','production','staging']})
})

export default env;