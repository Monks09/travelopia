const express = require("express");
const { getSubmissions, createSubmission } = require("../controllers/submission.controller");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        let page = req.query.page || 1;
        let { submissions, totalPages } = await getSubmissions(page);
        res.status(200).send({
            "message": "Here are the submissions",
            submissions,
            totalPages,
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            'error': 'Something went wrong'
        })
    }
})

router.post("/", async (req, res) => {
    try {
        let newSubmission = await createSubmission(req.body);
        res.status(201).send({
            'message': 'Data submitted successfully',
            data: newSubmission,
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            'error': 'Something went wrong'
        })
    }
})

module.exports = router;