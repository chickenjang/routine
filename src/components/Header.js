import styled from 'styled-components'

const Header = () => {
    return (
        <HeaderStyle>스펀지의 2022년</HeaderStyle>
    )
}

export default Header;

const HeaderStyle = styled.h1`
    background: #FCE373;
    text-align: center;
    font-size: 2rem;
    padding: 1rem;
`