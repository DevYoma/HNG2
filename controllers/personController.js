const Person = require('../models/PersonModel')

const asyncHandler = require('express-async-handler');

// @desc Get all users
const getAllPersons = asyncHandler(async (req, res) => {
    const persons = await Person.find().lean();

    if(!persons || persons.length === 0){
        return res.status(400).json({
            message: "No person found"
        })
    }

    res.json(persons)
})


// @desc Create new user
const createNewPerson = asyncHandler(async (req, res) => {
    const { name } =  req.body; 
    // const name = req.query.name;
    console.log(name);

    if(!name){
        return res.status(400).json({
            message: "Name field is required"
        })
    }

    // check for duplicate name
    const duplicate = await Person.findOne({ name }).lean().exec();
    if(duplicate){
        return res.status(409).json({
            message: "Name exists already. Please choose a different name"
        })
    }

    const newPerson = {
        name
    }

    // Create and store now person
    const person = await Person.create(newPerson)

    if(person){
        res.status(201).json({ message: `New Person ${name} created` })
    }else{
        res.status(400).json({ message: "Invalid person data received" })
    }
})


// @desc Get a user
const getPerson = asyncHandler(async (req, res) => {
    if(!req?.params?.id){
        return res.status(400).json({
            message: "Person ID required"
        })
    }

    const person = await Person.findOne({ _id: req.params.id }).exec();

    if(!person){
        return res.status(400).json({
            message: `No Person matches ID ${req.params.id}`
        })
    }

    res.json(person)
})


// @desc Update a user
const updatePerson = asyncHandler(async (req, res) => {
    if(!req?.params?.id){
        return res.status(400).json({
            message: "Person ID required"
        })
    }

    if(!req?.body?.name){
        return res.status(400).json({
            message: "Person Name required"
        })
    }

    // finding the person
    const foundPerson = await Person.findOne({ _id: req.params.id }).exec();
    if(!foundPerson){
        return res.status(204).json({
            message: `No Person matches ID ${req.body.id}`
        })
    }

    if(req.body?.name){
        foundPerson.name = req.body.name;
    }

    const updatedPerson = await foundPerson.save();
    res.json(updatedPerson)
})


// @desc Delete a user
const deletePerson = asyncHandler(async (req, res) => {
    if(!req?.params?.id) return res.status(400).json({
        message: `Employee ID required`
    })

    const person = await Person.findOne({ _id: req.params.id }).exec();

    if(!person){
        return res.status(204).json({
            message: `No Person matched ID ${req.params.id}`
        })
    }

    const deletedPerson = await person.deleteOne({ _id: req.params.id })
    res.json({
        message: `${deletedPerson.name} deleted Successfully`,
    });
})

module.exports = {
    getAllPersons,
    createNewPerson, 
    getPerson,
    updatePerson,
    deletePerson
}