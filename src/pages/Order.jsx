import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import storage from "../base";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  padding: 20px;
  background-color: white;
  box-shadow: 0rem 1rem 6rem 1rem rgba(0, 0, 0, 0.2);
  width: 50%;
  border-radius: 1rem;
  align-self: center;
  margin: 10rem 0;
  display: flex;
  justify-content: space-between;
`;

const InputPage = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  color: #897de1;
`;

const Input = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  border: ${(props) => props.names && "1px solid #897DE1"};

  &:focus {
    outline: 1px solid #897de1;
  }
`;

const Desc = styled.textarea`
  width: 100%;
  height: 5rem;
  padding: 0.5rem;
  font-size: 16px;
  border: 1px solid #897de1;

  &:focus {
    outline: 1px solid #897de1;
  }
`;

const Delete = styled.span`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  color: gray;
  font-size: 2rem;

  &:hover {
    color: red;
  }
`;

const ImageContain = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
`;

const Button = styled.button`
  color: white;
  background: #897de1;
  padding: 0.7rem;
  border: none;
  border-radius: 0.7rem;
  font-size: 1.6rem;
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`;

const ImagePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const Images = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;

const Note = styled.span`
  color: gray;
  font-size: 10px;
`;
const Order = () => {
  const [level, setLevel] = useState(0);
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [deleteFile, setDeleteFile] = useState("");

  const handleDelete = (image) => {
    const storage = storage.getStorage();

    // Create a reference to the file to delete
    const desertRef = storage.ref(storage, image);

    storage
      .deleteObject(desertRef)
      .then(() => {
        setImage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const metadata = {
      contentType: "image/jpeg",
    };

    const storageRef = storage.ref(
      storage.getStorage(),
      "images/" + Date.now() + file.name,
      setDeleteFile("images/" + Date.now() + file.name)
    );
    const uploadTask = storage.uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setLevel(Math.floor(progress));
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .getDownloadURL(uploadTask.snapshot.ref)
          .then(async (downloadURL) => {
            setImage(downloadURL);
          });
      }
    );
  };

  console.log(level);

  return (
    <Container>
      <Navbar navcolor="897DE1" />
      <Wrapper>
        <InputPage>
          <InputContainer>
            <Label>
              Name <Note>optional</Note>
            </Label>
            <Input
              names={true}
              type="text"
              placeholder="name if you have one"
            />
          </InputContainer>
          <InputContainer>
            <Label>Discription</Label>
            <Desc />
          </InputContainer>
          <InputContainer>
            <Label>Image</Label>
            <Input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              placeholder="image of cloth"
            />
          </InputContainer>
        </InputPage>

        <ImagePage>
          {image !== "" && (
            <ImageContain>
              <Images src={image} />{" "}
              <Delete onClick={() => handleDelete(deleteFile)}>X</Delete>
            </ImageContain>
          )}
          <Button onClick={handleSubmit}>Create</Button>
        </ImagePage>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Order;
