import { useEffect, useState } from "react";
import { load } from "./config";


export default function ConfigLoader({ loading, ready }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [config, setConfig] = useState();

    useEffect(() => {
        load().then((configData) => {
            setIsLoaded(true);
            setConfig(configData);
        });
    }, []);

    if (!isLoaded) {
        return loading ? loading() : null;
    }

    return ready(config);
}
