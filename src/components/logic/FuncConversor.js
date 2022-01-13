function fetchCurrency(coinA, coinB) {
    let de_para = `${coinA}_${coinB}`
    let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=d39289403a83a2b386ec`
    return fetch(url)
}

export async function GetConversor(coinA, coinB) {
    let de_para = `${coinA}_${coinB}`
    const promise = await fetchCurrency(coinA, coinB)
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