import React from "react";
import CustomizedTable from "./CustomizedTable";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./EmployeeServices/store";
import showResults from "./EmployeeServices/showResults";
import SimpleForm from "./EmployeeServices/addUserForm";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};
const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class Employee extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="Employee Details" />
            <Tab label="New Employee " />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <CustomizedTable />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Provider store={store}>
              <div style={{ padding: 15 }}>
                <h2>Add New USer Details</h2>
                <SimpleForm onSubmit={showResults} />
                <Values form="simple" />
              </div>
            </Provider>
          </TabContainer>
        )}
      </div>
    );
  }
}
Employee.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Employee);
