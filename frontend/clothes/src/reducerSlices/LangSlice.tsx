/* import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
type LangType = "SV" | "ENG";

interface InitialStateType {
  lang: LangType;
}

const initialState: InitialStateType = {
  lang: (localStorage.getItem("lang") as LangType) ?? "SV",
};
const LangSlice = createSlice({
  name: "LangSlice",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<LangType>) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});
export type SupportedLanguages = "SV" | "ENG";

export const { setLang } = LangSlice.actions;
export default LangSlice.reducer;
 */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type SupportedLanguages = "SV" | "ENG";

interface LangState {
  lang: SupportedLanguages;
}

const initialState: LangState = {
  lang: (localStorage.getItem("lang") as SupportedLanguages) ?? "SV",
};

const LangSlice = createSlice({
  name: "LangSlice",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<SupportedLanguages>) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export const { setLang } = LangSlice.actions;
export default LangSlice.reducer;
