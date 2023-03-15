import { useEffect, useState } from "react";
import request from "request";

const client_id = "27216adc112544f0b3ba98abbd223d48";
const client_secret = "347bd5ee7ec6438faff97a7ba110805b";

const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
        Authorization:
            "Basic " +
            Buffer.from(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
        grant_type: "client_credentials",
    },
    json: true,
};

const TokenGenerator = () => {
    const [token, setToken] = useState("");
    useEffect(() => {
        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                const _token = body.access_token;
                setToken(_token);
            }
        });
    }, []);
    return {
        token,
    };
};

export default TokenGenerator;