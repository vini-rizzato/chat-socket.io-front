export default async function loginAPI(){ 
    let data = await fetch('localhost:8080/register');
    
    console.log(data);
}
