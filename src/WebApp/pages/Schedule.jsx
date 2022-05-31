import React from 'react';
import './Schedule.css';

const Schedule = () => {
    return (
        <div className='schedule'>
            <h2>THE NIGHTBREED RADIO SCHEDULE</h2>
            <p>Nightbreed Radio is now streaming the best in goth and dark alternative 24/7 on shoutcast, enabling you to listen in mobile as well!
                Here's a breakdown of when you can hear specific shows through the week.
                All times are listed in GMT, but you can use this rather handy <a href="http://timeanddate.com/worldclock/">time converter</a> to work it out for your country.
            </p>
            <ul>
                <li><div class="dayOfTheWeek">Monday</div><div class="show">07:00 The Darklord Radio Show</div></li>
                <li><div class="dayOfTheWeek">Tuesday</div><div class="show">01:00 The Fadeout Session</div></li>
                <li><div class="dayOfTheWeek">Wednesday</div><div class="show">07:00 The Fadeout Session</div></li>
                <li><div class="dayOfTheWeek">Thursday</div><div class="show">13:00 The Darklord Radio Show</div><div class="show">21:00 Nightbreed Cover Sessions</div></li>
                <li><div class="dayOfTheWeek">Friday</div><div class="show">---</div></li>
                <li><div class="dayOfTheWeek">Saturday</div><div class="show">01:00 The Darklord Radio Show</div></li>
                <li><div class="dayOfTheWeek">Sunday</div><div class="show">19:00 The Fadeout Session</div></li>
            </ul>
        </div>
    )
}

export default Schedule;