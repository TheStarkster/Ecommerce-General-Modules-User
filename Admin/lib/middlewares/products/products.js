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
        Products.deleteOne({
            _id: {
                $in: req.body.Delete
            }
        })
            .then(u => {
                if (u) {
                    res.json({
                        message: "Product Deleted"
                    })
                }
            })
            .catch(e => {
                console.log(e)
            })
    },
    DeleteProductMultiple: (req, res) => {
        Products.deleteMany({
            _id: {
                $in: req.body.Delete
            }
        })
            .then(u => {
                res.json({
                    message: "All Product Deleted!"
                })
            })
    },
    UpdateProductMultiple: (req, res) => {
        for (var i; i <= req.body.newData.lenght; i++) {
            Products.update({ _id: req.body.newData[i][i] }, {
                name: req.body.newData[i][i+1].name,
                }
            ).then(u => {
                res.json({
                    message: u
                })
            })
        }
        // console.log(req.body.newData[0][1].name)
        // console.log(req.body.newData[0][0])
        // Products.findById({_id:req.body.newData[0][0]}).then(
        //     u=>{
        //         console.log(u)
        //     }
        // )
        // Products.update({ _id: req.body.newData[0][0] }, {
        //     name: req.body.newData[0][1].name,
        //     }
        // ).then(u => {
        //     res.json({
        //         message: u
        //     })
        // })
    }
}