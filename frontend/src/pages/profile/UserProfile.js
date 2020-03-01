import React, { Component } from 'react';
import { UserProfileStyles } from './UserProfileStyles';
import Britter from '../../assets/britter-logo.svg';
import DefaultUser from '../../assets/user-default.jpg';
import Coin from '../../assets/coin.svg';
import CoinGray from '../../assets/coin-gray.svg';
import HeartBeat from '../../assets/heart-beat.svg';

export default class UserProfile extends Component {
	state = {
		user: {
			name: 'Rodrigo García',
			level: 1,
			coins: 40,
			nextLevel: 50,
			rythm: 'good'
		}
	};

	getPercentage() {
		return (this.state.user.coins / this.state.user.nextLevel) * 100;
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
										width: `${this.getPercentage()}%`
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
			</UserProfileStyles>
		);
	}
}
