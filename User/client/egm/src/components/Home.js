import React, { Component } from 'react'
import CustomNav from './user/master-components/navbarv2'
import ReactCarousel from './user/master-components/Carousel'
import axios from 'axios'
import CartItemsModal from './user/master-components/cart-items'
// import Tags from './user/master-components/tags'
import $ from 'jquery'
import SearchBar from './user/master-components/searchbar'
import Footer from './user/master-components/footer'
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
                onClose={handleClose}>
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
function AlreadyCartSnackbars() {
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
            <Button variant="outlined" className={classes.margin} onClick={handleClick} id="show-already-cart-alert">
            </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}>
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    variant="warning"
                    message="Item Already in Cart!"
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
            userdata: null,
            cartitems: [],
            showAuthPanel: false,
            cartTotal: 0,
            showcart: false
        }
        this.Childref = React.createRef()
        this.addtocart = (item) => {
            if (this.state.cartitems.some(n => n.name == item.name)) {
                document.getElementById('show-already-cart-alert').click()
            } else {
                var newitem = this.state.cartitems
                newitem.push({
                    name: item.name,
                    disc: item.disc,
                    price: item.price,
                    image: item.image,
                    productID: item.productID
                })
                var TempCartAmount = parseFloat(this.state.cartTotal)
                TempCartAmount += parseFloat(item.price)
                this.setState({
                    cartitems: newitem,
                    cartTotal: TempCartAmount
                }, () => {
                    if (this.state.userdata) {
                        localStorage.setItem('cart-items', JSON.stringify(this.state.cartitems))
                        localStorage.setItem('cart-items-total', this.state.cartTotal)
                        axios.post('http://13.59.134.74:2024/user/add-to-cart', {
                            id: this.state.userdata._id,
                            cart: newitem,
                            cartTotal: TempCartAmount
                        })
                            .then(response => {
                                console.log("response")
                                console.log(response.data.message)
                                console.log("response")
                                if (response.data.message === "Cart-Updated") {
                                    localStorage.setItem('cart-items', JSON.stringify(this.state.cartitems))
                                    localStorage.setItem('cart-items-total', this.state.cartTotal)
                                }
                            })
                    }

                })
                document.getElementById('show-success').click()
            }
            console.log(this.state.cartitems)
        }
        this.addtocart = this.addtocart.bind(this)

        this.checkoutforsingle = (productdata) => {
            if (this.props.location.state) {
                this.props.history.push({
                    pathname: '/checkout',
                    state: {
                        cartdata: {
                            cart: {
                                productID: productdata.productID,
                                price: productdata.price,
                                name: productdata.name,
                                itempushed: 1,
                            }
                        },
                        userdata: this.props.location.state.userdata.data,
                    }
                })
            } else {
                this.Childref.current.ValidateUserSession()
            }
        }
        this.checkoutforsingle = this.checkoutforsingle.bind(this)
        this.ChangeCarouselState = () => {
            this.setState({
                RenderCarousel: true,
            })
        }
        this.componentWillUpdate = () => {
            if (this.props.location.state) {

            }
        }
        function containsItem(obj, list) {
            var i;
            for (i = 0; i < list.length; i++) {
                if (list[i].productID === obj.productID) {
                    return true;
                }
            }
            return false;
        }
        this.RemoveProduct = (item) => {
            var tempArray = this.state.cartitems.filter(
                function (obj) {
                    return obj.productID !== item.productID
                }
            )
            this.setState({
                cartitems: tempArray
            }, () => {
                this.CalculateCartSummary()
            })
        }
        this.CalculateCartSummary = () => {
            var cart_total = 0
            this.state.cartitems.forEach(element => {
                cart_total += parseFloat(element.price)
            });
            this.setState({
                cartTotal: cart_total
            }, () => {
                localStorage.setItem('cart-items',JSON.stringify(this.state.cartitems))
                localStorage.setItem('cart-items-total',this.state.cartTotal)
                axios.post('http://13.59.134.74:2024/user/remove-from-cart', {
                    id: this.state.userdata._id,
                    cart: this.state.cartitems,
                    cartTotal:this.state.cartTotal
                })
            })
        }
        this.componentWillMount = () => {
            if (this.props.location.state) {
                this.setState({
                    userdata: this.props.location.state.userdata.data,
                })
                if (this.props.location.state.userdata.data.cart && localStorage.getItem('cart-items')) {
                    JSON.parse(localStorage.getItem('cart-items')).forEach(element => {
                        if (!containsItem(element, this.props.location.state.userdata.data.cart)) {
                            this.props.location.state.userdata.data.cart.push(element)
                        }
                    });
                    var TempCartAmount = parseFloat(localStorage.getItem('cart-items-total'))
                    console.log(this.props.location.state.userdata.data)
                    TempCartAmount += this.props.location.state.userdata.data.cartTotal == null ? 0 : parseFloat(this.props.location.state.userdata.data.cartTotal)

                    this.setState({
                        cartTotal: TempCartAmount,
                        cartitems: this.props.location.state.userdata.data.cart
                    })
                    axios.post('http://13.59.134.74:2024/user/add-to-cart', {
                        id: this.props.location.state.userdata.data._id,
                        cart: this.props.location.state.userdata.data.cart,
                        cartTotal: TempCartAmount
                    })
                        .then(response => {
                            if (response.data.message === "Cart-Updated") {
                                this.setState({
                                    cartitems: this.props.location.state.userdata.data.cart,
                                    cartTotal: TempCartAmount
                                }, () => {
                                    console.log("this.state.userdata")
                                })
                            }
                        })
                } else if (localStorage.getItem('cart-items')) {
                    this.setState({
                        userdata: this.props.location.state.userdata.data,
                    })
                    this.props.location.state.userdata.data["cart"] = JSON.parse(localStorage.getItem('cart-items'))
                    this.props.location.state.userdata.data["cartTotal"] = parseFloat(localStorage.getItem('cart-items-total'))
                    axios.post('http://13.59.134.74:2024/user/add-to-cart', {
                        id: this.props.location.state.userdata.data._id,
                        cart: this.props.location.state.userdata.data.cart,
                        cartTotal: parseFloat(this.props.location.state.userdata.data.cartTotal)
                    })
                        .then(response => {
                            if (response.data.message === "Cart-Updated") {
                                this.setState({
                                    cartitems: this.props.location.state.userdata.data.cart,
                                    cartTotal: parseFloat(this.props.location.state.userdata.data.cartTotal)
                                })
                            }
                        })

                } else if (this.props.location.state.userdata.data.cart) {
                    this.setState({
                        cartitems: this.props.location.state.userdata.data.cart,
                        cartTotal: parseFloat(this.props.location.state.userdata.data.cartTotal)
                    })
                }
            } else {
                if (localStorage.getItem('cart-items')) {
                    this.setState({
                        cartitems: JSON.parse(localStorage.getItem('cart-items')),
                        cartTotal: parseFloat(localStorage.getItem('cart-items-total'))
                    })
                }
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
        this.ShowCart = () => {
            this.setState({
                showcart: true
            })
        }
        // this.ShareData = () => {
        //     var ShareObj = {
        //         userdata:this.state.userdata,
        //         cart:this.state.cartitems
        //     }
        //     return ShareObj
        // }
        this.HideCart = () => {
            this.setState({
                showcart: false
            })
        }
    }
    render() {
        return (
            <div className="home-root">
                {
                    this.state.showcart ?
                        <CartItemsModal triggerRemoveItem={this.RemoveProduct} userdata={this.state.userdata} history={this.props.history} triggerHideModal={this.HideCart} cartTotal={this.state.cartTotal} cartdata={this.state.cartitems} ></CartItemsModal>
                        :
                        null
                }
                <HeadSection></HeadSection>
                <CustomNav triggerShowModal={this.ShowCart} ref={this.Childref} history={this.props.history} cart_item_count={this.state.cartitems.length} userdata={this.state.userdata}></CustomNav>
                <SearchBar></SearchBar>
                {/* <ReactCarousel></ReactCarousel> */}
                {/* <Tags></Tags> */}
                {/* {this.state.RenderCarousel ? <ReactCarousel /> : null} */}
                <ProductGrid ShareData={this.ShareData} userdata={this.state.userdata} trigger={this.addtocart} checkoutforsingle={this.checkoutforsingle} history={this.props.history}></ProductGrid>
                <CustomizedSnackbars></CustomizedSnackbars>
                <WishlistSnackbars></WishlistSnackbars>
                <AlreadyCartSnackbars></AlreadyCartSnackbars>
                <Footer></Footer>
            </div>
        )
    }
}

export default Home