export default function ping(network: boolean, setAlert: (alert: string) => void) {
    return !network && setAlert(
        'You are offline, please reconnect to the internet'
    )
}