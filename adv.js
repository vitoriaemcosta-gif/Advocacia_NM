// Links de navegação ativos
const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe 'active' do link que estava ativo antes
            document.querySelector('.nav-link.active').classList.remove('active');
            
            // Adiciona a classe 'active' no link que acabou de ser clicado
            this.classList.add('active');
        });
    });

// Efeito de envio no formulário
document.querySelector('.form-contato').addEventListener('submit', function() {
    const btn = document.querySelector('.btn-submit');
    btn.innerHTML = "Mensagem Enviada!";
    btn.style.background = "#b99851";
});

// NavBar Responsiva
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link 
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));