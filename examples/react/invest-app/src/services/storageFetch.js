const API_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

const API_TOKEN=process.env.NEXT_PUBLIC_SUPABASE_KEY;

async function read(resource) {
  resource = `${API_URL}/${resource}`;

  const options = {
    headers: {
      apikey: API_TOKEN,
      Authorization: `Bearer ${API_TOKEN}`,
    },
    method: 'GET',
  };

  const res = await fetch(resource, options);

  return await res.json();
}

export default { read };