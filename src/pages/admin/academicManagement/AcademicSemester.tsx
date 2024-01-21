import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data: semesters } = useGetAllSemestersQuery(undefined);
  console.log(semesters);
  return <div>Academic semester</div>;
};

export default AcademicSemester;
