// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type ErrorData = {
    body: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<any | ErrorData>) {
    if (req.method !== 'GET') {
        res.status(405).json({ body: 'Method not allowed' });
        return;
    }

    const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts');

    res.status(200).json({ data });
}
