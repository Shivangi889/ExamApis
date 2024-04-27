import mongoose from 'mongoose';

// Define the ExamSchema
const Examcreate = new mongoose.Schema({
    examName: {
      type: String,
      required: [true, 'Exam name is required'],
  
    },
    
    logo: {
      type: String,
      // required: [true, 'Logo URL is required'], // This can be a URL to the image file
      validate: {
        validator: function (v) {
          return /^https?:\/\//.test(v); 
        },
        message: props => `${props.value} is not a valid URL!`, 
      },
    },
  });
  
  // Export the Exam model
  export default mongoose.model('Exam', Examcreate);