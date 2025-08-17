import { useEffect, useState } from "react";
import type { SingleUserType } from "../../../helps/InterfacesType";
import { toast, ToastContainer } from "react-toastify";
import styles from "../LoginPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../Store/store";
import { fetchUsers } from "../../../reducerSlices/UserSlice";
import {
  setLogOUt,
  setPostLoginSaga,
} from "../../../reducerSlices/LoginUserSlice";
export default function LoginSection() {
  const [userInfo, setuserInfo] = useState<SingleUserType>({
    username: "",
    password: "",
  });
  const { userStorage, token } = useSelector(
    (state: RootState) => state.loginUserData
  );
  const { users } = useSelector((state: RootState) => state.userData);
  const dispatch = useDispatch();
  console.log(userStorage);
  console.log(token);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const findUser = users.find(
      (user) =>
        user.email === userInfo.username || user.username === userInfo.username
    );
    if (!userInfo.username || !userInfo.password) {
      toast.error(" please fill all field");
      return;
    }
    if (
      findUser?.email !== userInfo.username &&
      findUser?.username !== userInfo.username
    ) {
      toast.error("username is not found please register first to can login");
      return;
    }
    if (findUser?.password != userInfo.password) {
      toast.error("password is not matched");
      return;
    }
    dispatch(
      setPostLoginSaga({
        username: userInfo.username,
        password: userInfo.password,
      })
    );

    toast.success("successfully login");
    console.log(findUser);
    try {
      if (!userInfo.username || !userInfo.password) {
        toast.error(" please fill all field");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.formContainer}>
      <ToastContainer />
      {token && <h2> welcome {userStorage?.username}</h2>}
      <form action="" className={styles.formSection} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userInfo.username}
          onChange={(e) => {
            setuserInfo((prev) => ({
              ...prev,
              username: e.target.value,
            }));
          }}
        />

        <input
          type="text"
          placeholder="password"
          value={userInfo.password}
          onChange={(e) => {
            setuserInfo((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
        />
        <button type="submit">Login</button>
      </form>
      <button
        onClick={() => {
          dispatch(setLogOUt());
        }}
      >
        logout
      </button>
    </div>
  );
}
