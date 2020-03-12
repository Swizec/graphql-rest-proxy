import fetch from "isomorphic-fetch";

type LoginResponse = {
    success: boolean;
    identifier: string;
    access_token: string;
};

type JSONBlob = {
    [key: string]: string;
};

export class APIwrapper {
    headers: JSONBlob = {
        "Content-Type": "application/json",
        Authorization: `Token token=<auth_token>`,
        Accept: "application/json.v2"
    };

    async login() {
        if (this.headers["X-Has-User-Account"]) {
            // already logged in, keep going
            return;
        }

        const response: LoginResponse = await fetch(
            "https://swizec.ngrok.io/api/login",
            {
                method: "POST",
                headers: this.headers,
                body: JSON.stringify({
                    user: {
                        email: "admin@localhost.com",
                        password: "Password1!"
                    }
                })
            }
        ).then(res => res.json());

        // add login stuff to headers for other methods
        this.headers = {
            ...this.headers,
            "X-Has-User-Account": "true",
            "X-User-Known-Key": response.identifier,
            "X-User-Authentication-Token": response.access_token
        };
    }

    async getUser() {
        await this.login();

        const userData = await fetch("https://swizec.ngrok.io/api/user", {
            headers: this.headers
        }).then(res => res.json());

        return userData;
    }

    async settings() {
        await this.login();

        const settings = await fetch("https://swizec.ngrok.io/api/settings", {
            headers: this.headers
        }).then(res => res.json());

        return settings;
    }
}
