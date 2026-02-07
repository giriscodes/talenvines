import { fontImports, cssVariables, resetStyles, animations } from './shared/styles';
import { config } from '../config';

export function renderHomePage(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>💕 ${config.appName} - Spread Love</title>
  ${fontImports}
  <style>
    ${resetStyles}
    ${cssVariables}
    ${animations.fadeInUp}
    ${animations.pulse}
    ${animations.float}
    
    body {
      min-height: 100vh;
      font-family: 'Quicksand', sans-serif;
      background: linear-gradient(135deg, var(--cream) 0%, var(--peach) 50%, var(--blush) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
    }
    
    .floating-hearts {
      position: fixed;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
      z-index: 0;
    }
    
    .heart {
      position: absolute;
      font-size: 1.5rem;
      animation: float 6s ease-in-out infinite;
      opacity: 0.6;
    }
    
    .container {
      text-align: center;
      z-index: 1;
      padding: 3rem;
      background: rgba(255, 255, 255, 0.85);
      border-radius: 30px;
      box-shadow: 0 20px 60px rgba(232, 69, 69, 0.15);
      backdrop-filter: blur(10px);
      max-width: 500px;
      animation: fadeInUp 1s ease-out;
    }
    
    .logo {
      font-size: 4rem;
      margin-bottom: 1rem;
      animation: pulse 2s ease-in-out infinite;
    }
    
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      color: var(--deep-rose);
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    p {
      color: #666;
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }
    
    .hint {
      font-size: 0.9rem;
      color: var(--soft-pink);
      font-style: italic;
      opacity: 0.8;
    }
  </style>
</head>
<body>
  <div class="floating-hearts" id="hearts"></div>
  
  <div class="container">
    <div class="logo">💕</div>
    <h1>${config.appName}</h1>
    <p>Love is in the air... and so are surprises! 🌸</p>
  </div>
  
  <script>
    const heartsContainer = document.getElementById('hearts');
    const heartEmojis = ['💕', '💗', '💖', '💝', '🌸', '✨', '💐', '🦋'];
    
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 6 + 's';
      heart.style.animationDuration = (4 + Math.random() * 4) + 's';
      heartsContainer.appendChild(heart);
    }
  </script>
</body>
</html>
  `;
}
