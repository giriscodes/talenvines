import { fontImports, cssVariables, resetStyles } from './shared/styles';
import { escapeHtml } from '../utils/encoding';

export function renderProposalPage(partnerName: string): string {
  const escapedName = escapeHtml(partnerName);
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>💝 A Special Message for ${escapedName}</title>
  ${fontImports}
  <style>
    ${resetStyles}
    ${cssVariables}
    
    @keyframes rain {
      0% {
        transform: translateY(-50px) rotate(0deg);
        opacity: 0;
      }
      10% { opacity: 0.7; }
      90% { opacity: 0.7; }
      100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0;
      }
    }
    
    @keyframes heartbeat {
      0% { transform: scale(0.8); opacity: 0; }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); opacity: 1; }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      25% { transform: scale(1.15); }
      50% { transform: scale(1); }
      75% { transform: scale(1.1); }
    }
    
    @keyframes wiggle {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-5deg); }
      75% { transform: rotate(5deg); }
    }
    
    body {
      min-height: 100vh;
      font-family: 'Quicksand', sans-serif;
      background: linear-gradient(135deg, var(--cream) 0%, var(--peach) 30%, var(--blush) 70%, var(--soft-pink) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      overflow: hidden;
      position: relative;
    }
    
    .hearts-rain {
      position: fixed;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    }
    
    .rain-heart {
      position: absolute;
      top: -50px;
      animation: rain 4s linear infinite;
      opacity: 0.7;
    }
    
    .container {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 50px;
      padding: 3rem 2.5rem;
      max-width: 520px;
      width: 100%;
      box-shadow: 
        0 30px 100px rgba(232, 69, 69, 0.25),
        0 0 0 1px rgba(255, 255, 255, 0.8),
        inset 0 0 60px rgba(255, 184, 184, 0.1);
      z-index: 1;
      text-align: center;
      animation: heartbeat 0.8s ease-out;
    }
    
    .big-heart {
      font-size: 5rem;
      margin-bottom: 1rem;
      animation: pulse 1.5s ease-in-out infinite;
      display: inline-block;
    }
    
    .greeting {
      font-family: 'Dancing Script', cursive;
      font-size: 2.5rem;
      color: var(--rose-gold);
      margin-bottom: 0.5rem;
    }
    
    .name {
      font-family: 'Playfair Display', serif;
      font-size: 2.8rem;
      color: var(--deep-rose);
      font-weight: 700;
      margin-bottom: 1.5rem;
      text-shadow: 2px 2px 4px rgba(232, 69, 69, 0.1);
    }
    
    .question {
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem;
      color: var(--soft-pink);
      margin-bottom: 2.5rem;
      line-height: 1.5;
    }
    
    .buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    
    .btn {
      padding: 1rem 2.5rem;
      font-size: 1.3rem;
      font-family: 'Quicksand', sans-serif;
      font-weight: 600;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      min-width: 140px;
    }
    
    .btn-yes {
      background: linear-gradient(135deg, var(--coral) 0%, var(--deep-rose) 100%);
      color: white;
      box-shadow: 0 10px 40px rgba(232, 69, 69, 0.4);
    }
    
    .btn-yes:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 20px 50px rgba(232, 69, 69, 0.5);
    }
    
    .btn-no {
      background: linear-gradient(135deg, #FFB6C1 0%, #FFA0B0 100%);
      color: white;
      box-shadow: 0 8px 25px rgba(255, 182, 193, 0.5);
      transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      position: relative;
    }
    
    .btn-no:hover {
      animation: wiggle 0.3s ease-in-out;
    }
    
    .btn-no.moving {
      transition: all 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .footer-text {
      margin-top: 2rem;
      color: var(--blush);
      font-size: 0.9rem;
      font-style: italic;
    }
    
    .emoji-burst {
      position: fixed;
      pointer-events: none;
      font-size: 2rem;
      z-index: 100;
      animation: burst 0.6s ease-out forwards;
    }
    
    @keyframes burst {
      0% {
        opacity: 1;
        transform: scale(0.5) translateY(0);
      }
      100% {
        opacity: 0;
        transform: scale(1.5) translateY(-50px);
      }
    }
  </style>
</head>
<body>
  <div class="hearts-rain" id="heartsRain"></div>
  
  <div class="container">
    <div class="big-heart">💝</div>
    <p class="greeting">Hey ${partnerName},</p>
    <p class="greeting">You are the prettiest girl in the world</p>
    <br>
    <br>
    <p class="timepass">I am very shy to ask you this, but will you be my Valentine? 🌹</p>
    <br>
    <div class="buttons" id="buttonsContainer">
      <a href="/yes" class="btn btn-yes">Yes! 💕</a>
      <button class="btn btn-no" id="noBtn">No 🙈</button>
    </div>
    
  </div>
  
  <script>
    // Create hearts rain
    const heartsRain = document.getElementById('heartsRain');
    const heartEmojis = ['💕', '💗', '💖', '💝', '❤️', '💓', '💞', '🌸', '🌹', '💐'];
    
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.className = 'rain-heart';
      heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      heart.style.left = Math.random() * 100 + '%';
      heart.style.fontSize = (0.8 + Math.random() * 1.5) + 'rem';
      heart.style.animationDelay = Math.random() * 4 + 's';
      heart.style.animationDuration = (3 + Math.random() * 3) + 's';
      heartsRain.appendChild(heart);
    }
    
    // Cute runaway No button
    const noBtn = document.getElementById('noBtn');
    const container = document.getElementById('buttonsContainer');
    
    const cuteMessages = [
      "No 🙈",
      "Really? 🥺",
      "Think again! 💭",
      "Pretty please? 🙏",
      "Are you sure? 😢",
      "Cutu ill buy you momos",
      "One more chance! 🌟",
      "Pwease? 🐱",
      "So mean! 😭",
      "Try again! 💫",
      "Noooo! 😿",
      "I'll be sad! 🥹",
      "Reconsider? 💝",
      "C'mon! 🌸",
      "Not fair! 🎀",
      "Please? 🦋"
    ];
    
    const burstEmojis = ['💔', '😢', '🥺', '💫', '✨', '🌸'];
    
    function createBurst(x, y) {
      const burst = document.createElement('div');
      burst.className = 'emoji-burst';
      burst.textContent = burstEmojis[Math.floor(Math.random() * burstEmojis.length)];
      burst.style.left = x + 'px';
      burst.style.top = y + 'px';
      document.body.appendChild(burst);
      setTimeout(() => burst.remove(), 600);
    }
    
    function getRandomMessage() {
      return cuteMessages[Math.floor(Math.random() * cuteMessages.length)];
    }
    
    function runaway(e) {
      e.preventDefault();
      
      // Create cute emoji burst
      createBurst(e.clientX || e.touches?.[0]?.clientX || 0, e.clientY || e.touches?.[0]?.clientY || 0);
      
      // Change to random cute message
      noBtn.textContent = getRandomMessage();
      
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const btnRect = noBtn.getBoundingClientRect();
      
      // Calculate safe bounds (keep button on screen with padding)
      const padding = 20;
      const maxX = viewportWidth - btnRect.width - padding;
      const maxY = viewportHeight - btnRect.height - padding;
      
      // Generate random position
      let newX = padding + Math.random() * (maxX - padding);
      let newY = padding + Math.random() * (maxY - padding);
      
      // Make sure it actually moves away from current position
      const currentX = btnRect.left;
      const currentY = btnRect.top;
      
      // If new position is too close to current, push it further
      const minDistance = 150;
      const dx = newX - currentX;
      const dy = newY - currentY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < minDistance) {
        // Move in a random direction at least minDistance away
        const angle = Math.random() * Math.PI * 2;
        newX = currentX + Math.cos(angle) * minDistance;
        newY = currentY + Math.sin(angle) * minDistance;
        
        // Clamp to viewport
        newX = Math.max(padding, Math.min(maxX, newX));
        newY = Math.max(padding, Math.min(maxY, newY));
      }
      
      // Apply fixed positioning and move
      noBtn.classList.add('moving');
      noBtn.style.position = 'fixed';
      noBtn.style.left = newX + 'px';
      noBtn.style.top = newY + 'px';
      noBtn.style.zIndex = '50';
      noBtn.style.margin = '0';
    }
    
    noBtn.addEventListener('mouseenter', runaway);
    noBtn.addEventListener('touchstart', runaway, { passive: false });
    noBtn.addEventListener('click', (e) => {
      e.preventDefault();
      runaway(e);
    });
  </script>
</body>
</html>
  `;
}
