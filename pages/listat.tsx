import Link from "next/link";

import {Page} from "@/components/Page";
import {GetServerSideProps} from "next";
import {ShopList} from "@/utils/types";
import {callApi} from "@/utils/apicall";

type PropsType ={
    listat: ShopList[];
}
const LIST_ITEMS = [
    {id: 1, text: "Eka kauppalista"},
    {id: 2, text: "Eka kauppalista"},
    {id: 3, text: "Eka kauppalista"},
]

export default function ListatSivu({listat}: PropsType) {
    function ListItem({id, text}: {id: number, text: string}) {
        return (
            <li>
                <Link href={`/lista/${id}`}>
                    ({id}) {text}
                </Link>
            </li>
        );
    }
    return (
        <Page title="Listat">
            <ul>
                {listat.map((lista) => (
                    <ListItem
                        key={lista.id}
                        id={lista.id}
                        text={lista.name}
                    />
                ))}
            </ul>
        </Page>
    );
}


export const getServerSideProps: GetServerSideProps<PropsType> = async () => {
    const listat: ShopList[] = await callApi("/api/listat");
    return {
        props: {listat},
    };
};
