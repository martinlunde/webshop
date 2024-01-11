
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestOptions = {
    query?: { [key: string]: string | number };
    body?: { [key: string]: unknown };
    disableToken?: boolean;
    disableRefresh?: boolean;
};

export async function handleRequest<TResponse>(method: RequestMethod, path: string, options?: RequestOptions): Promise<TResponse> {
    let queryString = '';

    if (options?.query) {
        Object.entries(options.query).forEach(([key, value], index) => {
            queryString += `${index === 0 ? '?' : '&'}${key}=${encodeURIComponent(value)}`;
        });        
    }

    const url = `${import.meta.env.VITE_API_URL}${path}${queryString}`;
    const headers: { [key: string]: string } = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    const result = await fetch(url, {
        method: method,
        headers: headers,
        body: options?.body ? JSON.stringify(options.body) : undefined,
    });
    
    return result.json()
}