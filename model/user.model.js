import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    phone: {
        type: Number,
        required: [true, "Please provide a unique phone no."],
        unique: true,
    },

    email: {
        type: String,
        required: [true, "Please provide a unique email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    },
    isemailverify: {
        type: Boolean,
        default: false
    },
    verifyOTP: {
        type: String,
        default: " "
    },
    OTPtimeperiod: {
        type: String,
        default: " "
    },
    resetToken: {
        type: String,
        default: ""
    },
    tokenperiod: {
        type: String,
        default: " "
    },
    dateofbirth:{
        type: String
    },
    category: {
        type: String,
        enum: ['general', 'OBC','SC','ST','PWD-Vl','HI']
   },
   pincode:{
    type:String,
   },
   education:{
    type:String,
    enum: ['10th', '12th','B.A','B.Arch','BA.LLB','B.Des.'
    ,'B.El.Ed','B.P.Ed','B.U.M.S','BAMS','BCA','B.B.A/B.M.S'
    ,'B.Com','B.Ed','BDS','BFA','BHM','B.Pharma',
    'B.Sc','B.Tech/B.E.','BHMS','LLB','MBBS','Diploma',
    'BVSC','CA','CS','DM','ICWA(CMA)','Integrated PG/ Dual Degree(Eng.)',
    'Integrated PG/Dual Degree(Non Eng.)','LLM','M.A','M.Arch','M.Ch',
    'M.Com','M.Des.','M.Ed','M.Pharma','MDS','MFA','MS/M.Sc(Science)',
    'M.Tech','MBA/PGDM','MCA','Medical-MS/MD','PG Diploma','MVSC','MCM']
   },
   image: {
    type: String,
  }

});

export default mongoose.model.Users || mongoose.model('User', UserSchema);