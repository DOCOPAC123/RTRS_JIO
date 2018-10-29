// tslint:disable-next-line:ordered-imports
import AppBar from "@material-ui/core/AppBar";
// tslint:disable-next-line:ordered-imports
import Button from "@material-ui/core/Button";
// tslint:disable-next-line:ordered-imports
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// tslint:disable-next-line:ordered-imports
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

// interface IProps {
//   status: any;
//   customerName: any;
//   appointmentId: any;
//   phoneNo: any;
//   carMake: any;
//   carModel: any;
//   carVariant: any;
//   date: any;
//   vehicle: any;
// }

const styles = {
  card: {
    minWidth: 275
  },
  // tslint:disable-next-line:object-literal-sort-keys
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 0,
    // tslint:disable-next-line:object-literal-sort-keys
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  d: {
    display: "flex"
  }
};

function Profile(props: any) {
  const { classes } = props;

  // const customerId = customer.customerId;
  //   function handleClick(e: any) {
  //     history.push(`/customerInspections/${customer.customerId}`);
  //   }

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography
            variant="title"
            style={{
              fontSize: "0.875rem",
              // tslint:disable-next-line:object-literal-sort-keys
              fontFamily: "sans-serif"
            }}
          >
            {props.field}
          </Typography>
        </Toolbar>
      </AppBar>
      <Card className={classes.card}>
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px"
            }}
          >
            <div>
              <div style={{ display: "flex" }}>
                <Typography variant="title" style={{ fontSize: "14px" }}>
                  "Rohit"
                </Typography>
              </div>
              <div style={{ display: "flex", marginTop: "5px" }}>
                <Typography
                  className={classes.pos}
                  color="textSecondary"
                  style={{ fontSize: "12px" }}
                >
                  "Chauhan"
                </Typography>
              </div>
            </div>
            <CardActions>
              <Button
                variant="raised"
                mini={true}
                style={{
                  backgroundColor: "rgba(0,182,182,1)",
                  borderRadius: 30,
                  padding: "5px",
                  width: "140px",
                  // tslint:disable-next-line:object-literal-sort-keys
                  display: "block"
                }}
                // onClick={handleClick}
                color="primary"
              >
                View
              </Button>
            </CardActions>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(Profile);
