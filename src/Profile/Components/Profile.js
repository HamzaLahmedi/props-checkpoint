import React from 'react'
import PropTypes from 'prop-types';
function Profile({fullName,bio,children,handleName,profession}) {
  return (
    <div>
        {children}  
      <h2>{fullName}</h2>
      <h2>{bio}</h2>
      <h2>{profession}</h2>
      <button onClick={()=>handleName(`${fullName}`)}> click me</button>
    </div>
  )
}
Profile.propTypes={
    handleName: PropTypes.func,
    fullName: PropTypes.string, 
    bio: PropTypes.string,
    profession: PropTypes.string,
}
Profile.defaultProps={
    profession:"GO My Code student"
}

export default Profile
