import styled from "styled-components"
import { Nav } from "./Nav"

const StyledHeaderDiv = styled.div`
`

export const Header = () => {
    return (
        <div>
            <h1>Header</h1>
            <Nav />
        </div>
    )
}