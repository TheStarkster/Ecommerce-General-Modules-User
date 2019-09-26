import React, { Component } from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './dist/styles/profile.css'
import CustomNav from './user/master-components/Navbar'
import { Card, Button } from 'react-bootstrap'

class Profile extends Component {
    render() {
        return (
            <div>
                <CustomNav history={this.props.history}></CustomNav>
                <div className="ProfileRoot">
                </div>
                <div className="UserAvatarCard">
                    <center>
                        <div className="Avatar">
                            {/* <img src={require('./assets/images/icons8-male-user-500.png')} ></img> */}
                        </div>
                        <div className="UserName">
                            <h2>Full Name</h2>
                        </div>
                    </center>
                </div>
                <div className="container">
                    <FullWidthTabs></FullWidthTabs>

                </div>
            </div>
        )
    }
}

export default Profile


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));

function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="General" {...a11yProps(0)} />
                    <Tab label="Orders" {...a11yProps(1)} />
                    <Tab label="Payements" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div className="UserDetailCard">
                        <div className="UserDetail">
                            <div className="UserDetailUsername">
                                <h5>Username</h5>
                                <div>
                                    <h4>This Is User Name</h4><i className="fas fa-edit"></i>
                                </div>
                            </div>
                            <div className="UserDetailUsername">
                                <h5>Password</h5>
                                <div>
                                    <h4>This Is User Name</h4><i className="fas fa-edit"></i>
                                </div>
                            </div>
                            <div className="UserDetailUsername">
                                <h5>Email</h5>
                                <div>
                                    <h4>This Is User Name</h4><i className="fas fa-edit"></i>
                                </div>
                            </div>
                            <div className="UserDetailUsername">
                                <h5>Address</h5>
                                <div>
                                    <h4>This Is User Name</h4><i className="fas fa-edit"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Card>
                        <Card.Header>
                            <div className="row">
                                <div className="col">
                                    Order Placed
                                </div>
                                <div className="col">
                                    Total
                                </div>
                                <div className="col">
                                    Ship To
                                </div>
                                <div className="col">
                                    Order#
                                </div>
                                <div className="col">
                                    Order Details
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <b>Date</b>
                                </div>
                                <div className="col">
                                    <b>Amount</b>
                                </div>
                                <div className="col">
                                    <b>User</b>
                                </div>
                                <div className="col">
                                    <b>1464541546545</b>
                                </div>

                                <div className="col">
                                    Invoice
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Order Status</Card.Title>
                            <div className="row">
                                <div className="col">
                                    <img src={require('../productImages/pro1.jpg')} alt="Product" width="120px"></img>
                                </div>
                                <div className="col">
                                    <div className="row OrderContent">
                                        Product Full Name
                                    </div>
                                    <div className="row OrderContent">
                                        Return Date
                                    </div>
                                    <div className="row OrderContent">
                                        Price
                                    </div>
                                    <div className="row OrderContent">
                                        <Button>Buy Again</Button>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <Button className="OrderBtn">Track Package</Button>
                                    </div>
                                    <div className="row">
                                        <Button className="OrderBtn">Leave Seller Feedback</Button>
                                    </div>
                                    <div className="row">
                                        <Button className="OrderBtn">Write Product Review</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <div className="row">
                                <div className="col">
                                    Order Placed
                                </div>
                                <div className="col">
                                    Total
                                </div>
                                <div className="col">
                                    Ship To
                                </div>
                                <div className="col">
                                    Order#
                                </div>
                                <div className="col">
                                    Order Details
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <b>Date</b>
                                </div>
                                <div className="col">
                                    <b>Amount</b>
                                </div>
                                <div className="col">
                                    <b>User</b>
                                </div>
                                <div className="col">
                                    <b>1464541546545</b>
                                </div>

                                <div className="col">
                                    Invoice
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Order Status</Card.Title>
                            <div className="row">
                                <div className="col">
                                    <img src={require('../productImages/pro1.jpg')} alt="Product" width="120px"></img>
                                </div>
                                <div className="col">
                                    <div className="row OrderContent">
                                        Product Full Name
                                    </div>
                                    <div className="row OrderContent">
                                        Return Date
                                    </div>
                                    <div className="row OrderContent">
                                        Price
                                    </div>
                                    <div className="row OrderContent">
                                        <Button>Buy Again</Button>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <Button className="OrderBtn">Track Package</Button>
                                    </div>
                                    <div className="row">
                                        <Button className="OrderBtn">Leave Seller Feedback</Button>
                                    </div>
                                    <div className="row">
                                        <Button className="OrderBtn">Write Product Review</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <div className="row">
                                <div className="col">
                                    Order Placed
                                </div>
                                <div className="col">
                                    Total
                                </div>
                                <div className="col">
                                    Ship To
                                </div>
                                <div className="col">
                                    Order#
                                </div>
                                <div className="col">
                                    Order Details
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <b>Date</b>
                                </div>
                                <div className="col">
                                    <b>Amount</b>
                                </div>
                                <div className="col">
                                    <b>User</b>
                                </div>
                                <div className="col">
                                    <b>1464541546545</b>
                                </div>

                                <div className="col">
                                    Invoice
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Order Status</Card.Title>
                            <div className="row">
                                <div className="col">
                                    <img src={require('../productImages/pro1.jpg')} alt="Product" width="120px"></img>
                                </div>
                                <div className="col">
                                    <div className="row OrderContent">
                                        Product Full Name
                                    </div>
                                    <div className="row OrderContent">
                                        Return Date
                                    </div>
                                    <div className="row OrderContent">
                                        Price
                                    </div>
                                    <div className="row OrderContent">
                                        <Button>Buy Again</Button>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <Button className="OrderBtn">Track Package</Button>
                                    </div>
                                    <div className="row">
                                        <Button className="OrderBtn">Leave Seller Feedback</Button>
                                    </div>
                                    <div className="row">
                                        <Button className="OrderBtn">Write Product Review</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
