const datau = {
    id:"1",
    name:"gery",
    alamat:"jojga",
    phone:"0852"
}

const getBook = (req,res) => {
    res.json({
        message:"get data",
        data:datau
    })
}

const createBooks = (req, res) => {
    console.log(req.body);
    res.json({
        message:"Create Book Succces",
        data:req.body
    })
}

const updateBook = (req,res) => {
    const {id} = req.params
    console.log(id,req.body);
    res.json({
        message:"update",
        data:req.body
    })
}

const deleteBook = (req,res) => {
    const {id} = req.params;
    res.json({
        message:"hapus",
        id:id,
        data:datau

    })
    
}

export default {
    createBooks,
    getBook,
    updateBook,
    deleteBook,
}