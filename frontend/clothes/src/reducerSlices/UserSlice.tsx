import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserType } from "../helps/InterfacesType";
interface PropsType {
  users: UserType[];
}
const initialState: PropsType = {
  users: [],
};
const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.users.push(action.payload);
    },
    setUsers: (state, action: PayloadAction<UserType[]>) => {
      state.users = action.payload;
    },
    fetchUser: (state, action: PayloadAction<UserType>) => {
      state.users.push(action.payload);
    },
    fetchUsers: () => {},
  },
});
export const { setUser, setUsers, fetchUser, fetchUsers } = UserSlice.actions;
export default UserSlice.reducer;
