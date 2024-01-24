import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { connect } from 'react-redux';
import { fetchUdcData } from '../../redux/udc/udcAction';
import { fetchMenuData,setMenuData } from '../../redux/menu/menuAction';
//import { fetchAllServiceData } from '../../redux/services/serviceAction';
import {  fetchFootData } from '../../redux/footer/footAction';
import { withRouter } from 'next/router';
import MenuItemComponent from './MenuItemComponent';
import LogoNavbarComponent from './LogoNavbarComponent';
import TopHeaderAreaComponent from './TopHeaderAreaComponent';

class NavbarComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            nav: false,
            sticky: null,   
            bg: 'bg-c-blue',
            activeId: '',
            current: 'mail',
            data:[]
            
        }

    }
    handleClick = e => {
        //console.log('click ', e);
        this.setState({ current: e.key });
    }
    /*getMenuItem= async()=>{
        const res = await fetch(`${process.env.API_PATH}tasks`)
        const data = await res.json()
        this.setState({
            data:data
        })

    }*/
    listener = null;
    handleScroll = () => {
        var scroll = window.pageYOffset
        
        if (scroll < 100) {
            //console.log('scorll=', true)
            this.setState({ sticky: null, bg: 'bg-c-blue', nav: false })
        } else {
            //console.log('scorll=', false)
            this.setState({ sticky: 'top', bg: 'bg-c-blue', nav: false })
        }

    }
    
    componentDidMount() {
        //getMenuItem()
        const { fetchUdcData, fetchMenuData, fetchFootData } = this.props
        //fetchUdcData()
        
        fetchMenuData()
        //fetchFootData()
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);

    }
    goToHome(){
        const{router}=this.props
        router.push('/')
    }
    render() {
        const { nav, sticky,bg,data } = this.state
        //console.log("server",data)
        return (
            <>
            <TopHeaderAreaComponent/>
            <LogoNavbarComponent/>
            {/* <TopHeaderAreaComponent/> */}
            
            {/* <NavbarSecondComponent/> */}
            <Navbar className={bg} hidden={nav} collapseOnSelect sticky={sticky} expand="lg">
                <Container>
                   {/* <Navbar.Brand onClick={()=>this.goToHome() } >Camorlim</Navbar.Brand>*/}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <MenuItemComponent/>
                        {/* <MenuItemSecondComponent/> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>   
            
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchUdcData: () => dispatch(fetchUdcData()),
    
    fetchMenuData:()=> dispatch(fetchMenuData()),
    fetchFootData:() => dispatch( fetchFootData())
})


export default withRouter (connect(null, mapDispatchToProps) (NavbarComponent))