import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import {IoArrowForward} from 'react-icons/io5';

const CuurencyConverter = () => {
	const BASEURL = 'https://api.api-ninjas.com/v1/convertcurrency';

	const [fromCurrency, setFromCurrency] = useState('INR');
	const [toCurrency, setToCurrency] = useState('USD');
	const [amount, setAmount] = useState(0);
	const [result, setResult] = useState(0);

	// console.log(process.env);
	// console.log(process.env.REACT_APP_API_NINJA_KEY);
	const handleSubmit = (e) => {
		e.preventDefault();
		let url = `${BASEURL}?have=${fromCurrency}&want=${toCurrency}&amount=${amount}`;
		console.log(url);

		fetch(url, {
			headers: {
				'X-Api-Key': process.env.REACT_APP_API_NINJA_KEY
			}
		},).then(res => res.json()).then(res => {
			console.log(res);
			setResult(res.new_amount);
		}).catch(err => console.log(err));
	}

	return (
		<div>
			<h1>Currency Converter</h1>

			<Form onSubmit={handleSubmit}>
				<Row>
					<Col xs={2}>
						<Form.Label htmlFor="haveCur">Amount you have: </Form.Label>
					</Col>

					<Col xs={3}>
						<Form.Control type="number" name="have" id="haveCur" required onChange={
							(e) => {
								setAmount(e.target.value);
							}
						}/>
					</Col>

					<Col xs={2}>
						<Form.Select name="from" id="fromCur" required onChange={
							(e) => {
								setFromCurrency(e.target.value);
							}} defaultValue={fromCurrency}>
							<option value="INR">INR</option>
							<option value="USD">USD</option>
							<option value="EUR">EUR</option>
							<option value="JPY">JPY</option>
							<option value="GBP">GBP</option>
							<option value="AUD">AUD</option>
							<option value="CAD">CAD</option>
							<option value="CHF">CHF</option>
							<option value="CNY">CNY</option>
						</Form.Select>	
					</Col>
					<Col xs={1}>
						<IoArrowForward />
					</Col>
					<Col xs={2}>
						<Form.Select name="to" id="toCur" required onChange={
							(e) => {
								setToCurrency(e.target.value);
							}
						} defaultValue={toCurrency}>
							<option value="USD">USD</option>
							<option value="EUR">EUR</option>
							<option value="INR">INR</option>
							<option value="JPY">JPY</option>
							<option value="GBP">GBP</option>
							<option value="AUD">AUD</option>
							<option value="CAD">CAD</option>
							<option value="CHF">CHF</option>
							<option value="CNY">CNY</option>
						</Form.Select>
					</Col>
				</Row>
				
				<br/>

				<Button type="submit">Convert</Button>

				<br/><br/>
				
				<div>Converted Amount in {toCurrency} is {result} </div>

			</Form>
		</div>
	)
}

export default CuurencyConverter;