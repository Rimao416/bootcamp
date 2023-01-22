const fs = require("fs");
const express = require("express"); //Faire appel au Package d'expressJs
const app = express();
app.use(express.json());

app.use((req,res,next)=>{
  console.log('Hello from middleware')
  next()
})
app.use((req,res,next)=>{
  req.requestTime=new Date();
  next()
})
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, "utf-8")
);
const getAllTours = (req, res) => {
  console.log(req.requestTime)
  res.status(200).json({
    statuts: "success",
    requestAt:req.requestTime,
    results: tours.length,
    data: {
      tours,
    },
  });
};

const getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  console.log(id)
  // if(id>tours.length){
  //     return res.status(404).json({
  //         status:'fail',
  //         message:'Id Invalide'
  //     })
  // } PREMIER MOYEN DE VERIFIER SI ON A UN RESULTAT
  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Id Invalide",
    });
  }

  res.status(200).json({
    status: "success",
    results: tour.length,
    data: {
      tour,
    },
  });
};
const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tour: newTour,
        },
      });
    }
  );
};



const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated tour here...",
    },
  });
};

const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "Fail",
      message: "Invalid Id",
    });
  }
  res.status(204).json({
    status: "Success",
    data: null,
  });
};

// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", createTour);

// app.get("/api/v1/tours/:id", getTour);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);

app.route("/api/v1/tours").get(getAllTours).post(createTour);

app
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

  app.use((req,res,next)=>{
    console.log('Hello from middleware')
    next()
  })
  


const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
