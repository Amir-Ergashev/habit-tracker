import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WorkoutsPage from "./pages/WorkoutsPage";
import NewWorkoutPage from "./pages/NewWorkoutPage";
import WorkoutDetailPage from "./pages/WorkoutDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/workouts" element={<WorkoutsPage />} />
      <Route path="/workouts/new" element={<NewWorkoutPage />} />
      <Route path="/workouts/:id" element={<WorkoutDetailPage />} />
    </Routes>
  );
}

export default App;