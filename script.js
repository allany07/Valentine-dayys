document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const envelope = document.getElementById('envelope');
    const cardFront = document.getElementById('card-front');
    const cardBack = document.getElementById('card-back');
    const closeButton = document.getElementById('close-button');
    
    // Evento de clique no envelope
    envelope.addEventListener('click', function() {
        // Esconde o envelope com animação
        envelope.style.transform = 'scale(0.8)';
        envelope.style.opacity = '0';
        
        setTimeout(function() {
            envelope.classList.add('hidden');
            
            // Mostra a frente do cartão com animação
            cardFront.classList.remove('hidden');
            setTimeout(function() {
                cardFront.style.transform = 'scale(1)';
                cardFront.style.opacity = '1';
            }, 50);
        }, 300);
    });
    
    // Evento de clique na frente do cartão
    cardFront.addEventListener('click', function() {
        // Esconde a frente do cartão com animação
        cardFront.style.transform = 'scale(0.8)';
        cardFront.style.opacity = '0';
        
        setTimeout(function() {
            cardFront.classList.add('hidden');
            
            // Mostra o verso do cartão com animação
            cardBack.classList.remove('hidden');
            setTimeout(function() {
                cardBack.style.transform = 'scale(1)';
                cardBack.style.opacity = '1';
            }, 50);
        }, 300);
    });
    
    // Evento de clique no botão fechar
    closeButton.addEventListener('click', function() {
        // Esconde o verso do cartão com animação
        cardBack.style.transform = 'scale(0.8)';
        cardBack.style.opacity = '0';
        
        setTimeout(function() {
            cardBack.classList.add('hidden');
            
            // Mostra o envelope com animação
            envelope.classList.remove('hidden');
            setTimeout(function() {
                envelope.style.transform = 'scale(1)';
                envelope.style.opacity = '1';
            }, 50);
        }, 300);
    });
    
    // Inicialização: garante que apenas o envelope esteja visível
    cardFront.style.opacity = '0';
    cardFront.style.transform = 'scale(0.8)';
    
    cardBack.style.opacity = '0';
    cardBack.style.transform = 'scale(0.8)';
    
    envelope.style.opacity = '1';
    envelope.style.transform = 'scale(1)';
});
