import { fontImports, cssVariables, resetStyles, animations } from './shared/styles';
import { config } from '../config';

export function renderHiddenPage(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>💌 Create Your Proposal</title>
  ${fontImports}
  <style>
    ${resetStyles}
    ${cssVariables}
    ${animations.bounce}
    
    @keyframes floatIn {
      from {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
    
    @keyframes sparkle {
      0%, 100% { opacity: 0; transform: scale(0.5); }
      50% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    
    body {
      min-height: 100vh;
      font-family: 'Quicksand', sans-serif;
      background: linear-gradient(135deg, var(--peach) 0%, var(--blush) 40%, var(--soft-pink) 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      position: relative;
      overflow: hidden;
    }
    
    .sparkles {
      position: fixed;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
    }
    
    .sparkle {
      position: absolute;
      font-size: 1.2rem;
      animation: sparkle 3s ease-in-out infinite;
    }
    
    .container {
      background: rgba(255, 255, 255, 0.92);
      border-radius: 40px;
      padding: 3rem 2.5rem;
      max-width: 480px;
      width: 100%;
      box-shadow: 
        0 25px 80px rgba(232, 69, 69, 0.2),
        0 0 0 1px rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(20px);
      z-index: 1;
      animation: floatIn 0.8s ease-out;
    }
    
    .icon {
      text-align: center;
      font-size: 4rem;
      margin-bottom: 1.5rem;
      animation: bounce 2s ease-in-out infinite;
    }
    
    h1 {
      font-family: 'Playfair Display', serif;
      text-align: center;
      color: var(--deep-rose);
      font-size: 2rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }
    
    .subtitle {
      text-align: center;
      color: var(--soft-pink);
      margin-bottom: 2rem;
      font-size: 1rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--deep-rose);
      font-weight: 600;
      font-size: 0.95rem;
    }
    
    input {
      width: 100%;
      padding: 1rem 1.2rem;
      border: 2px solid var(--blush);
      border-radius: 15px;
      font-size: 1.1rem;
      font-family: 'Quicksand', sans-serif;
      transition: all 0.3s ease;
      background: rgba(255, 255, 255, 0.8);
    }
    
    input:focus {
      outline: none;
      border-color: var(--soft-pink);
      box-shadow: 0 0 20px rgba(253, 121, 168, 0.3);
      background: white;
    }
    
    input::placeholder {
      color: var(--blush);
    }
    
    button {
      width: 100%;
      padding: 1rem;
      background: linear-gradient(135deg, var(--coral) 0%, var(--soft-pink) 100%);
      color: white;
      border: none;
      border-radius: 15px;
      font-size: 1.2rem;
      font-family: 'Quicksand', sans-serif;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
    }
    
    button:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(255, 107, 107, 0.5);
    }
    
    button:active {
      transform: translateY(-1px);
    }
    
    .result {
      margin-top: 2rem;
      padding: 1.5rem;
      background: linear-gradient(135deg, var(--cream) 0%, var(--peach) 100%);
      border-radius: 20px;
      display: none;
      animation: fadeIn 0.5s ease-out;
    }
    
    .result.show {
      display: block;
    }
    
    .result h3 {
      color: var(--deep-rose);
      margin-bottom: 1rem;
      font-family: 'Playfair Display', serif;
      text-align: center;
    }
    
    .link-box {
      background: white;
      padding: 1rem;
      border-radius: 12px;
      word-break: break-all;
      font-size: 0.9rem;
      color: var(--soft-pink);
      margin-bottom: 1rem;
      border: 2px dashed var(--blush);
    }
    
    .copy-btn {
      background: linear-gradient(135deg, var(--warm-yellow) 0%, var(--sunset) 100%);
      font-size: 1rem;
      padding: 0.8rem;
    }
    
    .copy-btn:hover {
      box-shadow: 0 15px 40px rgba(253, 203, 110, 0.5);
    }
    
    .copied {
      text-align: center;
      color: var(--deep-rose);
      margin-top: 0.5rem;
      font-weight: 600;
      display: none;
    }
    
    .copied.show {
      display: block;
      animation: fadeIn 0.3s ease-out;
    }
  </style>
</head>
<body>
  <div class="sparkles" id="sparkles"></div>
  
  <div class="container">
    <div class="icon">💌</div>
    <h1>Create Magic</h1>
    <p class="subtitle">You found the secret garden of love! 🌹</p>
    
    <form id="proposalForm">
      <div class="form-group">
        <label for="partnerName">Your Special Someone's Name 💕</label>
        <input 
          type="text" 
          id="partnerName" 
          name="partnerName" 
          placeholder="Enter their name..."
          required
          autocomplete="off"
        >
      </div>
      <button type="submit">Generate Love Link ✨</button>
    </form>
    
    <div class="result" id="result">
      <h3>🎉 Your magical link is ready!</h3>
      <div class="link-box" id="linkBox"></div>
      <button class="copy-btn" id="copyBtn">Copy Link 📋</button>
      <p class="copied" id="copied">Copied to clipboard! 💕</p>
    </div>
  </div>
  
  <script>
    // Create sparkles
    const sparklesContainer = document.getElementById('sparkles');
    const sparkleEmojis = ['✨', '💫', '⭐', '🌟', '💖'];
    
    for (let i = 0; i < 25; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.top = Math.random() * 100 + '%';
      sparkle.style.animationDelay = Math.random() * 3 + 's';
      sparklesContainer.appendChild(sparkle);
    }
    
    // Form handling
    const form = document.getElementById('proposalForm');
    const result = document.getElementById('result');
    const linkBox = document.getElementById('linkBox');
    const copyBtn = document.getElementById('copyBtn');
    const copied = document.getElementById('copied');
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const partnerName = document.getElementById('partnerName').value;
      
      try {
        const response = await fetch('/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ partnerName })
        });
        
        const data = await response.json();
        const fullUrl = window.location.origin + data.url;
        linkBox.textContent = fullUrl;
        result.classList.add('show');
      } catch (error) {
        alert('Something went wrong! Please try again 💔');
      }
    });
    
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(linkBox.textContent);
        copied.classList.add('show');
        setTimeout(() => copied.classList.remove('show'), 2000);
      } catch (error) {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = linkBox.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        copied.classList.add('show');
        setTimeout(() => copied.classList.remove('show'), 2000);
      }
    });
  </script>
</body>
</html>
  `;
}
