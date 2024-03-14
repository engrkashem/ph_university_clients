import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";

const AcademicSemester = () => {
  const { data: semesters } = useGetAllSemestersQuery(undefined);
  console.log(semesters);
  return <div>Academic semester</div>;
};

export default AcademicSemester;
