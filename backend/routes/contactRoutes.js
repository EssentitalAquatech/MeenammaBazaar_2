// import express from "express";
// import { createContact } from "../controllers/contactController.js";

// const router = express.Router();

// router.post("/", createContact);

// export default router;








import express from "express";
import { createContact, getContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", getContacts); // ✅ admin

export default router;