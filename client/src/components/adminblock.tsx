import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import axios from "axios";
import { useState, useEffect } from "react";

/*อันนี้ทำมาเพื่อ Fetching API นะ แต่ไม่รู้จะตั้งชื่ออะไรเลยตั้งแบบนี้ไปก่อน
interface Image {
    id: string;
    url: string;
    alternativeText: string;
    title: string;
    description: string;
  }
  
  const ExampleComponent = () => {
    const [data, setData] = useState<Image[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get<Image[]>('https://your-strapi-api-endpoint.com/images');
        setData(result.data);
      };
      fetchData();
    }, []) } */

/* เราทำให้ชื่อ item ให้มันมาล่วงหน้าจะได้ไม่ต้องแก้อะไรเยอะในหน้านี้อะนะ
export default function AdminBlock() {
    return (
        <Container>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Box display='flex'>
                    <Box sx={{width:'40%'}}>
                      <img src='https://your-strapi-api-endpoint.com${item.url}'
                      alt={item.alternativeText}
                      style={{maxWidth: '100%', height: 'auto'}}/>
                    </Box>
                    <Box sx={{ width: '60%', paddingLeft: '16px' }}>
                      <Typography variant="h5" gutterBottom>
                        ABCDEFGHIJKLMNOPfsfafa
                      </Typography>
                      <Typography variant='body1'>
                        {item.description}          
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
    )
}
*/