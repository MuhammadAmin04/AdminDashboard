import { data } from "autoprefixer";
import api from "../axios";

const headers = {
	"Content-Type": "application/json",
	Authorization: `Bearer ${localStorage.getItem("token")}`,
};

const coursesApi = {
	getAll: () => api.get("/course"),
	update: (id, title, description, image) =>
		api.put(`/course/${id}?title&description`, data),
};

export default coursesApi;
