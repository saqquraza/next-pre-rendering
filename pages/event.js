import { useRouter } from "next/router";
import React, { useState } from "react";

function EventList({ enevtList }) {
  const [events, setEvent] = useState(enevtList);
  const router = useRouter();

  async function fetchSportsEvents() {
    const resp = await fetch(`http://localhost:4000/events?category=sports`);
    const data = await resp.json();
    setEvent(data);
    router.push("/event?category=sports", undefined, { shallow: true });
  }
  return (
    <div>
      <h1>
        Filter on based of Sports :{" "}
        <button onClick={fetchSportsEvents}>Sports Event</button>{" "}
      </h1>
      <h2>List of Event</h2>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default EventList;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";

  const resp = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await resp.json();
  return {
    props: {
      enevtList: data,
    },
  };
}
