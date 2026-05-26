const express = require("express")
const createHandler = require("../controllers/createHandler")
const updateHandler = require("../controllers/updateHandler")
const deleteHandler = require("../controllers/deleteHandler")
const {getOneHandler, getAllHandler} = require("../controllers/getHandler")

const router = express.Router();

router.get('/:id', getOneHandler);
router.get('/', getAllHandler);
router.post('/', createHandler);
router.put('/:id', updateHandler);
router.delete('/:id', deleteHandler);

module.exports = router;