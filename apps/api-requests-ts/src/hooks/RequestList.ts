/* eslint-disable no-lone-blocks */
import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { RequestBase } from "../configs/RequestBase";

export function RequestList<T = unknown>(url: string, options?: AxiosRequestConfig) {
    const [src, setSrc] = useState<T | null>(null);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        RequestBase.get(url, options)
            .then(response => {
                console.log(response);
                setSrc(response.data);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setIsFetching(false);
            })

    }, [url, options]);

    return { src, error, isFetching }
};