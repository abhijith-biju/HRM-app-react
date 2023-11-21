import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const API = axios.create({ baseURL: 'http://3.145.178.76:4000' });

const useApi = <T,>(url: string, params?: AxiosRequestConfig) => {
    const [response, setResponse] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response: AxiosResponse<T> = await API.get(url, params);
                setResponse(response.data);
                setLoading(false);
            } catch (err) {
                setError('error getting the data');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { response, loading, error };
};

export default useApi;
