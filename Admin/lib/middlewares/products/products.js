const Products = require('../../models/products/product')
module.exports = {
    ProductFetch: (req, res) => {
        Products.find().limit(20)
            .then(p => {
                if (p) {
                    res.json(p)
                } else {
                    res.json({
                        message: "No Products Found!"
                    })
                }
            })
            .catch(e => {
                console.log(e)
            })
    },
    CreateProductSingle: (req, res) => {
        const NewProduct = new Products({
            name: req.body.name,
            disc: req.body.disc,
            price: req.body.price,
            stock: req.body.stock
        })
        NewProduct.save()
            .then(u => {
                res.json({
                    message: "Product Saved"
                })
            })
    },
    DeleteProuctSingle: (req, res) => {
        Products.deleteOne({_id:req.body._id})
        .then(u=>{
            res.json({
                message:"Product Deleted"
            })
        })
        .catch(e=>{
            console.log(e)
        })
    },
    DeleteProductMultiple: (req,res) => {
        Products.deleteMany({
            _id: {
                $in: req.body.BulkDelete
            }
        })
        .then(u=>{
            res.json({
                message:"All Product Deleted!"
            })
        })
    }
}