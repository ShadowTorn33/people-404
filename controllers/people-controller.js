// Importing express from express node-module
const express = require('express')

// importing router from express
const router = express.Router()

// Importing Schema from index.js inside models
const { People } = require('../models')

// Connecting DB to controller
require('../config/db.connection')

// GET/people
// People.find({})
router.get('/', async (req,res,next) => {
    try {
        const people = await People.find({})
        res.status(200).json(people)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})

// POST/people
// People.create(...)
router.post('/', async (req,res,next) => {
    try {
        const createdPeople = await People.create(req.body)
        res.status(201).json(createdPeople)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})

// GET people/:id
// People.find({})
router.get('/:id', async (req,res,next) => {
    try {
        const person = await People.findById(req.params.id)
        res.status(200).json(person)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})

// DELETE people/:id
// People.findByIdAndDelete(id)
router.delete('/:id', async (req,res,next) => {
    try {
        const deletedPerson = await People.findByIdAndRemove(req.params.id)
        res.status(202).json({ message: `${deletedPerson.name} removed`})
    } catch (error) {
        console.error(error)
        return next(error)
    }
})

// UPDATE people/:id
// People.findByIdAndUpdate(id)
router.put('/:id', async (req,res,next) => {
    try {
        const updatedPerson = await People.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).json(updatedPerson)
    } catch (error) {
        console.error(error)
        return next(error)
    }
})

module.exports = router