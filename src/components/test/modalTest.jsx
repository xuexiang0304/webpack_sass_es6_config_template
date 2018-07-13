import React from 'react';
import PropTypes from 'prop-types';
import Modal, {ModalHeader, ModalBody, ModalFooter} from '../Common/Bootstrap-Modal.jsx';

export default class TestModal extends React.Component{
	state={
		isOpen: false,
		description: "init"
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
		return(
			<div className="modal-order">
				 <button onClick={this.toggleModal}>
		          Open the modal
		        </button>
				<Modal show={this.state.isOpen} onClose={this.toggleModal}>
					<ModalHeader onClose={this.props.close} title= "Test Modal"/>
					<ModalBody>
	         			 <div onClick={this.handleClick}>{this.state.description}</div>
					</ModalBody>
					<ModalFooter onClose={this.toggleModal}>
						<button className="btn btn-primary">Save</button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}

TestModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
}

