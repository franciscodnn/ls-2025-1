import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY

// Configuração da conexão no axios
const API = axios.create({
  baseURL: API_URL,
  headers: {
    common: {
      apikey: API_KEY,
      Authorization: `Bearer ${API_KEY}`,
    },
    post: {
      Prefer: 'return=representation',
    },
    patch: {
      Prefer: 'return=representation',
    },
  },
});

async function read(resource) {
    const { data, headers } = await API.get(resource);

    console.log(headers['content-type']);

    return data;
}

export default { read };