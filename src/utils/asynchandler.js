// 01.     PROMISE METHOD

const asyncHandler = (requestHandler)=>{
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}
export {asyncHandler}



// 02.          TRY & CATCH METHOD

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next) 
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
       
//     }
// }





// Ways to write functions

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


