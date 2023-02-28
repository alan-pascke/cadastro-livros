// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(req: NextApiRequest, res: NextApiResponse
)  {
  
  const {id, title, autor, categories, urlImage} = req.body
  const responseData = {id, title, autor, categories, urlImage}
  
  res.status(200).json(responseData)
  
}
