// src/components/UserProfile.jsx

const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>   {/* عرض الاسم */}
            <p>Age: {props.age}</p>  {/* عرض العمر */}
            <p>Bio: {props.bio}</p>  {/* عرض السيرة الذاتية */}
        </div>
    );
}

export default UserProfile;
