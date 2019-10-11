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
    constructor(props) {
        super(props)
        this.state = {
            userdata: null
        }
        this.componentWillMount = () => {
            this.setState({
                userdata: this.props.location.state.userdata
            })
        }
    }
    render() {
        return (
            <div>
                <CustomNav history={this.props.history} userdata={this.state.userdata} loggedIn={false}></CustomNav>
                <div className="ProfileRoot">
                </div>
                <div className="UserAvatarCard">
                    <center>
                        <div className="Avatar">
                            {/* <img src={require('./assets/images/icons8-male-user-500.png')} ></img> */}
                        </div>
                        <div className="UserName">
                            <h2>{this.state.userdata.name}</h2>
                        </div>
                    </center>
                </div>
                <div className="container">
                    <FullWidthTabs userdata={this.state.userdata}></FullWidthTabs>

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

function FullWidthTabs(props) {
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
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                <div className="row jumbotron user-setting-option-root">
                                    <div className="col-12 user-setting-option">
                                        <div className="row">
                                            <div className="col-8">
                                                <h6>Username</h6>
                                                <h5>{props.userdata.name}</h5>
                                            </div>
                                            <div className="col-4 user-setting-option-edit-btn">
                                                <Button>Edit</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 user-setting-option">
                                        <div className="row">
                                            <div className="col-8">
                                                <h6>Email</h6>
                                                <h5>{props.userdata.email}</h5>
                                            </div>
                                            <div className="col-4 user-setting-option-edit-btn">
                                                <Button>Edit</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 user-setting-option">
                                        <div className="row">
                                            <div className="col-8">
                                                <h6>Password</h6>
                                                <h5>*********</h5>
                                            </div>
                                            <div className="col-4 user-setting-option-edit-btn">
                                                <Button>Edit</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 user-setting-option">
                                        <div className="row">
                                            <div className="col-8">
                                                <h6>Username</h6>
                                                <h4>Username</h4>
                                            </div>
                                            <div className="col-4 user-setting-option-edit-btn">
                                                <Button>Edit</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-6">
                                <div className="row jumbotron">
                                    <div className="col-12">
                                        <h6>Whishlist</h6>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Card className="ProfileOrderCard">
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
                    <Card className="ProfileOrderCard">
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
                    <Card className="ProfileOrderCard">
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
