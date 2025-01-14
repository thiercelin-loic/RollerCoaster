export default function relaunch(
    setAlert: (alert: string) => void,
    setBackground: (alert: string) => void,
    setBorder: (alert: string) => void
) {
    setAlert("Fields doesn't empty, please enter something.")
    setBackground('#ecd7d7')
    setBorder('red solid 1px')
}