////////////////////////////Get request to the server/////////////////////////

async function PostRequest(solicitud) {
    try {
        const response = await fetch('http://localhost:3007/pendingRequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(solicitud)
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error(error);
    }
}
export {PostRequest};