const gridcontainer = document.getElementById('gridbackground');
const totalblocks = 400;
for (let i = 0; i < totalblocks; i++){
    const block = document.createElement('div');
    block.classList.add('block');
    const randomdelay = Math.random() * 0.27
    ;
    block.style.animationDelay = randomdelay + 's';
    gridcontainer.appendChild(block);
}
const loginform = document.getElementById('login');
const signinform = document.getElementById('sign');

function showlogin() {
    loginform.style.display = "block";
    signinform.style.display = "none";
}

function showsignup() {
    loginform.style.display = "none";
    signinform.style.display = "block";
}


document.getElementById('sign').onsubmit = async function (e) {
    e.preventDefault();

    const username = document.getElementById('signuser').value;
    const password = document.getElementById('signpass').value;

    try {
        const res = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await res.json();
        alert(data.msg);

    } 
    catch (err) {
        alert('Could not connect to server.');
    }
};
document.getElementById('login').onsubmit = async function (e) {
    e.preventDefault();

    const username = document.getElementById('loginuser').value;
    const password = document.getElementById('loginpass').value;

    try {
        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (data.ok){
            alert('login succesful' + username);
        }
        else{
            alert(data.msg);
            }
        }
    catch (err) {
        alert('Could not connect to server.');
    }


        };

    
