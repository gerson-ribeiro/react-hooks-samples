import styled from "styled-components"

export const TableContainer = styled.table`
background-color: #fff;
width:100%;
border-bottom: 1px solid #111111;
border-collapse: collapse;
`
export const Header = styled.thead``
export const HeaderRow = styled.tr`
background-color: #3dade0;
color: #fff;
`
export const HeaderCell = styled.th`
padding:5px 0px;
flex-direction:row;
text-align:center;
:first-of-type{
    padding-left:15px;
}
:last-of-type{
    text-align:center;
}
`
export const Body = styled.tbody`
tr:hover {background-color: #ddd;}
`
export const BodyRow = styled.tr`
border: .5px solid #000;
border-left: none;
border-right: none;
line-height: 35px;
vertical-align:middle;
`
export const BodyCell = styled.td`
padding:5px 0px;
color: #000;

:first-of-type{
    padding-left:15px;
}
:last-of-type{
    flex-wrap: wrap;
    text-align:center;
    justify-content:space-around;
    align-items:center;
    height:100%;
}
`