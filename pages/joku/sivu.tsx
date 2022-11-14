import Link from "next/link";
import {Button} from "react-bootstrap";

export default function Page() {
    return (
        <div>
            <h1>Joku sivu</h1>
            <p>Tämä on joku sivu.</p>
            <p>Muuta tekstiä.</p>
            Linkki juttuun:
            <br />
            <Link href= "/joku/juttu3/toinen4/">
                <Button>
                Juttu kolme, kohdasta neljä.
                </Button>
            </Link>
        </div>
    );
}
