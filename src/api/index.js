export const client = async (endpoint, { body, ...customConfig }) => {
  const headers = {
    'Content-Type': 'aplication/json',
  };
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  try {
    const response = await fetch(endpoint, config);
    if (!response.ok) throw new Error('faied to fetch');
    const data = await response.json();
    return data;
  } catch (err) {
    return Promise.reject(err.message);
  }
};

client.get = function (endpoint, customConfig = {}) {
  return client(endpoint, customConfig);
};

client.post = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, body });
};

client.delete = function (endpoint, customConfig = {}) {
  return client(endpoint, { ...customConfig, method: 'DELETE' });
};

client.patch = function (endpoint, body, customConfig = {}) {
  return client(endpoint, { ...customConfig, body, method: 'PATCH' });
};
