import styled from 'styled-components';

export const ContactStyles = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 50px;
	.contact-form {
		width: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 20px;
		margin: 0 auto;
		border-radius: 20px;
		background: ${(props) => {
			return props.theme.background;
		}};
		.contact-header {
			font-size: 2rem;
			font-weight: bold;
			text-align: center;
		}
		label {
			font-size: 1.5rem;
		}
		input {
			font-size: 1.4rem;
			width: 91%;
			height: 50px;
			padding-left: 10px;
			margin: 20px;
		}
		textarea {
			font-size: 1.4rem;
			height: 200px;
			width: 100%;
			padding-left: 10px;
            margin: 20px;
		}
		.input-wrapper {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			.contact-form-input {
				width: 100%;
				justify-content: space-between;
				display: flex;
				align-items: center;
				align-self: center;
				@media screen and (max-width: 900px){
					flex-direction: column;
					width: 90%;
					align-items: center;
					label {
						width: 100%;
						margin: -10px;
					}
					input {
						width: 100%;
					}
				}
			}
			.submit-button {
				width:  20%;
				align-self: flex-end;
				border-radius: 20px;
				margin-top: 20px;
				display: flex;
				justify-content: center;
				@media (max-width: 975px) {
					width: 50%;
				}
				@media (max-width: 767px) {
					align-self: center;
					width: 80%;
					margin-top: 20px;
				}
			}
		}
	}
`;
