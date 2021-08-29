import { Circle } from "better-react-spinkit";

export default function Loading() {
    return (
        <center
            style={{ display: "grid", placeItems: "center", height: "70vh" }}>
            <div>
                <Circle size={80} />
            </div>
        </center>
    );
}
