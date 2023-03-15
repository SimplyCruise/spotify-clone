import React, { useEffect } from "react";
import TokenGenerator from "../hooks/tokenGenerator";

const MyPlaylist = () => {

    const { token } = TokenGenerator();
    console.log("tokeeenn", token);

    // Get Spotify catalog information for multiple tracks based on their Spotify IDs
    useEffect(() => {
        const getRequest = async () => {
            const response = await fetch("https://accounts.spotify.com/v1/albums/2up3OPMp9Tb4dAKM2erWXQ", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + token,
                    mode: 'cors',
                    json: true
                },
            });
            console.log("response", response);
        };

        getRequest();
    }, [token]);

    return (
        <div className="playlist">
            <h2>My Playlist</h2>

            <table class="table">
                <caption>List of users</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="tr">
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr className="tr">
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr className="tr">
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>


    )
}

export default MyPlaylist