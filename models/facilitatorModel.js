import mongoose from 'mongoose';
const FacilitatorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  nationalId: {
    type: String,
    required: true,
    unique: true,
    length: 16,
  },
  courses: {
    type: [String],
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: {
      values: ['Technical Facilitator', 'Assistant Technical Facilitator'],
      message: 'Role must be Technical Facilitator or Assistant Technical Facilitator',
    },
  },
}, { timestamps: true });

const facilitatorModel = mongoose.model('Facilitator', FacilitatorSchema);

export default facilitatorModel;