const express = require("express");
const connectToDatabase = require("./config/db");
const submissionRouter = require("./routes/submission.routes");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.json());

app.use(cors());

app.use("/submissions", submissionRouter);

app.get("/", (req, res) => {
    try {
        res.status(200).send({
            'message': 'Welcome to Travelopia'
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            'error': 'Something went wrong'
        })
    }
})

app.listen(PORT, () => {
    try {
        connectToDatabase();
        console.log("Connected to database");
        console.log(`Server running at port ${PORT}`);
    }
    catch (err) {
        console.log(err);
    }
})