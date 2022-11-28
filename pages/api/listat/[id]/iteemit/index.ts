import type {NextApiRequest, NextApiResponse} from 'next';

import {getDatabase} from '@/utils/db';
import {ErrorResponse} from '@/utils/ErrorResponse';
import {ShopListItem} from '@/utils/types';
import {tryParseInt} from '@/utils/numbers';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ShopListItem[] | ShopListItem | ErrorResponse>
) {
    const {query} = req;
    const db = await getDatabase();
    const {id: listIdString} = query;
    const listId: number | null = tryParseInt(<string>listIdString);
    if (listId === null) {
        res.status(400).json({
            error: `The "id" must be integer`,
            errorCode: "bad-request",
        });
        return;
    }
    if (req.method == "GET") {
        const items = await db.getListItems(listId);
        res.status(200).json(items);
    } else if (req.method == "POST") {
        const {text} = req.body;
        if (!text) {
            res.status(400).json({
                error: `The "text" is missing`,
                errorCode: "bad-request",
            })
            return;
        }
        const sequence = await db.addItemToList(listId, text);
        const item = await db.getListItem(listId, sequence);
        res.status(201).json(item);
    }
}
