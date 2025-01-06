export default function relaunch(
    setAlert: (alert: string) => void,
    setBorder: (alert: string) => void,
    setBackground: (alert: string) => void
) {
    setAlert("Fields doesn't empty, please enter something.")
    setBorder('red solid 1px')
    setBackground('#ecd7d7')
}