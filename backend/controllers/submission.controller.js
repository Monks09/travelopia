const Submission = require("../models/submission.model")

let getSubmissions = async (page) => {
    let perPage = 4;
    let offset = (page - 1) * perPage;

    let totalDocs = await Submission.countDocuments();
    let totalPages = Math.ceil(totalDocs / perPage);

    let submissions = await Submission.find().skip(offset).limit(perPage);
    return {
        submissions,
        totalPages,
    }
}

let createSubmission = async (formData) => {
    let newSubmission = await Submission.create(formData);
    return newSubmission;
}

module.exports = { getSubmissions, createSubmission };