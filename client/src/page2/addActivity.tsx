import React, { useState } from "react";
import axios from "axios";
import { Box, Container } from "@mui/system";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@mui/material";
import AdminAppbar from "../components/adminbar";

interface Fields {
  id: {
    attributes: {
      name: string;
      description: string;
      location: string;
      people: string;
  }
 }
}

const AddActivity: React.FC = () => {
  const [Fields, setFields] = useState<Fields>({
    id: {
      attributes: {
        name: "",
        description: "",
        location: "",
        people: "",
      }
    }
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFields((prevFields) => ({
      ...prevFields,
      id: {
        attributes: {
          ...prevFields.id.attributes,
          [name]: value,
        },
      },
    }));
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      await axios.post("http://localhost:1337/api/activities", Fields);
      setFields({
        id: {
          attributes: {
            name: "",
            description: "",
            location: "",
            people: "",
          }
        }
      });
      toast.success("Item Added");
    } catch (error) {
      toast.error("Something is wrong.");
    }
  };

  return (
    <Box>
      <AdminAppbar/>
      <br/>
      <Container className="Detail">
        <h2>ข้อมูลกิจกรรม</h2>
        <br />
        <form>
          <div style={{ marginBottom: "20px" }}>
            <p>ชื่องาน</p>
            <input
              type="text"
              name="name"
              value={Fields.id.attributes.name}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <p>จำนวนผู้รับสมัคร</p>
            <input
              type="number"
              name="people"
              value={Fields.id.attributes.people}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <p>คำอธิบาย</p>
            <input
              type="richtext"
              name="description"
              value={Fields.id.attributes.description}
              onChange={handleInputChange}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <p>สถานที่จัดกิจกรรม</p>
            <input
              type="text"
              name="location"
              value={Fields.id.attributes.location}
              onChange={handleInputChange}
            />
          </div>

          <Button onClick={handleSubmit} variant="contained">
            Add
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default AddActivity;