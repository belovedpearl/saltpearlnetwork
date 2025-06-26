import { useState, useEffect  } from "react";
import styles from '../styles/DonateButton.module.css'

export default function DonateButton() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Reset loading when the component is mounted
        setLoading(false);
    }, []);

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
        window.open("https://sandbox.flutterwave.com/donate/5uaf6a0sdxpe", "_blank");
        setLoading(false);
        }, 1000);
    };

    return (
        <button
            onClick={handleClick}
            className= {styles.donatebutton}
            disabled={loading}
        >
            {loading ? "⏳" : "❤️"} {loading ? "Redirecting..." : "Donate Now"}
        </button>
    );
}