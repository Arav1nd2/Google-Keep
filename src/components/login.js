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
			l01 : "",
			l02 : "",
			r01 : "",
			r02 : "",
			r03 : "",
			r04 : "",
			loginBtn : false,
			registerBtn : false
		};
		this.toggle = (tab) => {
			if(this.state.activeTab !== tab) {
				this.setState({
					activeTab : tab
				});
			}
		}
		this.onChange = (id, value) => {
			this.setState({
				[id] : value
			});
			if(this.state.l01 !== "" && this.state.l02 !== "") {
				this.setState({
					loginBtn : true
				});
			}
			if(this.state.r01 !== "" && this.state.r02 !== "" && this.state.r03 !== "" ) {
				this.setState({
					registerBtn : true
				});
			}
		}

	}
	render() {
		var lProp = {};
		if(!this.state.loginBtn) {
			lProp['disabled'] = 'disabled';
		}
		var rProp = {};
		if(!this.state.registerBtn) {
			rProp['disabled'] = 'disabled';
		}
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
										<Input type = "email" name = "email" placeholder = "Enter Email" onChange = {e => {this.onChange("l01",e.target.value)}}/>
									</Col>
									{console.log(this.state.l01)}
								</FormGroup>
								<FormGroup row>
									<Label sm = {2}>Password</Label>
									<Col sm = {10}>
										<Input type = "password" name = "password" placeholder = "Password" onChange = {e => {this.onChange("l02",e.target.value)}}/>
									</Col>
								</FormGroup>
								</Form>
								<Button color = "warning" {...lProp}>Submit</Button>
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
												<Input type = "text" name = "Name" placeholder = "Name " onChange = {e => {this.onChange("r01",e.target.value)}}/>
											</Col>
										</FormGroup>
										<FormGroup row>
											<Label sm = {2}>E-Mail</Label>
											<Col sm = {10}>
												<Input type = "email" name = "email" placeholder = "E-Mail " onChange = {e => {this.onChange("r02",e.target.value)}}/>
											</Col>
										</FormGroup>
										<FormGroup row>
											<Label sm = {2}>Password</Label>
											<Col sm = {10}>
												<Input type = "password" name = "password1" placeholder = "Password " onChange = {e => {this.onChange("r03",e.target.value)}}/>
											</Col>
										</FormGroup>
										<FormGroup row>
											<Col sm = {2}></Col>
											<Col sm = {10}>
												<Input type = "password" name = "password2" placeholder = "Re-Enter Password " onChange = {e => {this.onChange("r04",e.target.value)}}/>
											</Col>
										</FormGroup>
									</Form>	
									<Button color = "warning" {...rProp}>Submit</Button>
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