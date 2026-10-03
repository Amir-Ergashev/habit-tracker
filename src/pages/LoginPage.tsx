import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function LoginPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "320px" }}>
      <h1>Вход</h1>
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Пароль" type="password" fullWidth margin="normal" />
      <Button variant="contained" fullWidth>Войти</Button>
    </div>
  );
}