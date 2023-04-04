import React from "react";

export default function useFetch() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const request = React.useCallback(async (URL, options = null) => {
        let response;
        let data;

        try {
            setLoading(true);
            
            response = await fetch(URL, options);
            data = await response.json();

            if (response.ok)
                setData(data);
            else
                throw new Error(data.message);
        } catch (error) {
            setError(error.message);
            setData(null);
        } finally {
            setLoading(false);
            return { response, data };
        }
    
    }, []);

    return { data, loading, error, request };
}
