import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { userData } from '../helper';

const theme = createTheme();

const initialUser = { firstName: '', lastName: '', username: '', email: '', password: '', confirmPassword: '' };

export default function RegisterPage() {
  const [user, setUser] = useState(initialUser)
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    const url = "http://localhost:1337/api/auth/local/register";
    try {
      if (user.email && user.password && user.username && user.password === user.confirmPassword) {
        const res = await axios.post(url, user)
        console.log(res.data)
        navigate('/login', { replace: true })
      } else {
        setPasswordError(true);
      }
    } catch(err) {
      toast.error("Invalid email or password", {
        hideProgressBar: true
      })
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  useEffect(() => {
    const data = userData();
    if(data.jwt) {
      navigate('/')
    }
  });

  function setConfirmPassword(value: string): void {
    setUser({
      ...user,
      confirmPassword: value
    });
    setPasswordError(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            สมัครสมาชิก
          </Typography>
          <Box component="form" noValidate onSubmit={handleSignup} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                  onChange={handleChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="สกุล"
                  name="lastName"
                  onChange={handleChange}
                  autoFocus
                  autoComplete="family-name"
                />

              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="บัญชีผู้ใช้"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="อีเมล"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="รหัสผ่าน"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm_mpassword"
                  label="ยืนยันรหัสผ่านอีกครั้ง"
                  type="password"
                  id="confirm_password"
                  autoComplete="confirm-password"
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="ฉันยอมรับการใช้งานของเว็บไซต์นี้"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              className='btn'
              value="สมัครสมาชิก"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              สมัครสมาชิก
            </Button>
            <Grid container justifyContent="flex-end">
            <span>คุณมีบัญชีแล้วใช่ไหม? <a href="http://localhost:3000/login" className="link signup-link">เข้าสู่ระบบที่นี่</a></span>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}