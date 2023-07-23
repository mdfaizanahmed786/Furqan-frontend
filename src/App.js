import "./App.css";
import Sidebar from "./components/MiniDrawer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllForms from "./components/AllForms";
import Form from "./components/Form";
import AssignForms from "./components/AssignForms";
import EditAssignForm from "./components/EditAssignForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Form />} />
            <Route path="/AllForms" exact element={<AllForms />} />

            <Route path="/AssignForms" exact element={<AssignForms />} />
            <Route path="/EditAssignForm" exact element={<EditAssignForm />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
