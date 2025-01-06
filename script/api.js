const headers = { 'Content-Type': 'application/json' }; // Ensures the server knows we are sending JSON
export const getDataFromApi = (url) => {
    return (
        fetch(url).then((res) => res.json()).then((result) => result)
            .catch((err) => {
                console.error("error in getDataFromApi", err);
                return err
            })
    )
};

export const postData = (url, data) => {
    return (fetch(url, {
        'method': 'POST',
        headers,
        body: JSON.stringify(data)
    }).then((res) => res.json()).then((result) => {
        return result
    }).catch((err) => {
        console.error('error in postData API', err)
        return err
    }))
}

export const patchData = (url, dataObject, id) => {
    return (
        fetch(`${url}/${id}`, {
            'method': "PATCH",
            headers,
            body: JSON.stringify(dataObject)
        }).then((res) => res).then((result) => result)
            .catch((err) => {
                console.error('error in patchData API', err);
                return err
            })
    )
}

export const putApi = (url, dataObject, id) => {
    return (
        fetch(`${url}/${id}`, {
            'method': "PATCH",
            headers,
            body: JSON.stringify(dataObject)
        }).then((res) => res).then((result) => result)
            .catch((err) => {
                console.error('error in put API', err);
                return err
            })
    )
}

export const deleteMethod = (url, id) => {
    return (
        fetch(`${url}/${id}`, {
            method: 'DELETE'
        }).then((res) => res).then((result) => result)
            .catch((err) => {
                console.error('error in delete API', err)
            })
    )
}