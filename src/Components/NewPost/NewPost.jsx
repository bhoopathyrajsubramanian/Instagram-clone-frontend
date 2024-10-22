import { useState } from "react";
import { getCookie } from "../../helper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./newpost.scss";

export const NewPost = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [caption, setCaption] = useState("");
  const user_id = getCookie("user_id");
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!file) {
      return;
    }
    const { data } = await axios.post(
      `http://localhost:3030/users/${user_id}/posts`,
      {
        caption: caption,
        postFile: file,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (data) {
      alert("Post Added Successfully");
      navigate("/home");
    }
  };
  return (
    <Form className="new-post-section">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add Caption</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter caption"
          onChange={(e) => setCaption(e.target.value)}
        />
        <Form.Text className="text-muted">
          Enter the caption for the Post 
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Add file</Form.Label>
        <Form.Control
          type="file"
          placeholder=" upload file"
          onChange={handleFileChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit" onClick={handleUploadClick}>
        Submit
      </Button>
    </Form>
  );
};
