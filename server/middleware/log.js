const logRequest = (req,res,next) => {
    console.log('log req',req.path);
    next();
}

export default logRequest