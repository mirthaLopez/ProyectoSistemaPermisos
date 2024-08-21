////////////////////////////Post request to the server/////////////////////////

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

////////////////////////////////Post Historial//////////////////////////////////////
async function PostHistory(nombre, sede, fechaSalida, fechaIngreso, codigoPc, estado) {
    const solicitudStatus={
        nombre,
        sede,
        fechaSalida,
        fechaIngreso,
        codigoPc,
        estado,
    }
    try {
        const response = await fetch('http://localhost:3007/aprovedRequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(solicitudStatus)
        });
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error(error);
    }
}
export {PostHistory};