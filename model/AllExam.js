import mongoose from 'mongoose';

// Define schema for questions in a mock test
const QuestionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: [true, 'Question text is required'],
  },
  options: [
    {
      type: String,
      required: [true, 'Option text is required'],
    },
  ],
  correctAnswer: {
    type: String,
    required: [true, 'Correct answer is required'],
  },
});

// Define schema for mock tests containing sets of questions
const MockTestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Mock test name is required'],
  },
  questions: [QuestionSchema], // Array of questions
});

// Define schema for previous papers containing PDF links
const PreviousPaperSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Previous paper name is required'],
  },
  pdf: {
    type: String,
    required: [true, 'PDF link is required'],
    validate: {
      validator: (v) => /^https?:\/\//.test(v),
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
});

// Define schema for subcategories with mock tests and previous papers
const SubCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Subcategory name is required'],
  },
  exams_material: {
    mocktests: [MockTestSchema], // Array of mock tests
    previous_papers: [PreviousPaperSchema], // Array of previous papers with PDF links
  },
});

// Define schema for categories containing subcategories
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category name is required'],
  },
  subcategories: [SubCategorySchema], // Array of subcategories
});

// Define schema for areas with categories
const AreaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Area name is required'],
  },
  categories: [CategorySchema], // Array of categories
});

// Define schema for regions with areas
const RegionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Region name is required'],
  },
  areas: [AreaSchema], // Array of areas
});

// Define the Exam schema with a unique custom ID
const ExamSchema = new mongoose.Schema({
  customID: {
    type: String,
    required: true,
    unique: true, // Enforce uniqueness
    index: true, // Ensure it's indexed for fast queries
  },
  examName: {
    type: String,
    required: [true, 'Exam name is required'],
  },
  regions: [RegionSchema], // Array of regions
  logo: {
    type: String,
    validate: {
      validator: (v) => /^https?:\/\//.test(v),
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
});


// Export the Exam model
export default mongoose.model('Exams', ExamSchema);






