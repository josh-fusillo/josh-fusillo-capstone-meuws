import React, { Component } from "react";
import "./Main.scss";
import animatedLogo from "../../assets/Logo-movie-wide-two.mp4";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion";
import FooterTwo from "../Footer/FooterTwo";

const pageTransition = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export default class Main extends Component {
  render() {
    if (this.props.redirect) {
      return <Redirect to="/MainTwo" />;
    }

    return (
      <>
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransition}
        >
          <div className="main">
            <div className="main__logo-wrapper">
              <video
                src={animatedLogo}
                autoPlay
                loop
                className="main__logo"
                alt="Logo"
              />
            </div>
            <div>
              <form className="main__form" onSubmit={this.props.handleSubmit}>
                <input
                  type="text"
                  className="main__search"
                  placeholder="Search your favourite musician!"
                  value={this.props.searchName}
                  onChange={this.props.onChange}
                />
              </form>
            </div>
            <div className="footer__main-one"></div>
          </div>
        </motion.div>
      </>
    );
  }
}
