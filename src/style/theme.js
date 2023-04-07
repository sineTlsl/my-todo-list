const size = {
  mobile: "767px",
  tablet: "1023px",
  desktop: "1024px",
};

const colors = {
  lightPink: "#dfc4c4",
  lightGray: "#717171",
};

const lightMode = {
  background: `${colors.lightPink}`,
  TodosTitleText: "#5E3737",
};

const darkMode = {
  background: `${colors.lightGray}`,
};

const theme = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  selectTab: "#824747",
  tab: "#D9D9D9",
  headerTitleText: "#212529",
  lightMode,
  darkMode,
};

export default theme;
