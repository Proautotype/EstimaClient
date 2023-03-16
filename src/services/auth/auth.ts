import env from "../../environment";
import axiosNetworkManager from "../NetworkManager.service";
import authTypes from "../types/auth.types";

class AuthenticationService {
    async signup(body: authTypes) {
        try {
            return await axiosNetworkManager({
                method: env.BACKEND_URL + "signup",
                data: {
                    username: body.username,
                    password: body.password,
                    type: body.type
                } as authTypes
            });
        } catch (error) {
            console.dir(error);
        }
    }
    async login(data: authTypes) {
        try {
            return await axiosNetworkManager({
                method: env.BACKEND_URL + "login",
                data: {
                    username: data.username,
                    password: data.password
                } as authTypes
            });
        } catch (error) {
            console.log(error)
        }
    }
}

export default AuthenticationService;