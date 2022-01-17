import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


const Layout = () => {
    return (
        <LayoutStyle>
            <Header />
            <Nav />
            <ContentStyle>
                <Outlet />
            </ContentStyle>
            <Footer />
        </LayoutStyle>
    )
}

export default Layout;

const LayoutStyle = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid red;
`

const ContentStyle = styled.div`
    flex-basis: 90%;
    overflow: scroll;
`