import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RustData() {
    const [data, setData] = useState('');

    useEffect(() => {
        // Fetch data from Rust backend when component mounts
        axios.get('http://localhost:8000/')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching data from the Rust backend:", error);
            });
    }, []);  // The empty array means this useEffect will run once when the component mounts

    return (
        <div>
            <h2>Data from Rust Backend:</h2>
            <p>{data}</p>
        </div>
    );
}

export default RustData;
