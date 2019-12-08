import "./bootstrap-style.css";
const scrollDown = () => {
  let heightGradient = document.getElementById("gradient").offsetHeight;
  let heightNavbar = document.getElementById("navbar").offsetHeight;
  window.scrollTo({
    top: heightGradient - heightNavbar,
    behavior: "smooth"
  });
};
export default scrollDown;
