// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    // const history = useHistory();
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch("https://react-todo-app-b2070-default-rtdb.firebaseio.com/meetups.json", {
            method: "POST",
            body: JSON.stringify(meetupData),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            navigate("/");
        });
    }

    return (
        <section>
            <h1>New Meetup Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;
