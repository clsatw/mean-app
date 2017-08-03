// set NODE_ENV environment variable at cmd prompt. e.g., set NODE_ENV = development
let envDir: string = process.env.NODE_ENV || 'development';
import cfg from './env/development';
export default cfg;