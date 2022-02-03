import React from 'react'
import LandingPage from './Pages/LandingPage'
import styled from 'styled-components'

const ContainerLanding = styled.div`
	background: #F0F0F0;

`

class App extends React.Component {

	render() {

		return (
			<div>
				<ContainerLanding>
				<LandingPage/>
				</ContainerLanding>
			</div>
		)
	}
}

export default App;