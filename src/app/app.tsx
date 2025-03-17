import { AppRouter } from "./AppRouter";
import { AppProvider } from "./provider";

export function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
