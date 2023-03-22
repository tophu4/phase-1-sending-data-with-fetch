// Add your code here
function submitData(name, email) { // 2 string args
    const inputData = {
        name: `${name}`,
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
                <p>${json.id}</p>
            </div>
            `;
        document.querySelector("body").innerHTML += htmlStr;
    })
    .catch(error => {

        const htmlError = `
            <div>
                <p>${error.message}</p>
            </div>
        `;

        document.querySelector("body").innerHTML += htmlError;
    })
}