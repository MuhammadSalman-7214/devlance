import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  institute: { type: String, required: true },
  year: { type: String, required: true },
  marks: { type: String, required: true },
});

const experienceSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  currentlyWorking: { type: Boolean, required: true },
  jobDescription: { type: String, required: true },
}, { 
  validate: {
    validator: function() {
      return this.currentlyWorking || this.endDate;
    },
    message: 'If not currently working, endDate is required.'
  }
});

const freelanceProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserLogin',
    required: true
  },
  dateOfBirth: { type: Date, required: true },
  phoneNumber: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return /^\+?\d{10,15}$/.test(v);  // Example regex for phone number validation
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  country: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  streetAddress: { type: String, required: true },
  category: { type: String, required: true },  // You might use enum for predefined categories
  subCategory: { type: String, required: true },
  skills: [{ type: String, required: true }],
  languages: [{ type: String, required: true }],
  hourlyRate: { type: Number, required: true },
  skillsTitle: { type: String, required: true },
  aboutMe: { type: String, required: true },
  education: [educationSchema],
  experience: [experienceSchema]
}, { timestamps: true });

const FreelanceProfile = mongoose.model('FreelanceProfile', freelanceProfileSchema);

export default FreelanceProfile;
