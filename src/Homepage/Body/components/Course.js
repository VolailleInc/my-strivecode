import styled from "styled-components";
import courseList from "../utils/courseList.js";

const Image = styled.img``;
const Section = styled.section``;

function CourseProfile({ imageId, coursename }) {
  const imageUrl = "https://si.imgur.com/" + imageId + " s.jpg";
  return <Image className="avatar" src={imageUrl} alt={coursename} />;
}

export default function Course() {
  return (
    <Section>
      {courseList.map((course) => (
        <CourseProfile
          key={course.id}
          coursename={course.coursename}
          imageId={course.imageId}
        />
      ))}
    </Section>
  );
}
