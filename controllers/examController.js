import Exams from '../model/AllExam.js';
import Exam from '../model/Exams.js'



export async function createExam(req, res) {
  try {
    const { customID, examName, regions, logo } = req.body;

    // Validate the required fields
    if (!customID || !examName) {
      return res.status(400).json({ error: 'customID and examName are required' });
    }

    // Create the exam object with the provided details
    const newExam = new Exams({
      customID,
      examName,
      regions,
      logo,
    });

    // Save the new exam to the database
    await newExam.save();

    // Return the created exam with a success status
    res.status(201).json({
      message: 'Exam created successfully',
      exam: newExam,
    });
  } catch (error) {
    // Handle any errors that occur during saving
    res.status(500).json({
      error: error.message,
      message: 'An error occurred while creating the exam',
    });
  }
}




// Get all exams
export async function getAllExam (req, res){
  try {
    const exams = await Exam.find({});
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exams', error: error.message });
  }
}

// Get a specific exam by ID
export async function getExamById(req, res){
  const { id } = req.params;
  try {
    const exam = await Exam.findById(id);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching exam', error: error.message });
  }
}

// Create a new exam
export async function createExams(req, res) {
  try {
    const newExam = new Exam(req.body);
    const savedExam = await newExam.save(); // This can throw an error if validation fails
    res.status(201).json(savedExam);
  } catch (error) {
    res.status(400).json({
      message: 'Error creating exam',
      error: error.message,
      details: error.errors // This shows validation errors if any
    });
  }
}

// Update an existing exam by ID
export async function updateExams (req, res){
  const { id } = req.params;
  try {
    const updatedExam = await Exam.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validations are enforced
    });

    if (!updatedExam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    res.json(updatedExam);
  } catch (error) {
    res.status(400).json({ message: 'Error updating exam', error: error.message });
  }
}

// Delete an exam by ID
export async function deleteExam (req, res){
  const { id } = req.params;
  try {
    const deletedExam = await Exam.findByIdAndDelete(id);

    if (!deletedExam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    res.json({ message: 'Exam deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting exam', error: error.message });
  }
}

