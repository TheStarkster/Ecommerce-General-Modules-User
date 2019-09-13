import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MaterialTable from 'material-table';
import React, { Component } from 'react'
import axios from 'axios'
import './dist/styles/home.css'
import $ from 'jquery'
import './dist/styles/Sidebar.css'
import './dist/styles/addproduct.css'
import './dist/styles/table.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            AllProduct_Panel: false,
        }
        this.JQstate = {
            SideBarCollapse: false
        }
        this.tableData = []
        this.DeletedMultipleData = {
            BulkDelete: []
        }
        this.DeletedData = {
            Delete: []
        }
        this.UpdatedMultipleData = {
            BulkUpdate:[]
        }
        this.UpdateData = {
            UpdatedData:[]
        }
        this.AddMultipleData = {
            BulkAddData: []
        }
        this.AddData = {
            AddData:[]
        }
        this.RenderAllProductPanel = this.RenderAllProductPanel.bind(this)
        this.PushDeletedTableData = this.PushDeletedTableData.bind(this)
        this.componentDidMount = () => {
            if (window.innerWidth <= 1024) {
                $('.SideBarRoot').addClass('Collapse')
                $('.SideBarRoot').css('position', 'fixed')
            } else {
                $('.CloseBtn').css('display', 'none')
            }
        }
    }
    PushDeletedTableData(e) {
        this.DeletedData.BulkDelete.push(e)
    }
    DeleteTableData(e){
        if(this.DeleteTableData.BulkAddData.length === 1){
            axios.get('http://localhost:6000/product/admin-delete-product-multiple',this.DeletedData).then(response=>{
                console.log(response)
            })
        }
    }
    RenderAllProductPanel() {
        axios.get('http://localhost:2020/product/admin-fetch-product').then(response=>{
                this.tableData = [...response.data]
                console.log(this.tableData)
            })
        this.setState({
            AllProduct_Panel: true
        })
    }
    CloseSideBar = () => {
        $('.SideBarRoot').addClass('Collapse')
        if (this.state.AllProduct_Panel) {
            this.setState({
                AllProduct_Panel: true //To Resize Table... [Not Working]
            })
        }
    }
    OpenSideBar = () => {
        $('.SideBarRoot').removeClass('Collapse')
    }
    render() {
        return (
            <div className="HomeRoot">
                <div className="SidePanelOpenBtn" onClick={() => this.OpenSideBar()}>
                    <div className="MenuBtn">Menu</div><i className="fas fa-arrow-right"></i>
                </div>
                <div className="SideBarRoot pad-x">
                    <div className="CloseBtn">
                        <i className="fa fa-times" onClick={() => this.CloseSideBar()}></i>
                    </div>
                    <div className="UserCard">
                        <div className="UserAvatar">
                            <img src={require('./assets/icons/icons8-male-user-480.png')} alt="dashboard" />
                        </div>
                        <div className="UserDetailCard">
                            <div className="UserName">
                                Employee Name
                        </div>
                            <div>
                                Position
                            </div>
                        </div>
                    </div>
                    <CustomExpansionPanel trigger={this.RenderAllProductPanel} />
                </div>
                <div className="w-full">
                    {/* {this.state.AllProduct_Panel ? <MaterialTableCustom /> : null} */}
                    <MaterialTableCustom trigger={this.PushDeletedTableData} data={this.tableData} />
                </div>
            </div>
        )
    }
}

export default Home


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function CustomExpansionPanel(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Products</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ul className="ExpandedProductOptions">
                        <li onClick={() => {
                            props.trigger()
                        }}>
                            <img src={require('./assets/icons/icons8-product-24.png')} alt="Products" />
                            Products
                        </li>
                        <li>
                            <img src={require('./assets/icons/icons8-shipping-container-24.png')} alt="Multiple Products" />
                            Add Multiple Products
                        </li>
                        <li>
                            <img src={require('./assets/icons/icons8-stacking-24.png')} alt="Stock Details" />
                            Stock Detail
                        </li>
                    </ul>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Users</Typography>
                </ExpansionPanelSummary>
            </ExpansionPanel>
        </div>
    );
}

function AddDataFromTable() {

}

function MaterialTableCustom(props) {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Price', field: 'price' },
            { title: 'Stock', field: 'stock', type: 'numeric' },
            { title: 'Added By', field: 'employee' },
        ],
        data: [
            {
                _id: "54654654654",
                name: 'Product',
                price: '45.21',
                stock: 197,
                employee: 63,
            },
        ],
    });
    return (
        <div>
            <MaterialTable
                title="Products"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data.push(newData);
                                setState({ ...state, data });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data[data.indexOf(oldData)] = newData;
                                setState({ ...state, data });
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                var DeletedData = data.splice(data.indexOf(oldData), 1);
                                props.trigger(DeletedData[0]._id)
                                setState({ ...state, data });
                            }, 600);
                        }),
                }}
            />
            <button className="btn btn-primary save-changes">Save Changes!</button>
        </div>
    );
}