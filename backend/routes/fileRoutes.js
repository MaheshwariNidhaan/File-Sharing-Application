import express from "express";
import { uploadImage, getImage } from "../controllers/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage); // call uploadImage function whenever /upload route is called
router.get("/file/:fileId", getImage); // call getImage function whenever /file/:fileId route is called

export default router;
