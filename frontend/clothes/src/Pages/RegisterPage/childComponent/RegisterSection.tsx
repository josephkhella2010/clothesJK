import { toast, ToastContainer } from "react-toastify";
import styles from "../registerPage.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, fetchUsers } from "../../../reducerSlices/UserSlice";
import type { RootState } from "../../../Store/store";
export default function RegisterSection() {
  const { users } = useSelector((state: RootState) => state.userData);
  console.log(users);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInfo.username || !userInfo.email || !userInfo.password) {
      toast.error("please fill all fields");

      return;
    }
    try {
      const existingUser = users.find(
        (user) =>
          user.username === userInfo.username || user.email === userInfo.email
      );
      if (existingUser) {
        toast.error("username is already exist");

        return;
      }
      const newUser = {
        username: userInfo.username,
        email: userInfo.email,
        password: userInfo.password,
      };
      dispatch(fetchUser(newUser));
      toast.success("user created successfully");
      setUserInfo({
        username: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className={styles.formContainer}>
      <ToastContainer />
      <form action="" className={styles.formSection} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userInfo.username}
          onChange={(e) => {
            setUserInfo((prev) => ({
              ...prev,
              username: e.target.value,
            }));
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={userInfo.email}
          onChange={(e) => {
            setUserInfo((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />
        <input
          type="text"
          placeholder="password"
          value={userInfo.password}
          onChange={(e) => {
            setUserInfo((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
        />
        <button>Register</button>
      </form>
    </div>
  );
}
