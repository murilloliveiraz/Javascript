const userInfo = async id => {
    try { const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    
    const data = await response.json()

    console.log(data)
    } catch(error) {
        console.log(error)
    }
}

userInfo(5)