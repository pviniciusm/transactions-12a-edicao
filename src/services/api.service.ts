import axios from "axios";
import { LoginProps } from "../models/login.model";

const api = axios.create({
    baseURL: "http://localhost:3333",
});

interface ApiResponse {
    ok: boolean;
    message: string;
    data?: any;
}

export class ApiService {
    public static async listTransactions(id: string): Promise<ApiResponse> {
        try {
            const result = await api.get(`/users/${id}/transactions`);
            return result.data;
        } catch (error: any) {
            console.log(error.response.data);
            return error.response.data;
        }
    }

    public static async login(props: LoginProps): Promise<ApiResponse> {
        try {
            const result = await api.post(`/users/login`, props);
            return result.data;
        } catch (error: any) {
            console.log(error.response.data);
            return error.response.data;
        }
    }
}

export async function listTransactions() {
    // ...
}
