import React, { useState, useEffect, useContext } from 'react';
import { ConciergeStyles } from './ConciergeStyles';
import MY_SERVICE from '../../services/index';
import MapComponent from '../../components/Map';
import MyContext from '../../contexts/context';
import RecommendationBox from './RecommendationBox/RecommendationBox';
import MapGo from '../../assets/map-go.svg';
import Britter from '../../assets/britter-logo.svg';
const Concierge = props => {
	const context = useContext(MyContext);
	const [val, setVal] = useState(0);
	const [activity, setActivity] = useState('');
	const [ask, setAsk] = useState(true);
	const [recommendations, setRecommendations] = useState([]);
	const [location, setLocation] = useState([]);

	useEffect(() => {
		//Send the position
		const fetchData = async () => {
			//   MY_SERVICE.getTodaysBudget().then(data=> setVal(data.budget))
			// MY_SERVICE.location(context.state.location);
			// setData(result.data);
		};

		fetchData();
	}, [context]);

	const handleSubmit = () => {
		// MY_SERVICE.recommendations({activity,location}).then(data=> setRecommendations(data.recommendations))
		context.handleProductSubmit();
		// setAsk(!ask)
	};

	return (
		<>
			{ask ? (
				<ConciergeStyles>
					<div className="card search">
						<img className="mapGo" src={MapGo} alt="Map Icon" />
						{/* <p>¿Qué quieres hacer hoy?</p> */}
						{/* Aquí tendríamos que poner algunos iconos de las cosas principales que actúen como inputs radiales del form */}
						<form
							onSubmit={e => {
								handleSubmit(e);
							}}
						>
							<input
								type="text"
								name="activity"
								placeholder="¿A dónde quieres ir?"
								onChange={evt => setActivity(evt.target.value)}
							/>
							<button type="submit">GimmeGoodShit</button>
						</form>
						<p>Te recomendamos gastar {val}$MXN</p>
					</div>
					<MapComponent
						{...props}
						setAsk={setAsk}
						activity={activity}
						setRecommendations={setRecommendations}
					/>
				</ConciergeStyles>
			) : (
				<ConciergeStyles>
					{recommendations.map(el => (
						<RecommendationBox element={el} />
					))}
					{/* Lo pongo en componente a parte para facilitar el código aquí*/}
					<button onClick={() => setAsk(!ask)}>GoBack</button>
					<div className="mapView">
						<MapComponent {...props} />
					</div>
				</ConciergeStyles>
			)}
		</>
	);
};

export default Concierge;
