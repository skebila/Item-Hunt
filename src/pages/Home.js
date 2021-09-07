import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <Container>
            <div>
                <Banner>
                    {/* <h1>We are your HUNTERS</h1>
                    <h2>Search for your item, stand still!</h2>
                    <h3>We'll do the <span>HUNTING</span> for you</h3> */}
                </Banner>
            </div>
        </Container>
        
    )
}

export default Home
const Container = styled.div`
 
 `
const Banner = styled.div`
    line-height: 2;
    padding-top: 60px;
    background-image: linear-gradient(to bottom, #5f939a, #75a29d, #8fb0a1, #aabda9, #c4cab5, #d7d1bf, #e6d9cc, #f2e2db, #f7e8e8, #f9f0f3, #faf8fa, #ffffff);
    min-height: 600px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
 `

 