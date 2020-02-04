import ENV from '../../config/Env';


export const fetchEmpList = async () => {
    let stream = await fetch(`${ENV.local.API_BASE}/employees`);
    let result = await stream.json();
    return result;
}