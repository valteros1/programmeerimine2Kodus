import express, { Request, Response, Application } from 'express';
const app: Application = express();
app.use(express.json());

const port: number = 3000;
const ok: number = 200;
const created: number = 201;
const noContent: number = 204;
const notFound: number = 404;

const db = {
    users: [
        {
            id: 1,
            firstName: 'Mari',
            lastName: 'Kuli',
          },
          {
            id: 2,
            firstName: 'Matti',
            lastName: 'Raavel',
          },
          {
            id: 3,
            firstName: 'Erich',
            lastName: 'Brutus',
          },
          {
            id: 4,
            firstName: 'Laura',
            lastName: 'Hein',
          }

    ],
    subject: [
      {
            id: 1,
            subjectName: 'Professional english II'
          },
          {
            id: 2,
            subjectName: 'Programming II'
          }
          ,
          {
            id: 3,
            subjectName: 'Introduction to 3D Graphics'
          }
          ,
          {
            id: 4,
            subjectName: 'Design Graphics II'
          }

    ],
    course: [
      {
            id: 1,
            courseName: 'KTD'
          },
          {
            id: 2,
            courseName: 'LO'
          }
          ,
          {
            id: 3,
            courseName: 'RIF'
          }
          ,
          {
            id: 4,
            courseName: 'HM'
          }

    ],
    room: [
      {
            id: 1,
            roomName: 'Computer Laboratory 203'
          },
          {
            id: 2,
            roomName: 'Computer Laboratory 204'
          }
          ,
          {
            id: 3,
            roomName: 'Auditorium 106'
          }
          ,
          {
            id: 4,
            roomName: 'Auditorium 109'
          }

    ]
    
}



app.get('/users', (req: Request, res: Response) => {
  res.status(ok).json({
    users: db.users,
  });
});

app.get('/subject', (req: Request, res: Response) => {
  res.status(ok).json({
        subject: db.subject,
    
  });

  
}); 

app.get('/course', (req: Request, res: Response) => {
  res.status(ok).json({
        subject: db.subject,
    
  });

  
}); 

app.get('/room', (req: Request, res: Response) => {
  res.status(ok).json({
        subject: db.room,
    
  });

  
}); 




app.get('/users/:id', (req: Request, res: Response) => {
   const id : number = parseInt(req.params.id);
   const user = db.users.find((element) => element.id === id);
    res.status(ok).json({
      user
    });
  });


app.get('/subject/:id', (req: Request, res: Response) => {
   const id : number = parseInt(req.params.id);
   const subject = db.subject.find((element) => element.id === id);
    res.status(ok).json({
      subject
    });
  });

  app.get('/course/:id', (req: Request, res: Response) => {
    const id : number = parseInt(req.params.id);
    const course = db.subject.find((element) => element.id === id);
      res.status(ok).json({
       course
     });
   });

   app.get('/room/:id', (req: Request, res: Response) => {
    const id : number = parseInt(req.params.id);
    const room = db.room.find((element) => element.id === id);
      res.status(ok).json({
       room
     });
   });


app.post('/users', (req: Request, res: Response) =>{
    const {firstName, lastName } = req.body;
    const id = db.users.length + 1;
    db.users.push({
        id,
        firstName,
        lastName,
    });
    
    console.log(req.method);
    res.status(created).json({
        id,
      });

});



app.post('/subject', (req: Request, res: Response) =>{
  const { subjectName } = req.body;
  const id = db.subject.length + 1;
  db.subject.push({
      id,
      subjectName,
      
  });
  console.log(req.method);
  res.status(created).json({
      id,
    });

});

app.post('/course', (req: Request, res: Response) =>{
  const { courseName } = req.body;
  const id = db.course.length + 1;
  db.course.push({
      id,
      courseName,
      
  });
  console.log(req.method);
  res.status(created).json({
      id,
    });

});

app.post('/room', (req: Request, res: Response) =>{
  const { roomName } = req.body;
  const id = db.room.length + 1;
  db.room.push({
      id,
      roomName,
      
  });
  console.log(req.method);
  res.status(created).json({
      id,
    });

});

app.delete('/users/:id', (req: Request, res: Response) =>{

  const id: number = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      error: 'No valid id provided',
    });
  }
  const index = db.users.findIndex((element) => element.id === id);
  if (index < 0) {
    return res.status(notFound).json({
      message: `User not found with id: ${id}`,
    });
  }
  db.users.splice(index, 1);
  return res.status(noContent).send();
});



app.delete('/subject/:id', (req: Request, res: Response) =>{

  const id: number = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      error: 'No valid id provided',
    });
  }
  const index = db.subject.findIndex((element) => element.id === id);
  if (index < 0) {
    return res.status(notFound).json({
      message: `User not found with id: ${id}`,
    });
  }
  db.subject.splice(index, 1);
  return res.status(noContent).send();
});


app.delete('/course/:id', (req: Request, res: Response) =>{

  const id: number = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      error: 'No valid id provided',
    });
  }
  const index = db.course.findIndex((element) => element.id === id);
  if (index < 0) {
    return res.status(notFound).json({
      message: `User not found with id: ${id}`,
    });
  }
  db.course.splice(index, 1);
  return res.status(noContent).send();
});

app.delete('/room/:id', (req: Request, res: Response) =>{

  const id: number = parseInt(req.params.id);
  if (!id) {
    return res.status(400).json({
      error: 'No valid id provided',
    });
  }
  const index = db.room.findIndex((element) => element.id === id);
  if (index < 0) {
    return res.status(notFound).json({
      message: `User not found with id: ${id}`,
    });
  }
  db.room.splice(index, 1);
  return res.status(noContent).send();
});









  

app.patch('/subject/:id', (req: Request, res: Response) =>{
  const id: number = parseInt(req.params.id);
  const changes = req.body;

  

})
	
  

app.listen(port, () => {
  console.log('Server is running');
});
