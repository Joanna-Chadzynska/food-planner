import { HttpClient } from 'models/HTTPClient';
import { createContext, useContext } from 'react';

const HTTPClientContext = createContext(
	new HttpClient('http://localhost:3001')
);

HTTPClientContext.displayName = 'httpClient';

const useHttpClient = () => {
	const clientInstance = useContext(HTTPClientContext);
	return clientInstance;
};

export default useHttpClient;
