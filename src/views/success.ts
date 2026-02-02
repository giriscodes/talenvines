import { fontImports, cssVariables, resetStyles } from './shared/styles';

export function renderSuccessPage(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>💕 Yay! It's a Yes!</title>
  ${fontImports}
  <style>
    ${resetStyles}
    ${cssVariables}
    
    @keyframes confetti-fall {
      0% {
        transform: translateY(-100px) rotate(0deg) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(720deg) scale(0.5);
        opacity: 0;
      }
    }
    
    @keyframes celebrate {
      0% { transform: scale(0) rotate(-10deg); opacity: 0; }
      50% { transform: scale(1.1) rotate(5deg); }
      100% { transform: scale(1) rotate(0deg); opacity: 1; }
    }
    
    @keyframes jump {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    
    body {
      min-height: 100vh;
      font-family: 'Quicksand', sans-serif;
      background: linear-gradient(135deg, var(--soft-pink) 0%, var(--coral) 50%, var(--warm-yellow) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }
    
    .confetti {
      position: fixed;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    }
    
    .confetti-piece {
      position: absolute;
      animation: confetti-fall 4s ease-in-out infinite;
    }
    
    .container {
      text-align: center;
      z-index: 1;
      padding: 3rem 2.5rem;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 50px;
      box-shadow: 
        0 30px 100px rgba(232, 69, 69, 0.3),
        0 0 0 1px rgba(255, 255, 255, 0.5);
      max-width: 500px;
      animation: celebrate 0.8s ease-out;
    }
    
    .celebration {
      font-size: 5rem;
      margin-bottom: 1rem;
      animation: jump 0.6s ease-in-out infinite;
    }
    
    h1 {
      font-family: 'Dancing Script', cursive;
      font-size: 3.5rem;
      color: var(--deep-rose);
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1.4rem;
      color: var(--soft-pink);
      line-height: 1.8;
      margin-bottom: 1rem;
    }
    
    .hearts-row {
      font-size: 2rem;
      margin: 1.5rem 0;
      animation: pulse 1s ease-in-out infinite;
    }
    
    .message {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem;
      color: var(--rose-gold);
      font-style: italic;
      margin-top: 1.5rem;
      padding: 1rem;
      background: linear-gradient(135deg, var(--cream) 0%, var(--peach) 100%);
      border-radius: 20px;
    }
  </style>
</head>
<body>
  <div class="confetti" id="confetti"></div>
  
  <div class="container">
    <div class="celebration">🎉</div>
    <h1>Yaaay!</h1>
    <p>You said YES! 💕</p>
    <div class="hearts-row">💕 💖 💝 💗 💕</div>
    <p>Happy Valentine's Day!</p>
    <p class="message">
      Chalo fir chale momos khane?
    </p>
  </div>
  
  <script>
    const confettiContainer = document.getElementById('confetti');
    const confettiEmojis = ['💕', '💗', '💖', '💝', '❤️', '🌸', '🌹', '✨', '💫', '🎉', '🎊', '💐', '🦋', '⭐'];
    
    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
      piece.style.left = Math.random() * 100 + '%';
      piece.style.fontSize = (1 + Math.random() * 2) + 'rem';
      piece.style.animationDelay = Math.random() * 4 + 's';
      piece.style.animationDuration = (3 + Math.random() * 3) + 's';
      confettiContainer.appendChild(piece);
    }
  </script>
</body>
</html>
  `;
}
