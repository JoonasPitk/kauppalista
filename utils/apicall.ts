import {IncomingMessage} from "http";

export async function callApi(req: IncomingMessage, url: string) {
    const host: string = req.headers.host ?? "localhost";
    const proto = /^localhost:?/.test(host) ? "http" : "https";
    const response = await fetch(`${proto}://${host}${url}`);
    return await response.json();
}
