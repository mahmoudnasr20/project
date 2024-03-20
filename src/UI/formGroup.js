import { Form } from "react-bootstrap";

export default function FormGroup({ type, name, placeholder, ...props }) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      {/* for errors */}
      <Form.Text className="text-muted"></Form.Text>
    </Form.Group>
  );
}
