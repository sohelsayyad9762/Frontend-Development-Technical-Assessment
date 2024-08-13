import React, { useState } from 'react';
import axios from 'axios';

function ReplyBox({ threadId }) {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleReply = async () => {
    await axios.post(`/reply/${threadId}`, {
      from: 'you@example.com',
      to: 'recipient@example.com',
      subject,
      body,
    });
  };

  return (
    <div className="reply-box">
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleReply}>Send</button>
    </div>
  );
}

export default ReplyBox;

