import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

export const api = axios.create({
    baseURL: process.env.URL_SUPABASE,
    headers: {
        apikey: process.env.API_KEY_SUPABASE,
        authorization: process.env.AUTHORIZATION_SUPABASE
    }
})