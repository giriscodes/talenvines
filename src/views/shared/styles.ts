/**
 * CSS Variables - Shared color palette
 */
export const cssVariables = `
  :root {
    --coral: #FF6B6B;
    --peach: #FFEAA7;
    --soft-pink: #FD79A8;
    --cream: #FFF5E4;
    --warm-yellow: #FDCB6E;
    --deep-rose: #E84545;
    --blush: #FFB8B8;
    --rose-gold: #B76E79;
    --sunset: #FA8072;
  }
`;

/**
 * Base reset styles
 */
export const resetStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

/**
 * Common font imports
 */
export const fontImports = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Quicksand:wght@400;500;600&family=Dancing+Script:wght@700&display=swap" rel="stylesheet">
`;

/**
 * Base body styles
 */
export const baseBodyStyles = `
  body {
    min-height: 100vh;
    font-family: 'Quicksand', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }
`;

/**
 * Common animations
 */
export const animations = {
  fadeInUp: `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  pulse: `
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
  `,
  float: `
    @keyframes float {
      0%, 100% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
      10% { opacity: 0.6; }
      90% { opacity: 0.6; }
      100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
  `,
  bounce: `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `,
  heartbeat: `
    @keyframes heartbeat {
      0% { transform: scale(0.8); opacity: 0; }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); opacity: 1; }
    }
  `,
};
