import React from 'react';
import { Button, Form , FormGroup,Label, Input,Container, Col, Card,
	Nav, NavItem, NavLink, TabContent, TabPane 
 } from 'reactstrap';
import classnames from 'classnames';
import googleSignin from './../assets/google.png';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab : '1',

		};
		this.toggle = (tab) => {
			if(this.state.activeTab !== tab) {
				this.setState({
					activeTab : tab
				});
			}
		}

	}
	render() {
		return (
				
				<div>
					<br/><br/><br/><br/>
					<Container>
						<Card>
							<Nav tabs>
								<NavItem>
									<NavLink className = {classnames({ active: this.state.activeTab === '1' })} onClick= {() => {this.toggle('1');}}> 
										<b>LOGIN</b>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className = {classnames({ active: this.state.activeTab === '2' })} onClick= {() => {this.toggle('2');

								}}> 
										<b>REGISTER</b>
									</NavLink>
								</NavItem>
							</Nav>
							<TabContent activeTab = {this.state.activeTab}>
							<TabPane tabId = "1">
								<Container> 
								<br/> <br/>
								<Form>
								<FormGroup row>
									<Label sm = {2}>E-Mail</Label>
									<Col sm = {10}>
										<Input type = "email" name = "email" placeholder = "Enter Email" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label sm = {2}>Password</Label>
									<Col sm = {10}>
										<Input type = "password" name = "password" placeholder = "Password" />
									</Col>
								</FormGroup>
								</Form>
								<Button color = "warning">Submit</Button>
								<br/><br/>
								<a> Or </a>
								<img src = {googleSignin} width = "30%" height = "30%"   />
								<br/> <br/>
								</Container>
							</TabPane>	
							<TabPane tabId = "2">
								<Container>
									<br/><br/>
									<Form>
										<FormGroup row>
											<Label sm = {2}>Name</Label>
											<Col sm = {10}>
												<Input type = "text" name = "Name" placeholder = "Name " />
											</Col>
										</FormGroup>
										<FormGroup row>
											<Label sm = {2}>E-Mail</Label>
											<Col sm = {10}>
												<Input type = "email" name = "email" placeholder = "E-Mail " />
											</Col>
										</FormGroup>
										<FormGroup row>
											<Label sm = {2}>Password</Label>
											<Col sm = {10}>
												<Input type = "password" name = "password1" placeholder = "Password " />
											</Col>
										</FormGroup>
										<FormGroup row>
											<Col sm = {2}></Col>
											<Col sm = {10}>
												<Input type = "password" name = "password2" placeholder = "Re-Enter Password 	" />
											</Col>
										</FormGroup>
									</Form>	
									<Button color = "warning" >Submit</Button>
									<br/><br/>
								</Container>
							</TabPane>
							</TabContent>
						</Card>
					</Container>
				</div>
			);
	}
}
export default LoginPage;