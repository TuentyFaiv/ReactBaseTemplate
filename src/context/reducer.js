import getBoot from "@boot";

const DEFAULT_IMAGE = "";

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
    case "LOGIN":
      const { sessionId, onboarding, profileImage: imageUrl, ...defaultUser } = action.payload;
      const profileImage = (imageUrl === "" || imageUrl === null || imageUrl === undefined) ? DEFAULT_IMAGE : imageUrl;
      const user = { ...defaultUser, profileImage };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("sessionId", sessionId);
      return {
        ...state,
        user,
        sessionId,
        onboarding
      };
    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("sessionId");
      return {
        ...state,
        user: {},
        sessionId: null
      };
    default:
      return state;
  }
}
