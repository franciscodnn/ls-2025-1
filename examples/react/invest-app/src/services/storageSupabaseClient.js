import { createClient } from '@supabase/supabase-js'


const API_URL = 'https://trpriohefxcplyfyywxx.supabase.co';

const API_TOKEN=process.env.NEXT_PUBLIC_SUPABASE_KEY;

// Configuração da conexão
const supabase = createClient(API_URL, API_TOKEN);

async function read(resource) {
    let { data: investments, error } = 
    await supabase.from(resource).select('*');

    if(error) throw error;

    return await investments;
}

export default { read };