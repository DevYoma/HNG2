const express = require('express');
const router = express.Router();
const personController = require('../../controllers/personController')

router.route('/')
    .post(personController.createNewPerson) // add a middleware to check and handle error

    router.route('/:id')
    .get(personController.getPerson)
    .put(personController.updatePerson)
    .delete(personController.deletePerson)

module.exports = router;