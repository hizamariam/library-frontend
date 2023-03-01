import axios from "axios";
import { getItemFromLocalStorage } from "./localStorage";

const token = getItemFromLocalStorage('token');
export const api = axios.create({baseURL: 'http://165.232.71.167/api',
headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
}});
