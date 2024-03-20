import facilitatorModel from '../models/facilitatorModel.js';

const facilitatorControler = {
  createFacilitator: async (req, res) => {
    try {
      const newFacilitator = await facilitatorModel.create(req.body);
      res.status(201).json(newFacilitator);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getFacilitators: async (req, res) => {
    try {
      const facilitators = await facilitatorModel.find();
      res.status(200).json(facilitators);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getFacilitatorById: async (req, res) => {
    try {
      const facilitator = await facilitatorModel.findById(req.params.id);
      if (!facilitator) {
        return res.status(404).json({ error: "Facilitator not found" });
      }
      res.status(200).json(facilitator);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
 
  // Update a facilitator by ID
  updateFacilitator: async (req, res) => {
    try {
      const updatedFacilitator = await facilitatorModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedFacilitator) {
        return res.status(404).json({ error: "Facilitator not found" });
      }
      res.status(200).json(updatedFacilitator);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  deleteFacilitator: async (req, res) => {
    try {
      const deletedFacilitator = await facilitatorModel.findByIdAndDelete(
        req.params.id
      );
      if (!deletedFacilitator) {
        return res.status(404).json({ error: "Facilitator not found" });
      }
      res.status(200).json({ message: "Facilitator deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
 export default facilitatorControler;