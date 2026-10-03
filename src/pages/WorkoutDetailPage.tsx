import { useParams, Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

type Exercise = {
  id: number;
  name: string;
  weight: number;
  sets: number;
  reps: number;
};

const demoExercises: Exercise[] = [
  { id: 1, name: "Жим лёжа", weight: 60, sets: 4, reps: 8 },
  { id: 2, name: "Жим гантелей сидя", weight: 20, sets: 3, reps: 10 },
  { id: 3, name: "Разгибание рук на блоке", weight: 25, sets: 3, reps: 12 },
];

export default function WorkoutDetailPage() {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem", maxWidth: "480px" }}>
      <h1>Тренировка #{id}</h1>
      <List>
        {demoExercises.map((ex) => (
          <ListItem key={ex.id} divider>
            <ListItemText
              primary={ex.name}
              secondary={`${ex.weight} кг × ${ex.sets} подхода × ${ex.reps} повторений`}
            />
          </ListItem>
        ))}
      </List>
      <Button component={Link} to="/workouts" variant="outlined" style={{ marginTop: "1rem" }}>
        Назад к списку
      </Button>
    </div>
  );
}