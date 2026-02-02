import { Router, Request, Response } from 'express';
import {
  renderHomePage,
  renderHiddenPage,
  renderProposalPage,
  renderSuccessPage,
} from '../views';
import { encodeBase64, decodeBase64 } from '../utils/encoding';

const router = Router();

/**
 * Home page - Landing/teaser page
 */
router.get('/', (req: Request, res: Response) => {
  res.send(renderHomePage());
});

/**
 * Hidden page - Secret page to generate proposal links
 */
router.get('/hidden', (req: Request, res: Response) => {
  res.send(renderHiddenPage());
});

/**
 * Generate proposal link API
 */
router.post('/generate', (req: Request, res: Response) => {
  const { partnerName } = req.body;
  
  if (!partnerName || typeof partnerName !== 'string') {
    return res.status(400).json({ error: 'Partner name is required' });
  }
  
  const trimmedName = partnerName.trim();
  if (trimmedName.length === 0) {
    return res.status(400).json({ error: 'Partner name cannot be empty' });
  }
  
  if (trimmedName.length > 100) {
    return res.status(400).json({ error: 'Partner name is too long' });
  }
  
  const encoded = encodeBase64(trimmedName);
  const proposalUrl = `/proposal/${encoded}`;
  
  res.json({ url: proposalUrl });
});

/**
 * Proposal page - Where the magic happens!
 */
router.get('/proposal/:encoded', (req: Request, res: Response) => {
  const { encoded } = req.params;
  
  try {
    const partnerName = decodeBase64(encoded);
    
    if (!partnerName || partnerName.length === 0) {
      throw new Error('Invalid name');
    }
    
    res.send(renderProposalPage(partnerName));
  } catch (error) {
    res.status(400).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>💔 Invalid Link</title>
        <style>
          body {
            font-family: 'Quicksand', sans-serif;
            background: linear-gradient(135deg, #FFF5E4, #FFB8B8);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .error {
            background: white;
            padding: 3rem;
            border-radius: 30px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          }
          h1 { color: #E84545; font-size: 2rem; }
          p { color: #666; margin-top: 1rem; }
        </style>
      </head>
      <body>
        <div class="error">
          <h1>💔 Oops!</h1>
          <p>This love link seems to be broken...</p>
          <p>Ask for a new one! 💕</p>
        </div>
      </body>
      </html>
    `);
  }
});

/**
 * Success page - When they say YES!
 */
router.get('/yes', (req: Request, res: Response) => {
  res.send(renderSuccessPage());
});

export default router;
