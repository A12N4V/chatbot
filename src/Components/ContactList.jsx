import React from 'react';

function ContactList() {
    return (
      <div>
        <div  className="messages"></div>
        <ul class="people">
            <li class="person focus">
                <span class="title">Climate Scientist</span>
            </li>
            <li class="person">
                <span class="title">Education Analyist</span>

            </li>
        </ul>
      </div>
    );
}

export default ContactList;