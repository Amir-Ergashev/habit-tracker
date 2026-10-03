import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function NewWorkoutPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  function handleSubmit() {
    if (!title.trim()) {
      setError("Введите название тренировки");
      return;
    }
    setError("");
    // Пока просто возвращаемся к списку — сохранение в БД будет в лабе №2/№5
    navigate("/workouts");
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "400px" }}>
      <h1>Новая тренировка</h1>
      <TextField
        label="Название тренировки"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={!!error}
        helperText={error}
      />
      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Сохранить
      </Button>
    </div>
  );
}