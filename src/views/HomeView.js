import React from "react";
import image from "./sign-1719905_1920.png";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "1024px",
    borderRadius: "10px",
    boxShadow:
      "inset -3px -3px 8px rgb(0 0 0 / 50%), inset 3px 3px 8px hsl(0deg 0% 100% / 90%), 3px 3px 8px -3px rgb(0 0 0 / 80%)",
  },
};

export default function HomeView() {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={image} alt="welcome page" />
    </div>
  );
}
