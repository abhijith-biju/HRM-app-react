import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const API = axios.create({ baseURL: 'http://3.145.178.76:4000' });

const useApi = <T,>(url: string, params?: AxiosRequestConfig) => {
    const [response, setResponse] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refreshIndex, setRefreshIndex] = useState(0);

    const refresh = () => {
        setRefreshIndex(refreshIndex + 1);
    };

    useEffect(() => {
        let cancelled = false;
        const fetchData = async () => {
            try {
                setLoading(true);
                const response: AxiosResponse<T> = await API.get(url, params);
                if (!cancelled) {
                    setResponse(response.data);
                    setLoading(false);
                }
            } catch (err) {
                setError('error getting the data');
                setLoading(false);
            }
        };
        // fetchData();

        return () => {
            cancelled = true;
        };
    }, [url]);

    return { response, loading, error, refresh };
};

export default useApi;
