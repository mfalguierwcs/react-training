import { useState, useEffect } from 'react';

const useFetch = (url,state,dispatch) => {
    useEffect(() => {
        dispatch && dispatch({type: 'setIsLoading', data: true});
        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            dispatch({type: 'setIsLoading', data: false});
            if (data.results.length > 0) {
                dispatch({type: 'setData', data: data});
            } else {
                return dispatch && dispatch({type: 'setError', data: 'Pas de données trouvées'});
            }
        })
        .catch(() => {
            dispatch({type: 'setIsLoading', data: false});
            return dispatch({type: 'setError', data: 'Une erreur est survenu'});
        })
    }, [state.isNewRequest])
}

export default useFetch;