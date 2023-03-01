import React from 'react';
import './modal.css';

function Modal({ active, setActive, item, checkedStatus }) {
	return (
		<div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
			<div className="modal__content" onClick={(e) => e.stopPropagation()}>
				<h2>{item.title}</h2>
				<h4>Description : </h4>
				<p>{item.description}</p>
				<div className='modal__status'>
					<label>Status : </label>
					<input type='checkbox' onClick={(e) => checkedStatus(e, item)} checked={item.status} />
				</div>

				<button onClick={() => setActive(false)}>Close</button>
			</div>
		</div>
	);
}

export default Modal;