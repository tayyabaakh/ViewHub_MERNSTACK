// Jab aap database se data mangwate hain, toh aap async/await use karte hain. Agar database band ho ya koi error aaye, toh Express ko pata nahi chalta
// reusable function to handle async errors in express routes

const asyncHandler=(requestHandler)=>{
   return (req,res,next)=>{
    Promise
    .resolve(requestHandler(req,res,next))
    .catch((err)=>{
        next(err)
    })
   }
}
export default asyncHandler;