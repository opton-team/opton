import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import CookieConsent from "react-cookie-consent";

import styles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHanlder = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHanlder} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={styles.Content}>{this.props.children}</main>
        <Footer />
        <CookieConsent
          buttonText="Zgoda"
          buttonStyle={{
            background: "#00cc99",
            color: "white",
            fontSize: "14px",
            marginRight: "20px",
          }}
          enableDeclineButton
          declineButtonText="Polityka prywatności"
          declineButtonStyle={{
            background: "#00cc99",
            color: "white",
            fontSize: "14px",
            marginRight: "5px",
          }}
          onDecline={() => {
            this.props.history.push("/polityka-prywatnosci");
          }}
        >
          Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
          poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich
          użycie.
        </CookieConsent>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
