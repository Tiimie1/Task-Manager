import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Grid, Paper} from '@mui/material';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import CircleIcon from '@mui/icons-material/Circle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function Task() {

  const importances = [
    {
      value: 'LOW',
      label: 'Low',
    },
    {
      value: 'MID',
      label: 'Mid',
    },
    {
      value: 'HIGH',
      label: 'High',
    },
  ];

    const[tasks, setTasks] = useState([]);
    const[importance, setImportance] = useState('');
    const[taskName, setTaskName] = useState('');
    const[taskContent, setTaskContent] = useState('');
    const [open, setOpen] = useState(false);
    const[text, setText] = useState('');


    const handleChange = (event) => {
      setImportance(event.target.value);
    };

    const handleClick=(e)=>{
      e.preventDefault()
      const task={taskName, taskContent, importance}
      console.log(task)
      fetch("http://localhost:8080/task/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(task)
  
    }).then(()=>{
        console.log("New Task Added")
        window.location.reload();
      })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/task/getAll")
        .then(res=>res.json())
        .then((result)=>{
            setTasks(result);
        })
    },[])

    const handleDelClick=(id)=>{
      fetch("http://localhost:8080/task/delete/" + id,{
        method:"DELETE"
    }).then(()=>{
        console.log("Task Deleted")
        window.location.reload();
      })
    }

    function handleColor(importance){
      if(importance === "LOW"){
        return "limegreen"
      }
      else if(importance === "MID"){
        return "orange"
      }
      else if(importance === "HIGH"){
        return "red"
      }
    }
    
    const handleClickOpen = (taskContent) => {
      setText(taskContent);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Container sx={{
    }}>
      <Grid container spacing={4} justify="center"
      sx={{
        display: "block",
        textAlign: "center"
      }} >
        <Grid item
        sx={{
          display: "inline-flex"
        }}
        >
          <Paper elevation={0} sx={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: 5,
            marginTop: 5
          }}>
            <TextField 
            id="outlined-required"
            label="Name"
            variant="outlined"
            color= "secondary"
            value={taskName}
            onChange={(e)=>setTaskName(e.target.value)}
            />
            <TextField
              id="outlined-multiline-static"
              label="Content"
              multiline
              rows={4}
              color="secondary"
              sx={{marginTop: 1, marginBottom: 1}}
              value={taskContent}
              onChange={(e)=>setTaskContent(e.target.value)}
              />

            <TextField
              id="outlined-select-currency"
              select
              label="Importance"
              value={importance}
              onChange={handleChange}
              color="secondary"
              >
              {importances.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
              ))}
              </TextField>
              <Fab variant="extended" sx={{marginTop: 1}} color="secondary" onClick={handleClick}>
                <AddIcon sx={{ mr: 1 }} />
                  Add task
              </Fab>
          </Paper>
          <Paper elevation={0} 
          sx={{
            marginTop: 5,
            maxHeight: 309,
            overflow: "auto",
          }}
          >
          {tasks.map(( {taskName, taskContent, importance, id}) => {
              return (
                  <Card key={id} variant="outlined" sx={{display:"flex", textAlign: "left"}}>
                    <CardContent sx={{
                      display: "inline-flex"
                    }}>
                      <CircleIcon sx={{alignSelf: "center", marginRight: 1, color: handleColor(importance)}} fontSize="small"/>
                      <Typography variant="h3" sx={{ fontSize: 14, alignSelf: "center", marginRight: 1, fontWeight: "bold"}} >
                        {taskName}
                      </Typography>
                    </CardContent>
                    <CardContent sx={{display: "inline-flex", marginLeft:"auto", alignSelf: "center"}}>
                      <Button onClick={()=>handleClickOpen(taskContent)}>
                        <MoreVertIcon color="secondary"/>
                      </Button>
                      <Fab color="secondary" size="small" onClick={()=>handleDelClick(id)}>
                        <DeleteIcon/>
                      </Fab>
                      
                    </CardContent>
                  </Card> 
              )
            })}
          </Paper>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <DialogContentText>
            {text}
          </DialogContentText>
        </DialogContent>
      </Dialog>
                      
    </Container>
  );
}

