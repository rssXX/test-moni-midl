import {StickyTableContainer} from "@/containers";
import {ResponseData} from "@/interface";

const HomePage = async () => {
    const res = await fetch(`https://api.printer.getmoni.io/api/v1/token/?limit=50&offset=0`)

    if (res.status !== 200) {
        throw new Error('Failed to fetch data');
    }

    const data: ResponseData = await res.json()

    return (
        <>
            <StickyTableContainer items={data.items}/>
        </>
    );
}

export default HomePage