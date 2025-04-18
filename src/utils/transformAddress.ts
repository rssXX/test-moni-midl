const transformAddress = (address: string) => {
    return address.slice(0, 3) + '...' + address.slice(-3)
}

export default transformAddress