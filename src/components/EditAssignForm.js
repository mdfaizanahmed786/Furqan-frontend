import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MiniDrawer from "./MiniDrawer";
import { Box, CircularProgress } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function CheckboxListSecondary() {
  const params = useParams();
  const queryClient = useQueryClient();
  const [forms, setForms] = React.useState([]);
  const { data, isLoading } = useQuery({
    queryKey: ["getForms"],
    queryFn: () =>
      fetch("http://localhost:5000/v1/form").then((res) => res.json()),
  });

  const { data: faculty, isLoading: facultyLoading } = useQuery({
    queryKey: ["getSingleFaculty"],
    queryFn: () =>
      fetch(`http://localhost:5000/v1/faculty/get/${params.id}`).then((res) =>
        res.json()
      ),
    enabled: !!params.id,
  });

  const handleToggle = (value, id) => {
    // setChecked(data?.find(item=>item._id===id));
    if (forms.includes(id)) {
      setForms(forms.filter((item) => item !== id));
      return;
    }

    setForms([...forms, id]);
  };

  const handleSave = async () => {
    if (forms.length === 0) {
      throw new Error("Please select at least one form");
    }
  
  
      const data = await fetch(`http://localhost:5000/v1/faculty/edit`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formIds: forms, facultyId: params.id }),
      });

      const res = await data.json();
      return res;
  
  };
  

  const { mutate, isLoading: isSaving } = useMutation({
    mutationFn: handleSave,

    onSuccess: () => {

      queryClient.invalidateQueries("getSingleFaculty");
      toast.success("Saved your changes")
    },

    onError: (error) => {
      toast.error(error.message);
    }


  });


  React.useEffect(() => {
    if (faculty) {
      setForms(faculty.forms?.map((item) => item._id));
    }
  }, [faculty?.forms?.length]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <MiniDrawer />
      <Box sx={{ marginLeft: 40, marginTop: 20 }}>
        <Typography sx={{ marginBottom: 5 }}>
          <h2> Edit Assign Forms</h2>
        </Typography>
        <Grid sx={{ marginTop: 10 }} container>
          <Grid item xs={6}>
            <Item>Form Name</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>View</Item>
          </Grid>
        </Grid>
        {isLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <CircularProgress />
          </div>
        )}

        <List dense sx={{ width: "70%", bgcolor: "background.paper" }}>
          {data &&
            data.map((value) => {
              return (
                <ListItem
                  key={value._id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={(e) => {
                        handleToggle(e, value._id);
                      }}
                      checked={forms.includes(value._id)}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText primary={value.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
        </List>
        <Button
          sx={{ marginLeft: 50, marginTop: 10 }}
          variant="contained"
          color="success"
          onClick={() => mutate()}
        >
         {isSaving ? <CircularProgress size={20} /> : 'Save' 
          }

        </Button>
      </Box>
    </>
  );
}
