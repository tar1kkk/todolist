import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../redux/slices/productsSlice';
import './form.css'

function Form() {
	const { items } = useSelector(state => state.productsSlice);
	const [title, setTitle] = useState('');
	const [error, setError] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();


	function handleClick() {
		const lastId = items.length + 1;
		if (title.length > 0) {
			setError('');
			const newArr = {
				id: lastId,
				title,
				description,
				status: false,
			}
			dispatch(setProduct(newArr))
		} else {
			setError('This field is empty');
		}
	}
	return (
		<div className='form'>
			<input placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)} />
			<p style={{ color: 'red' }}>{error}</p>
			<input placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)} />
			<button onClick={handleClick}>Create</button>

		</div>
	);
}

export default Form;