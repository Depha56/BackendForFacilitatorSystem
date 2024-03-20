import express from  'express';
import facilitatorController from "../controllers/facilitatorController.js";
const facilitatorRoutes=express.Router();
facilitatorRoutes.post("/facilitator/create",facilitatorController.createFacilitator);
facilitatorRoutes.get("/facilitator/list",facilitatorController.getFacilitators);
facilitatorRoutes.get("/id/:id",facilitatorController.getFacilitatorById);
facilitatorRoutes.put("/update/:id",facilitatorController.updateFacilitator);
facilitatorRoutes.delete("/remove/:id",facilitatorController.deleteFacilitator)
export default facilitatorRoutes;