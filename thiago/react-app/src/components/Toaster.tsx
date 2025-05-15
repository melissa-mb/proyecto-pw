import Toast from "react-bootstrap/Toast"

export default function Toaster() {
  return (
    <Toast>
      <Toast.Header>
        <strong className="me-auto">Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
    </Toast>
  )
}
