import React, { Component } from 'react';
import { UserProfileStyles } from './UserProfileStyles';
import Britter from '../../assets/britter-logo.svg';
import DefaultUser from '../../assets/user-default.jpg';
import Coin from '../../assets/coin.svg';
import CoinGray from '../../assets/coin-gray.svg';
import HeartBeat from '../../assets/heart-beat.svg';

export default class UserProfile extends Component {
	state = {
		challenges: [
			{
				goal: 7,
				position: 4,
				status: 'in progress',
				title: 'No falles ningún día durante una semana'
			},
			{
				goal: 2,
				position: 2,
				status: 'completed',
				title: 'Ahorra voluntariamente 2 veces en una semana'
			},
			{
				goal: 1,
				position: 0,
				status: 'failed',
				title: 'Gasta menos o igual a lo recomendado'
			}
		],
		user: {
			name: 'Rodrigo García',
			level: 1,
			coins: 40,
			nextLevel: 50,
			rythm: 'good'
		}
	};

	getPercentage(current, goal) {
		return (current / goal) * 100;
	}

	render() {
		return (
			<UserProfileStyles>
				<img src={Britter} alt="Britter Logo" className="main-logo" />
				<h1 className="section-title">Tu Perfil</h1>
				<div className="profile-card">
					<div
						className="card-user-image"
						style={{ backgroundImage: `url(${DefaultUser})` }}
					></div>
					<div className="card-user-intel">
						<div className="left-side">
							<h3 className="user-name">
								{this.state.user.name}
							</h3>
							<div className="coin-holder-data">
								<span className="actual data-coins">
									<img src={Coin} alt="Monedas Actuales" />
									{this.state.user.coins}
								</span>
								<span className="goal data-coins">
									/ {this.state.user.nextLevel}
									<img src={CoinGray} alt="Monedas Meta" />
								</span>
							</div>
							<div className="coin-mt">
								<div
									className="actual-meter"
									style={{
										width: `${this.getPercentage(
											this.state.user.coins
										)}%`
									}}
								></div>
							</div>
						</div>
						<div className="right-side">
							<p className="level-text">Nivel</p>
							<p className="actual-level">
								{this.state.user.level}
							</p>
						</div>
						<div className="full-width">
							<p className="texter">Tu ritmo financiero</p>
							<img
								src={HeartBeat}
								className="hb-img"
								alt="Heart Beat"
							/>
						</div>
					</div>
				</div>
				{this.state.challenges.map((item, index) => {
					return <div className="goal-card" key={index}></div>;
				})}
			</UserProfileStyles>
		);
	}
}
