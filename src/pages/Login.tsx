import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register } = useForm({
  //   defaultValues: {
  //     id: "A-0001",
  //     password: "admin123",
  //   },
  // });

  const defaultValues = {
    id: "A-0001",
    password: "admin123",
  };

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    // console.log(data);
    const toastId = toast.loading("Logging in");

    try {
      const res = await login(data).unwrap();
      console.log(res);

      const user = verifyToken(res?.data?.accessToken) as TUser;

      dispatch(setUser({ user, token: res?.data?.accessToken }));
      toast.success("Login Successful", { id: toastId, duration: 2000 });

      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align={"middle"} style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <div>
          <PHInput type={"text"} name={"id"} label="ID" />
        </div>
        <div>
          <PHInput type={"text"} name={"password"} label="Password" />
        </div>
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
