import 'dotenv/config';
import Application from './App';

const app = new Application(5000);
app.startListening();
