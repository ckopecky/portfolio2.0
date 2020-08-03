import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (url) => {

    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ err, setErr ] = useState(false);
    const [ errMsg, setErrMsg ] = useState('');

    useEffect(() => {
        let isSubscribed = true;
        setLoading(true);

        const getArticles = (link) => {
            const promise = axios.get(link);
            
            promise.then((response) => {
                const filtered = response.data.filter((item => {
                    return item.priority === true;
                }));
                console.log(filtered);
                if(isSubscribed) {
                    setData(filtered);
                    setLoading(false);
                }
            })
            .catch(err => {
                setErr(true);
                setErrMsg(err.message);
                setLoading(false);
            });
        };
        getArticles(url);
        return () => isSubscribed = false;
        
    }, []);

    return [ data, err, errMsg, loading ];

}