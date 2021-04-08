import React, { createContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, data: action.payload };
        default:
            throw new Error('No action type found');
    }
};

const defaultState = {
    data: [],
    publishedUrl: 'https://hytale.com/api/blog/post/published',
    searchUrl: 'https://hytale.com/api/blog/post/slug/',
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const fetchData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: 'FETCH_DATA', payload: data });
    };

    useEffect(() => {
        fetchData(state.publishedUrl);
    }, [state.publishedUrl]);

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
