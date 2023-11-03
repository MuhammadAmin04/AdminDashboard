import api from "../axios";

const userApi = {
	login: (data) => api.post('/admin/login' , data)
}

export default userApi;