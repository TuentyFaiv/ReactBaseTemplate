import getBoot from "@boot";

export default function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      const langValidation = state.lang === "en" ? "es" : "en";
      localStorage.setItem("brandlang", langValidation);
      return {
        ...state,
        boot: getBoot()[langValidation],
        lang: langValidation
      };
    default:
      return state;
  }
}
