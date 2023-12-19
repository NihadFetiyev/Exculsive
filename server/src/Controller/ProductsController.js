// CRUD for products
router.get('/', async (req, res) => {
    try {

        const products = await productModel.find({});
        res.send(products)
    } catch (error) {
        res.status(500).json({ message: error })

    }
})
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await productModel.findById(id)
        res.send(product)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.post('/', async (req, res) => {
    try {
        const product = new productModel(req.body);
        await product.save()
        res.send(product)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await productModel.findByIdAndUpdate(id, req.body)

        res.send(product)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id)
        res.send(product)
    } catch (error) {
        res.status(500).json({ message: error })
    }
})