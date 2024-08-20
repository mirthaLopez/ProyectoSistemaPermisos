async function GetUsers() { 
    try {
        const response = await fetch('http://localhost:3007/users');
        const data = await response.json();
        if (response.status === 200) { 
            console.log(42342342);
            
            return data;
        }else {
            console.log(data.error.message);   
        }
       
    } catch (error) { 
        console.error(`Fetch error`, error);
    }
}

export {GetUsers}