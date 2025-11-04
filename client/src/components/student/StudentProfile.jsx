import React from "react";
import Card from "../common/Card";

const StudentProfile = () => {
  const profile = {
    name: "Raghvendra",
    email: "raghvendra@student.com", 
    course: "Computer Science",
    semester: "4th",
    phone: "+91 9876543210"
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Profile</h1>
      <Card>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Course:</strong> {profile.course}</p>
        <p><strong>Semester:</strong> {profile.semester}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
      </Card>
    </div>
  );
};

export default StudentProfile;