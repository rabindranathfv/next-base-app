import { useRouter } from "next/router";
import { GetServerSideProps, GetServerSidePropsContext } from "next/types";
import React, { useState } from "react";
import { UrlWithParsedQuery } from "url";

interface Event {
  id: Number;
  title: String;
  description: String;
  category: String;
  Date: String;
}

interface IEventList {
  eventList: Event[];
}

const EventList = ({ eventList }: IEventList) => {
  const [eventListFiltered, setEventListFiltered] = useState(eventList);
  const router = useRouter();

  const fetchSportEvents = async () => {
    const fetchUrl = `http://localhost:4000/events?category=sports`;
    const resp = await fetch(fetchUrl);
    const data = await resp.json();

    setEventListFiltered(data);
    router.push(`/events?category=sports`, undefined, { shallow: true });
  };

  return (
    <div>
      <h1>Event list</h1>
      <button onClick={fetchSportEvents}>Filter by Category</button>

      {eventListFiltered.map((event: Event) => {
        return (
          <div key={event.id.toString()}>
            <h2>
              {event.id.toString()} {event.title} {event.Date} |{" "}
              {event.category}
            </h2>
            <p>{event.description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default EventList;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { query } = context;
  const queryStr = query?.category ? `category=sports` : ``;
  const fetchUrl = `http://localhost:4000/events?${queryStr}`;
  const resp = await fetch(fetchUrl);
  const data = await resp.json();

  return {
    props: {
      eventList: data,
    },
  };
};
