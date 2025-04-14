const HomePage = async () => {
    const res = await fetch(`https://apsi.printer.getmoni.io/api/v1/token/?limit=50&offset=0`)

    if (res.status !== 200) {
        throw new Error('Failed to fetch data');
    }

    const data = await res.json()

    return (
        <div>
            dsa
        </div>
    );
}

export default HomePage