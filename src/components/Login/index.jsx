import React, { useEffect, useState } from "react";

import "./style.scss";
import { Button, Checkbox, Form, Input } from "antd";
import userApi from "../../service/user/userAPI";
import { useNavigate } from "react-router";

const SignUp = () => {
	const navigate = useNavigate();

	const onFinish = (values) => {
		console.log("Success:", values);
		userApi.login(values)
			.then((response) => {
				console.log(response);
				localStorage.setItem("token", response.data.token);
				navigate("/dashboard");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className="signIn_wrapper">
			<div className="signIn_container shadow-lg">
				<div className="signIn_header">
					<p>Login</p>
				</div>

				<div className="form">
					<Form
						name="basic"
						style={{
							maxWidth: "100%",
						}}
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
					>
						<Form.Item
							label="Username"
							name="username"
							rules={[
								{
									required: true,
									message: "Iltimos username kiriting!",
								},
							]}
						>
							<Input placeholder="username..." />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{
									required: true,
									message: "Iltimos parolni kiriting!",
								},
							]}
						>
							<Input.Password placeholder="Parol..." type="text" />
						</Form.Item>

						{/* <Form.Item name="see">
							<Checkbox>Ko'rish</Checkbox>
						</Form.Item> */}
						<Form.Item>
							<Button type="danger" htmlType="submit" onClick={onFinish}>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
