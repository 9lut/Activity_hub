import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import axios from "axios";
import { useState, useEffect } from "react";

interface Activity {
  id: string;
  name: string;
  description: string;
  image: {
    url: string;
    alternativeText: string;
  };
}

interface AdminBlockProps {}

const AdminBlock: React.FC<AdminBlockProps> = () => {
  const [data, setData] = useState<Activity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get<Activity[]>("http://localhost:1337/api/activities");
      console.log(result.data)
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
        <Grid container spacing={2}>
          {data.length > 0 ? (
            data.map((activity) => (
              <Grid item xs={12} sm={6} md={4} key={activity.id}>
                <Box display="flex">
                  <Box sx={{ width: "40%" }}>
                    <img
                      src={`${activity.image.url}`}
                      alt={activity.image.alternativeText}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </Box>
                  <Box sx={{ width: "60%", paddingLeft: "16px" }}>
                    <Typography variant="h5" gutterBottom>
                      {activity.name}
                    </Typography>
                    <Typography variant="body1">{activity.description}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))
          ) : (
            <Typography variant="h6">No activities found.</Typography>
          )}
        </Grid>
      </Container>
  );
};

export default AdminBlock;