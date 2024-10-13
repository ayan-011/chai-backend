import {Router} from "express"
import { registerUser } from "../controllers/user.controller.js"
import { upload} from "../middliewares/multer/middleware.js"

const router = Router()

router.route("/register").post(
    upload.fields([
        
    ]),
    registerUser)

export default router
