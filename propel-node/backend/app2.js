const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors"); // Import cors package
const morgan = require("morgan");

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // middleware for the post calls

app.use(morgan("dev")); // this is third party middleware it uses to logging the reques

// creating our own middlleware and using it hitts every requests from the client
app.use((req, res, next) => {
  console.log("Its from the middleware");
  next();
});

const pathways = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/Pathways.json`)
);

const getAllPathways = (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      pathways,
    },
  });
};

const getPathway = (req, res) => {
  const id = req.params.id * 1;
  const pathway = pathways.find((el) => el.id === id);
  if (!pathway) {
    res.status(404).send({
      status: "failed",
      messgae: "Id invalid",
    });
  } else {
    res.status(200).json({
      status: "succeess",
      data: {
        pathway,
      },
    });
  }
};

const createPathway = (req, res) => {
  const newId = pathways[pathways.length - 1].id + 1;
  const pathway = Object.assign({ id: newId }, req.body);
  pathways.push(pathway);
  fs.writeFile(
    `${__dirname}/dev-data/Pathways.json`,
    JSON.stringify(pathways),
    () => {
      res.status(201).send({
        status: "success",
        data: pathway,
      });
    }
  );
};
const editPathway = (req, res) => {
  const id = req.params.id * 1;
  const pathway = pathways.find((el) => el.id === id);
  if (!pathway) {
    return res.status(404).send({
      status: "failed",
      messgae: "Id invaild",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      tour: "<updated sucessfully ...>",
    },
  });
};
const deletePathway = (req, res) => {
  const id = req.params.id * 1;
  const pathway1 = pathways.find((el) => el.id === id);
  const pathway = pathways.filter((el) => el.id !== id);

  if (!pathway1) {
    return res.status(404).send({
      status: "failed",
      messgae: "Id invaild",
    });
  } else {
    fs.writeFile(
      `${__dirname}/dev-data/Pathways.json`,
      JSON.stringify(pathway),
      (err) => {
        res.status(204).send({
          status: "sucess",
          data: null,
        });
      }
    );
  }
};

const getAllLearners = (req, res) => {
  res.status(500).send({
    message: "route not created yet",
  });
};
const getLearner = (req, res) => {
  res.status(500).send({
    message: "route not created yet",
  });
};
const createLearners = (req, res) => {
  res.status(500).send({
    message: "route not created yet",
  });
};
const editLearner = (req, res) => {
  res.status(500).send({
    message: "route not created yet",
  });
};
const deleteLearner = (req, res) => {
  res.status(500).send({
    message: "route not created yet",
  });
};
// app.get("/api/propel_admin/pathways", getAllPathways);
// app.get("/api/propel_admin/pathways/:id", getPathway);
// app.post("/api/propel_admin/pathways", createPathway);
// app.patch("/api/propel_admin/pathways/:id", editPathway);
// app.delete("/api/propel_admin/pathways/:id", deletePathway);

app.route("/api/propel_admin/pathways").get(getAllPathways).post(createPathway);

app
  .route("/api/propel_admin/pathways/:id")
  .get(getPathway)
  .patch(editPathway)
  .delete(deletePathway);

app.route("/api/propel/pathways").get(getAllLearners).post(createLearners);

app
  .route("/api/propel/pathways/:id")
  .get(getLearner)
  .patch(editLearner)
  .delete(deleteLearner);

app.listen(8080, () => {
  console.log("app listining");
});
