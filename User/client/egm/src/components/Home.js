import React, { Component } from 'react'
import CustomNav from './user/master-components/navbarv2'
import ReactCarousel from './user/master-components/Carousel'
// import Tags from './user/master-components/tags'
import $ from 'jquery'
import SearchBar from './user/master-components/searchbar'
import ProductGrid from './user/ProductGrid'
import '../components/dist/styles/home.css'
import HeadSection from '../components/user/master-components/head-section'

import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const useStyles1 = makeStyles(theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
}));

function MySnackbarContentWrapper(props) {
    const classes = useStyles1();
    const { className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

const useStyles2 = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

function CustomizedSnackbars() {
    const classes = useStyles2();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" className={classes.margin} onClick={handleClick} id="show-success">
                Open success snackbar
      </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    variant="success"
                    message="Item Added To Cart!"
                />
            </Snackbar>
        </div>
    );
}
function WishlistSnackbars() {
    const classes = useStyles2();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" className={classes.margin} onClick={handleClick} id="show-wishlist-alert">
                Open success snackbar
      </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    variant="success"
                    message="Item Added To Wishlist"
                />
            </Snackbar>
        </div>
    );
}

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            RenderCarousel: false,
            userData: null,
            cartitems: []
        }
        this.addtocart = (item) => {
            var newitem = this.state.cartitems
            newitem.push(item)
            // Array.prototype.push.apply(newitem,item)
            this.setState({
                cartitems: newitem
            })
            console.log(this.state.cartitems)
        }
        this.addtocart = this.addtocart.bind(this)
        this.ChangeCarouselState = () => {
            this.setState({
                RenderCarousel: true,
            })
        }
        this.componentWillMount = () => {
            if (this.props.location.state) {
                this.setState({
                    userdata: this.props.location.state.userdata.data
                })
            }
            var that = this
            $(window).trigger('load')
            $(window).on('load', function () {
                var win = $(window)
                if (win.width() >= 425) {
                    that.ChangeCarouselState()
                }
            })
           
        }
    }

    render() {
        return (
            <div className="home-root">
                <HeadSection></HeadSection>
                <CustomNav history={this.props.history} userdata={this.state.userdata} loggedIn={false}></CustomNav>
                {/* <ReactCarousel></ReactCarousel> */}
                <SearchBar></SearchBar>
                {/* <Tags></Tags> */}
                <ProductGrid trigger={this.addtocart} history={this.props.history}></ProductGrid>
                {/* {this.state.RenderCarousel ? <ReactCarousel /> : null} */}
                <CustomizedSnackbars></CustomizedSnackbars>
                <WishlistSnackbars></WishlistSnackbars>
            </div>
        )
    }
}

export default Home