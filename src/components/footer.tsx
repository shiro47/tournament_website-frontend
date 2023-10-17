import React from "react";

interface props { }


const Footer: React.FC<props> = (props) => {

  return (
    <footer className="text-center py-4 bg-dark text-light">
      &copy; {new Date().getFullYear()} Tournament Website
    </footer>
  )
}

export default Footer;