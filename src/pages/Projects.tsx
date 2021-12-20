import React from 'react';
import Container from '../components/Container';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';

const Projects = () => (
  <Container>
    <FullCalendar
      plugins={[interactionPlugin, timeGridPlugin, dayGridPlugin]}
      initialView="dayGridMonth"
      nowIndicator={true}
      editable={true}
      initialEvents={[{ title: 'nice event', start: new Date() }]}
    />
  </Container>
);

export default Projects;
