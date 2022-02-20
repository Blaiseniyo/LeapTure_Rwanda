import React,{useState} from "react";
import Likes from "../assets/facebook/facebookLike.png";
import Like from "../assets/facebook/facebookLikee.png";
import Comment from "../assets/facebook/comment.png";
import Share from "../assets/facebook/facebookShare.png";

const TimeLine = (props) => {
    const [data, setContent] = useState(props)
    console.log(data)
  const { user_mood, content, message } = props;
  const {metadata,comments,likes} = content;
  const { created_by,url} = metadata
  return (
    <div className="timeline-container my-4 text-gray-200 font-sans">
      <div className="">
        {/* profile image */}
        <div className="mx-4 pt-4 pb-1">
          <div className="flex">
            <div className="image-container">
              <img
                src="https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js="                alt="profile_image"
              />
            </div>
            <div className="flex items-center">
              <span className="px-2 font-serif font-bold">{created_by.display_name}</span>
            </div>
          </div>
          {/* message */}
          <div>
            <p>
             {message}
            </p>
          </div>
        </div>
        {/* images */}
        <div>
          <img
            src="https://images.yourstory.com/cs/wordpress/2017/04/124-big-picture.jpg"
            alt="shared image"
          />
        </div>
        <div className="flex justify-between mx-3 my-2">
          <div className="flex">
            <img src={Likes} className="icon" />
            <h5 className="pt-1">{`${likes.total_reactions} reactions`}</h5>
          </div>
          <div>
            <h5>{`${comments.total} comments`}</h5>
          </div>
        </div>
        <hr />
        {/* reactions */}
        <div className="flex justify-around items-center py-3">
          <div className="hover:bg-gray-500 flex p-2 reaction">
            <img src={Like} className="icon" />
            <h2 className="pt-1">like</h2>
          </div>
          <div className="hover:bg-gray-500 flex p-2 reaction">
            <img src={Comment} className="icon" />
            <h2 className="pt-1">comment</h2>
          </div>
          <div className="hover:bg-gray-500 flex p-2 reaction">
            <img src={Share} className="icon" />
            <h2 className="pt-1">share</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
