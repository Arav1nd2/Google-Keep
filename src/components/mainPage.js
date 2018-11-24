import React, {Component} from 'react';
import { Container ,Button, Card,  Form , FormGroup, Input, Col, Row} from 'reactstrap';
import './mainPage.css';
import {connect} from 'react-redux';
import {getNotes ,addNotes} from '../actions/actionCreaters';



class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addNewNote : false,
			Title : "",
			Body : "",
			id : Math.floor((Math.random() * 100000) + 1),
			notes : []
		};
		this.props.getNotes();
		this.addNote = () => {
			this.setState({
				addNewNote : !this.state.addNewNote
			});
		}
		this.onChange = (e) => {
			this.setState({
				[e.target.name] : e.target.value
			});
		}
		this.onSubmit = () => {

			let oldNotes = this.state.notes;
			oldNotes.push({id: this.state.id , title : this.state.Title , body : this.state.Body });
			this.setState({
				notes : oldNotes,
				addNewNote : !this.state.addNewNote,
				Title : "",
				Body : "",
				id : this.state.id+1
			});
			this.props.addNotes({id: this.state.id , title : this.state.Title , body : this.state.Body});
			this.props.getNotes();
		}
	}


	render() {
		let displayNotes = [];
		if(this.props.notes) {
		this.props.notes.map( (index) => 
				displayNotes.push(	
							<Col md = {3} sm = {4} key = {index.id} >
									<Card >
										<Container>
											<h4>{index.title}</h4>
											<p>{index.body}</p>
										</Container>
									</Card>
								<br/>
								</Col>	
)
			
		);
		}
		return (
			<div>
			<br/>
			{ this.state.addNewNote	?
				<div>
						<Container>
					<Card>
						<br/>
						<Container>
							<h4> New Note </h4>
							<Form>
							<FormGroup>	
								<Input type = "text" name = "Title" placeholder = "Title...." value = {this.state.Title} onChange = {this.onChange} />
							</FormGroup>
							<FormGroup>
								<Input type = "textarea" name = "Body" placeholder = "Body..." value = {this.state.Body} onChange = {this.onChange} />
							</FormGroup>
							</Form>
							<Button color = "secondary" onClick = {this.onSubmit}>Add </Button>
							<br/><br/>
						</Container>
					</Card>
					</Container>
					<br/>	
				</div>
				: ""}
				<Container>
					<Row>
						{displayNotes}
					</Row>
				</Container>	
				<div className = "addButton" onClick = {this.addNote} >
					<p className="plus">+</p>
				</div>
			</div>
			);
	}	
}
const mapStateToProps = state => ({
	user : state.user,
	notes : state.notes
})

export default connect(mapStateToProps, {addNotes , getNotes})(MainPage);