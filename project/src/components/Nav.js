import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

// const StyledLinkList = styled.ul``

const StyledNavLink = styled(NavLink)`
    color: #000;
    text-decoration: none;

    &:hover {
        text-decoration: underline
    }  
    &.active {
        color: blue;
    }  
`

    

export const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    <StyledNavLink to="/" >Home</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/about" >O blogu</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/posts-list" >Posty</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/post-details" >Szczegóły postu</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/add-post" >Dodaj post</StyledNavLink>
                </li>
            </ul>
        </div>
    )
}


// export const Nav = () => {
//     return (
//         <div>
//             <ul>
//                 <li>
//                     <StyledNavLink to="/" className={({isActive}) => isActive ? 'activeLink' : 'normalLink'}>Home</StyledNavLink>
//                 </li>
//                 <li>
//                     <StyledNavLink to="/about" className={({isActive}) => isActive ? 'activeLink' : 'normalLink'}>O blogu</StyledNavLink>
//                 </li>
//                 <li>
//                     <StyledNavLink to="/posts-list" className={({isActive}) => isActive ? 'activeLink' : 'normalLink'}>Posty</StyledNavLink>
//                 </li>
//                 <li>
//                     <StyledNavLink to="/post-details" className={({isActive}) => isActive ? 'activeLink' : 'normalLink'}>Szczegóły postu</StyledNavLink>
//                 </li>
//                 <li>
//                     <StyledNavLink to="/add-post" className={({isActive}) => isActive ? 'activeLink' : 'normalLink'}>Dodaj post</StyledNavLink>
//                 </li>
//             </ul>
//         </div>
//     )
// }

// w przypadku NavLinka możemy skorzystać z propsa isActive - dokumentacja