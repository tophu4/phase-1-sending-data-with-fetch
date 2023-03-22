// Add your code here
function submitData(username, email) { // 2 string args
    const inputData = {
        username: `${username}`,
        email: `${email}`
    }

    return fetch("http://localhost:3000/users",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(inputData)
    })
    .then(res => res.json())
    .then(json => {
        const htmlStr = `
            <div>
                <p>Username: ${json.username}</p>
                <p>Email: ${json.email}</p>
            </div>
            `;
        document.querySelector("body").innerHTML += htmlStr;
    })
    .catch(error => {
        alert("error - submitData()")
        console.log("error - submitData()")
    })
}