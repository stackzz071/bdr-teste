// Show Modals
document.getElementById('loginBtn').onclick = function() {
    document.querySelector('.login-modal').style.display = 'block';
};
document.getElementById('registerBtn').onclick = function() {
    document.querySelector('.register-modal').style.display = 'block';
};

// Close Modals
function closeModal(type) {
    document.querySelector('.' + type + '-modal').style.display = 'none';
}

// Simulate Login
function login() {
    let user = document.getElementById('loginUser').value;
    let pass = document.getElementById('loginPass').value;
    alert('Login realizado para: ' + user);
    closeModal('login');
}

// Simulate Registration
function register() {
    let user = document.getElementById('registerUser').value;
    let email = document.getElementById('registerEmail').value;
    let pass = document.getElementById('registerPass').value;
    alert('Usuário registrado: ' + user);
    closeModal('register');
}

// Simulate Placing a Bet
function placeBet() {
    alert('Aposta realizada com sucesso!');
}
