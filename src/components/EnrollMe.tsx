import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
interface IProps {
  history: any;
}
interface IState {
  name: string;
  collegeName: string;
  enrollmentNo: string;
  mobileNo: string;
  emailId: string;
}
class EnrollMe extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "",
      // tslint:disable-next-line:object-literal-sort-keys
      collegeName: "",
      enrollmentNo: "",
      mobileNo: "",
      emailId: ""
    };
  }
  // tslint:disable-next-line:member-access
  handleSubmit = (e: any) => {
    // tslint:disable-next-line:no-console
    const info = this.state;
    // tslint:disable-next-line:no-console
    console.log(JSON.stringify(info));
    // console.log(JSON.stringify());
    // Default options are marked with *
    fetch("http://localhost:8080/create", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      // tslint:disable-next-line:object-literal-sort-keys
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
        // "Content-Type": "application/json; charset=utf-8"
        "Content-Type": "application/json",
        // tslint:disable-next-line:object-literal-sort-keys
        Accept: "application/json"
      },
      // tslint:disable-next-line:object-literal-sort-keys
      body: JSON.stringify(info) // body data type must match "Content-Type" header
    });
  };

  public updateName = (e: any) => {
    // tslint:disable-next-line:no-console
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  };
  public updatecollegeName = (e: any) => {
    this.setState({ collegeName: e.target.value });
  };

  public updateenrollmentNo = (e: any) => {
    this.setState({ enrollmentNo: e.target.value });
  };

  public updateemailId = (e: any) => {
    this.setState({ emailId: e.target.value });
  };

  public updatemobileNo = (e: any) => {
    this.setState({ mobileNo: e.target.value });
  };
  public render() {
    return (
      <div>
        {/* Header Of the Page */}
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

        {/* //*************FORM BODY***************** */}
        <div>
          <Typography
            style={{
              textAlign: "center",
              // tslint:disable-next-line:object-literal-sort-keys
              fontSize: "30px",
              marginTop: "15%",
              fontFamily: "cursive"
            }}
          >
            Enter the Form Details
          </Typography>
        </div>
        <div
          className="registration-form"
          // style={{
          //   textAlign: "center",
          //   verticalAlign: "middle",
          //   // tslint:disable-next-line:object-literal-sort-keys
          //   margin: "5% 15% 15% 15%",
          //   paddingTop: "20px"
          // }}
        >
          <TextField
            label="Enter Name"
            fullWidth={true}
            onChange={this.updateName}
          />

          <TextField
            label="Enter College Name"
            fullWidth={true}
            onChange={this.updatecollegeName}
          />
          <TextField
            label="Enter College Enrollment Number"
            fullWidth={true}
            onChange={this.updateenrollmentNo}
          />

          <TextField
            label="Enter Mobile Number"
            fullWidth={true}
            type="number"
            onChange={this.updatemobileNo}
          />

          <TextField
            label="Enter Email Id"
            type="email"
            fullWidth={true}
            onChange={this.updateemailId}
          />

          <Button
            variant="contained"
            color="secondary"
            style={{ fontSize: "30px", borderRadius: "30px", marginTop: "10%" }}
            onClick={this.handleSubmit}
            disabled={
              (this.state.name==="") &&
              (this.state.mobileNo==="") && (this.state.collegeName==="")&&
              (this.state.enrollmentNo==="") && (this.state.emailId==="")
            }
          >
            Submit
          </Button>
        </div>

        {/* Footer of the Page */}
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
              <Typography
                style={{
                  padding: "20px",
                  // tslint:disable-next-line:object-literal-sort-keys
                  fontFamily: "cursive",
                  margin: "10px"
                }}
              >
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
export default EnrollMe;
