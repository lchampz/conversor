export async function GetConversor(coinA, coinB) {
    const api_key = process.env.API_KEY
    let de_para = `${coinA}_${coinB}`
    const url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=${api_key}`
    const promise = await fetch(url)
    const data = await promise.json()

    try{
        if(data){
            return(data[de_para])
        } else {
            return(data.error)
        }
    } catch(err){

    }
}