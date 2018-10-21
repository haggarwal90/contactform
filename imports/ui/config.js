import axios from 'axios';

export const contactFormREST = axios.create({
  'baseURL': `/`,
  'timeout': 50000,
  'headers': {
    'Content-Type': 'application/json',
  },
});