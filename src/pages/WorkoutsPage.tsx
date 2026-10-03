import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

type Workout = {
  id: number;
  title: string;
  date: string;
};

const demoWorkouts: Workout[] = [
  { id: 1, title: "Грудь и трицепс", date: "2026-09-28" },
  { id: 2, title: "Ноги", date: "2026-09-30" },
  { id: 3, title: "Спина и бицепс", date: "2026-10-01" },
];

export default function WorkoutsPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "480px" }}>
      <h1>Дневник тренировок</h1>
      <Button
        component={Link}
        to="/workouts/new"
        variant="contained"
        style={{ marginBottom: "1rem" }}
      >
        + Новая тренировка
      </Button>
      <List>
        {demoWorkouts.map((w) => (
          <ListItemButton
            key={w.id}
            component={Link}
            to={`/workouts/${w.id}`}
          >
            <ListItemText primary={w.title} secondary={w.date} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
}