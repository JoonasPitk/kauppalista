import Link from "next/link";
import {useRouter} from "next/router";
import {Button} from "react-bootstrap";

export default function Post() {
    const router = useRouter();
    const {juttuId, toinenId} = router.query;

    console.log(router.query);

    return (
        <div>
            <h1>Joku juttusivu</h1>
            <p>Juttu ID: {juttuId}</p>
            <p>Toinen ID: {toinenId}</p>
            Linkki juttuun:
            <br />
            <Button>
                <Link href= "/joku/sivu/">
                    Joku sivu.
                </Link>
            </Button>
        </div>
    );
};
