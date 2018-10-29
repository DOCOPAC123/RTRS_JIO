import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

interface IProps {
  history: any;
}
interface IState {
  temp: number;
  photoData: string;
}
class Articles extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      photoData: "4677",
      temp: 0
    };
  }
  public loadFile = (event: any) => {
    this.setState({
      photoData: URL.createObjectURL(event.target.files[0])
    });
  };
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
                  // tslint:disable-next-line:no-empty
                  // tslint:disable-next-line:jsx-no-lambda
                  //   onClick={() => {
                  //     const { history } = this.props;
                  //     // history.back(1);
                  //   }}
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
        <input
          type="file"
          accept="image/*"
          capture={true}
          onChange={this.loadFile}
        />
        {this.state.photoData !== "" ? (
          <img src={this.state.photoData} alt="image not available" />
        ) : null}

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
export default Articles;
