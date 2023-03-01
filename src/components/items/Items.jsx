import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from '../../redux/slices/productsSlice';
import Modal from '../modal/Modal';
import './items.css';

function Items() {
	const dispatch = useDispatch();
	const [modalActive, setModalActive] = useState(false);
	const { items } = useSelector((state) => state.productsSlice);
	const [item, setItem] = useState({});

	function handleClick(item) {
		setItem(item);
		setModalActive(true);
	}
	function checkedStatus(e, item) {
		e.stopPropagation();
		dispatch(changeStatus(item))
	}
	return (
		<div>
			{items.map((item) => (
				<div className='block' onClick={() => handleClick(item)}>
					<p>{item.id}</p>
					<p>{item.title}</p>
					<p>{item.description}</p>
					<input onClick={(e) => checkedStatus(e, item)} type='checkbox' checked={item.status} />
					<Modal active={modalActive} setActive={setModalActive} item={item} checkedStatus={checkedStatus} />
				</div>
			))}
		</div>
	);
}

export default Items;