import { useState } from 'react';
import { getCookie } from '../../helper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const NewPost = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [caption, setCaption] = useState('');
  const user_id = getCookie('user_id');
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
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    if (data) {
      alert('Post Added Successfully');
      navigate('/');
    }
  };
  return (

    <Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Add Caption</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Add file</Form.Label>
  <Form.Control type="file" placeholder=" upload file" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
</Form.Group>
<Button variant="primary" type="submit">
  Submit
</Button>
</Form>
    // <div className='NewPost-NewPost'>
    //   <div className='post-form'>
    //     <div className='post-form-field'>
    //       <label htmlFor='Caption'>Add Caption</label>
    //       <input
    //         type='text'
    //         required='true'
    //         placeholder='caption'
    //         onChange={(e) => setCaption(e.target.value)}
    //         name='caption'
    //       />
    //     </div>
    //     <div className='post-form-field'>
    //       {/* <label htmlFor='postFile'>Add File</label>
    //       <input type='file' name='postFile' /> */}
    //       <input type='file' onChange={handleFileChange} />

    //       <div>{file && `${file.name} - ${file.type}`}</div>

    //       <button onClick={handleUploadClick}>Add Post</button>
    //     </div>
    //   </div>
    // </div>

  );
};
