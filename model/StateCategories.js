import mongoose from "mongoose";

// Define the "regions" object separately
const regionsSchema = {
  regions: [
    {
      name: "All Exams",
      areas: [
        {
          name: "Teaching Exams",
          categories: [
            {
              name: "Public Service Commission Exams",
              government_exams: [
                {
                  name: "Andhra Pradesh Public Service Commission (APPSC)"
                },
                {
                  name: "Andhra Pradesh Subordinate Service Selection Board (APSSSB)"
                }
              ]
            },
            {
              name: "Staff Selection Commission Exams",
              government_exams: [
                {
                  name: "Staff Selection Commission (SSC) - Andhra Pradesh"
                }
              ]
            }
          ]
        },
        {
          name: "Arunachal Pradesh",
          categories: [
            {
              name: "Arunachal Pradesh Public Service Commission Exams",
              government_exams: [
                {
                  name: "Arunachal Pradesh Public Service Commission (APPSC)"
                }
              ]
            }
          ]
        },
        // Add other states here...
      ]
    },
    {
      name: "State Exams",
      areas: [
        {
          name: "Uttar Pradesh",
          categories: [
            {
              name: "Union Territory Civil Services Exams",
              government_exams: [
                {
                  name: "Andaman and Nicobar Islands Civil Services Exam"
                }
              ]
            }
          ]
        },
        {
          name: "Chandigarh",
          categories: [
            {
              name: "Chandigarh Administration Exams",
              government_exams: [
                {
                  name: "Chandigarh Administration Competitive Exam"
                }
              ]
            }
          ]
        }
        // Add other Union Territories here...
      ]
    }
  ]
};

const stateSchema = new mongoose.Schema({
  name: String,
  regions: [regionsSchema]
});

module.exports = mongoose.model('State', stateSchema);
