import mongoose from "mongoose";

const postSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
          },
          category:String,
          image:String,

          date:{
            type:Date,
            default:Date.now,
          },
          content:{
            type:String,
            required:true,
          },
    },
    {timestamps:true}
    
);
const Post = mongoose.model("Post", postSchema);
export default Post;