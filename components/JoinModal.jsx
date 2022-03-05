const JoinModal = ({ modalActive, setModalActive }) => {
	return (
		<>
			<div className="blind">
				<div className="modal">
					<div className="title">join friesDAO</div>
					<div className="join-options">
						<div className="join-option">
							<a className="option-title underline" href="https://discord.gg/friesdao">guest access</a>
							<div className="option-desc">hang out with the community in public channels on <a className="underline" href="https://discord.com/" target="_blank">Discord</a></div>
						</div>

						<div className="join-option">
							<a className="option-title underline" href="https://app.uniswap.org/#/swap?exactField=output&exactAmount=5000&outputCurrency=0xFA57F00D948bb6a28072f5416fCbF7836C3d62dD&chain=mainnet" target="_blank">get membership</a>
							<div className="option-desc">purchase 5000+ FRIES tokens, then access the <a className="underline" href="https://discord.gg/friesdao">members-only Discord</a></div>
						</div>

						<div className="join-option disabled">
							<a className="option-title underline" href="https://app.fries.fund/">member app</a>
							<div className="option-desc">gain access to tools such as staking and governance</div>
						</div>
					</div>

					<i className="modal-close fas fa-times" onClick={() => {setModalActive(false)}}></i>
				</div>
			</div>

			<style jsx>{`
				.modal {
					background-color: #FDFDFD;
					padding: 40px;
					border-radius: 10px;
					width: 1000px;
					display: flex;
					flex-direction: column;
					align-items: center;
					z-index: 9999;
					position: relative;
				}

				.modal-close {
					position: absolute;
					top: 20px;
					right: 20px;
					font-size: 1.75em;
					cursor: pointer;
				}

				.blind {
					position: fixed;
					top: 0;
					left: 0;
					height: 100vh;
					width: 100%;
					z-index: 8888;
					background-color: rgb(0,0,0,0.8);
					display: ${modalActive ? "flex": "none"};
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				.underline {
					text-decoration: underline;
				}

				.title {
					font-size: 3em;
					font-weight: 700;
					margin-bottom: 24px;
					text-align: center;
				}

				.join-options {
					display: grid;
					grid-template-rows: 1fr;
					grid-template-columns: 1fr 1fr 1fr;
					gap: 16px;
				}

				.join-option {
					border: 2px solid var(--orange);
					border-radius: 10px;
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 24px;
				}

				.join-option.disabled {
					color: var(--gray);
					border-color: var(--gray);
					pointer-events: none;
				}

				.join-option.disabled > div {
					color: var(--gray);
				}

				.join-option.disabled > a {
					color: var(--gray);
				}

				.option-title {
					font-size: 1.6em;
					font-weight: 600;
					margin-bottom: 6px;
				}

				.option-desc {
					text-align: center;
					font-size: 1.3em;
				}

				@media only screen and (max-width: 1100px) {
					.modal {
						width: 390px;
					}
					
					.join-options {
						display: grid;
						grid-template-rows: 1fr 1fr 1fr;
						grid-template-columns: 1fr;
						gap: 16px;
					}
				}

				@media only screen and (max-width: 400px) {
					.modal {
						width: 275px;
					}

					.join-option {
						padding: 12px 16px;
					}
				}
			`}</style>
		</>
	)
}

export default JoinModal