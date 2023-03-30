const express = require("express");
const router = express.Router();
const productController = require("../controller/productController")
const verifyToken = require("../middleware/jwt")

router.post('/addProduct',verifyToken,productController.addProduct)
router.post('/findProduct',productController.findProduct)
router.post('/deleteProduct',verifyToken,productController.deleteProduct)
router.post('/updateProduct',verifyToken,productController.updateProduct)


module.exports = router