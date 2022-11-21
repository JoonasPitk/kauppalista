import type { NextApiRequest, NextApiResponse } from "next";

import sqlite3 from 'sqlite3'
import {open} from 'sqlite'

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const {query} = req;
    
    const db = await open({
        filename: 'database.db',
        driver: sqlite3.Database
    });

    await db.exec(`
    CREATE TABLE IF NOT EXISTS testi (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        t VARCHAR(10)
    )
    `);
    await db.run('INSERT INTO testi (t) VALUES (?)',
    `${JSON.stringify(query)}`
    );

    const result = await db.all('SELECT * FROM testi');
    
    console.log(result)
    res.status(200).json({ name: "John Doe" });
}
