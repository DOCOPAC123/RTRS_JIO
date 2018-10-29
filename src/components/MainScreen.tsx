import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import "./App.css";
import Profile from "./Profile";
interface IProps {
  history: any;
}

interface IState {
  temp: any;
}
class MainScreen extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <div>
          <AppBar position="static" color="default">
            <Toolbar
              style={{
                paddingTop: "30px",
                // tslint:disable-next-line:object-literal-sort-keys
                paddingBottom: "40px",
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap"
              }}
            >
              <Typography
                variant="title"
                color="inherit"
                style={{ fontSize: "30px", fontFamily: "cursive" }}
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => {
                  const { history } = this.props;
                  history.push("/");
                }}
              >
                Expert-Preparation
              </Typography>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    fontSize: "15px",
                    marginRight: "10px",
                    // tslint:disable-next-line:object-literal-sort-keys
                    borderRadius: "5px"
                  }}
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => {
                    const { history } = this.props;
                    // tslint:disable-next-line:no-console

                    history.push("/");
                  }}
                >
                  Home
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ fontSize: "15px", borderRadius: "5px" }}
                  // tslint:disable-next-line:jsx-no-lambda
                  onClick={() => {
                    const { history } = this.props;
                    history.push("/articles");
                  }}
                >
                  Concepts
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </div>

        <div>
          <div
            id="body"
            style={{
              padding: "10px",
              paddingBottom: "40px"
            }}
          >
            <div
              style={{
                background: "rgba(65,194,153, 0.8) ",
                // tslint:disable-next-line:object-literal-sort-keys
                alignContent: "center"
              }}
            >
              <div>
                <Typography
                  style={{
                    fontSize: "30px",
                    paddingTop: "40px",
                    // tslint:disable-next-line:object-literal-sort-keys
                    paddingBottom: "20px",
                    marginLeft: "20px",
                    marginRight: "20px",
                    textAlign: "center",
                    color: "white"
                  }}
                >
                  Mock Interview and important Guidelines with Computer
                  Enginners from IIT's.
                </Typography>
              </div>
            </div>
            {/* ***************************** */}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                // flexDirection: "column",
                justifyContent: "space-around",
                margin: "40px"
              }}
            >
              <Profile field="Data Structure and Algorithms" />
              <Profile field="Operating System" />
              <Profile field="Computer Networks" />
            </div>
            {/* ***************************** */}
            <div>
              <div>
                <div
                  style={{
                    fontSize: "30px",
                    paddingTop: "40px",
                    // tslint:disable-next-line:object-literal-sort-keys
                    paddingBottom: "20px",
                    margin: "50px,20px,50px,20px"
                  }}
                >
                  <div style={{ marginLeft: "20px" }}>
                    <Typography style={{ fontSize: "30px" }}>
                      OverView
                    </Typography>
                    <Typography
                      style={{
                        alignContent: "left",
                        fontSize: "20px",
                        // tslint:disable-next-line:object-literal-sort-keys
                        fontFamily: "Merriweather",
                        padding: "20px"
                      }}
                    >
                      <li>
                        Get Mock Interviews and get the feedback about your
                        performance.
                      </li>
                      <li>
                        Get Guidance of how to handle the interviewer in both
                        technical round and HR Round.
                      </li>
                      <li>Get a Mentor.</li>
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                // tslint:disable-next-line:object-literal-sort-keys
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                style={{ fontSize: "30px", borderRadius: "30px" }}
                // tslint:disable-next-line:jsx-no-lambda
                onClick={() => {
                  const { history } = this.props;
                  history.push("/enroll-me");
                }}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
        <footer
          style={{
            position: "relative",
            // tslint:disable-next-line:object-literal-sort-keys
            marginBottom: "-300px",
            // tslint:disable-next-line:object-literal-sort-keys
            bottom: "0",
            left: "0",
            right: "0",
            textAlign: "center"
          }}
        >
          <div style={{ background: "rgb(248,248,248)" }}>
            <div style={{ textAlign: "center" }}>
              <Typography style={{ padding: "20px", fontFamily: "cursive" }}>
                Expert-Preparation
              </Typography>
              <Typography style={{ padding: "20px" }}>
                expertpreparation@gmail.com
              </Typography>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default MainScreen;
