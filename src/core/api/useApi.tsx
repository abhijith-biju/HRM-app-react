import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const API = axios.create({ baseURL: 'https://vipinms.cloud/', timeout: 10000 });

const useApi = <T,>(url: string, params?: AxiosRequestConfig) => {
    const [response, setResponse] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refreshIndex, setRefreshIndex] = useState(0);

    const refresh = () => {
        setRefreshIndex(refreshIndex + 1);
    };
    console.log('inside useAPI', url);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                console.log('inside useEffect', url);
                const response: AxiosResponse<T> = await API.get(url, params);
                // console.log(url, response.data);

                if (!cancelled) {
                    setResponse(response.data);
                    setLoading(false);
                }
            } catch (err) {
                if (!cancelled) {
                    setError('error getting the data');
                    setLoading(false);
                }
            }
        };
        let cancelled = false;
        fetchData();

        return () => {
            cancelled = true;
        };
    }, []);

    return { response, loading, error, refresh };
};

export default useApi;
