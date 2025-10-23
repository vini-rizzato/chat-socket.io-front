const loginAPI = async () => { 
    let data = await fetch('localhost:8080');
    
    console.log(data);
}

export default loginAPI;