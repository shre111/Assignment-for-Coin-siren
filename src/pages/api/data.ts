import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = {
    cards: [
      { title: 'Card 1', description: 'Description 1' },
      { title: 'Card 2', description: 'Description 2' },
    ],
  };
  res.status(200).json(data);
}
