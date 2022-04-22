const register = ({email, username, password}) =>{

    axios.post("http://localhost:5000/api/auth/register",{
        email,
        username,
        password
    })
    .then(res => {return res})
    .catch(err => {return err})
}


const login = ({email, username, password}) =>{

    axios.post("http://localhost:5000/api/auth/login",{
        email,
        username,
        password
    })
    .then(res => {return res})
    .catch(err => {return err})
}


const getFamousQuestion = () =>{
    axios.get("http://localhost:5000/api/qusetions/fquest")
    .then(res => {return res})
    .catch(err => {return err})

}




