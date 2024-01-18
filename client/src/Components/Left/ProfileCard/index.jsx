import React from 'react'
import "./index.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

const Profilecard = ({location}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const posts = useSelector((state)=>state.postReducer.posts)

  const followersCount = user.followers ? user.followers.length : 0;
  const followingCount = user.following ? user.following.length : 0;

  return (
    <div className="ProfileCard">
      <div className="ProfileImage">
        <img src={user.coverPicture
          ? serverPublic + user.coverPicture
          : serverPublic + "defaultCover.jpg"}
          alt='' />
        <img src={user.ProfilePicture
          ? serverPublic + user.ProfilePicture
          : serverPublic + "defaultProfile.png"}
          alt='' />
      </div>

      <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.worksAt ? user.worksAt : "write about yourself"}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{followersCount}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{followingCount}</span>
            <span>Following</span>
          </div>

          {location === "profilePage" && (
            <>
              <div className="vl">

              </div>
              <div className="follow">
                <span>
                {posts.filter((post)=> post.userId === user._id).length}
                </span>
                <span>
                  Posts
                </span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage"? "" : <span>
        <Link to={`/profile/${user._id}`} style={{ textDecoration: "none", color: "inherit" }}>
          My Profile
        </Link>
      </span>}
    </div>
  )
}

export default Profilecard