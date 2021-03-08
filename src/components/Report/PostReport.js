import axios from 'axios';

const LoginService = data => (
	axios.post('http://34.91.61.43/report/add', data)
		.then(res => res.status )
)	

export default LoginService;