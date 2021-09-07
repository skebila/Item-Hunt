import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

export class Header extends PureComponent {
    render() {
        return (
            <Container>
                
                <HeaderLogoDiv>
                    <Link to="/">
                        <LogoItemOne>Item</LogoItemOne>
                        <LogoItemTwo>Hunt</LogoItemTwo>
                    </Link>
                </HeaderLogoDiv>
                
                

                <HeaderLocationDiv>
                    <LocationOnIcon />

                    <HeaderOption>
                        <OptionRowOne>Hello</OptionRowOne>
                        <OptionRowTwo>Select your location</OptionRowTwo>
                    </HeaderOption>
                    
                </HeaderLocationDiv>

                <HeaderSearchDiv>
                    
                    <HeaderSearchInput type='text' />
                    
                    <HeaderSearchLogo>
                        <SearchIcon/>
                    </HeaderSearchLogo>

                </HeaderSearchDiv>

                <HeaderNavItems>
                    
                    <HeaderOption>
                        <OptionRowOne>Hello, Steven</OptionRowOne>

                        <OptionRowTwo>Account & Lists</OptionRowTwo>
                    </HeaderOption>
                    
                    <HeaderOption>
                        <OptionRowOne>Returns</OptionRowOne>

                        <OptionRowTwo>& Orders</OptionRowTwo>
                    </HeaderOption>

                    <HeaderCartDiv>
                        <Link to="/cart">
                            <ShoppingCartIcon />
                            
                            <CartCount>4</CartCount>
                        </Link>
                    </HeaderCartDiv>
                </HeaderNavItems>

            </Container>
            
        )
    }
}

export default Header

const Container = styled.div`
    background-color: black;
    font-size: 14px;
    height: 60px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const HeaderLogoDiv = styled.div`
    a{
        color: white;
        text-decoration: none;
    }
    padding-left: 9px;
    display: flex;
    font-size: 20px;
    font-family: 'Nosifer', cursive;
`
const LogoItemOne = styled.span`
    
`
const LogoItemTwo = styled.span`
    color: #5F939A;
`
const HeaderLocationDiv = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
    
`
const OptionRowOne = styled.div`
    font-size: 12px;
    line-height: 14px;
    height: 14px;
    font-weight: 400;
`
const OptionRowTwo = styled.div`
    font-size: 14px;
    line-height: 15px;
    font-weight: 700;
`
const HeaderSearchDiv = styled.div`
    margin-left: 4px;
    display: flex;
    flex-grow: 1;
    height: 40px;
    overflow: hidden;
    border-radius: 3px;
    background-color: white;
    :focus-within{
        box-shadow: 0 0 0 3px #5F939A;
    }
`
const HeaderSearchInput = styled.input`
    font-size: 14px;
    font-weight: 500;
    flex-grow: 1;
    :focus{
        outline: none;
    }
    border: 0;
`
const HeaderSearchLogo = styled.div`
    background-color: #5F939A;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    color: black;
`
const HeaderNavItems = styled.div`
    display: flex;
`
const HeaderOption = styled.div`
//TROUBLE
    padding: 10px 9px 10px 9px;

`
const HeaderCartDiv = styled.div`
    a{
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }
    display: flex;
    align-items: center;
`
const CartCount = styled.span`
    padding-left: 4px;
`
