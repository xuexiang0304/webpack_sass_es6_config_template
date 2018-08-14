import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../Common/Modal.jsx';

export default class Test extends React.Component{
	constructor(props) {
    	super(props);
    	this.state = { 
    		isOpen: false,
    		description: "init"
    	};
	}
	toggleModal = () => {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	}
	handleClick = () =>{
		this.setState({
			description: "after click"
		})
	}
	render(){
		return (
	      <div className="test">
	        Hello from react es6, test hot inline potato
	        <button onClick={this.toggleModal}>
	          Open the modal
	        </button>

	        <Modal show={this.state.isOpen}
	          onClose={this.toggleModal}
	          title="Modal Sample">
	          <div onClick={this.handleClick}>{this.state.description}</div>
	        </Modal>
	      </div>
	    );
	}
}




