import axios from 'axios';
import { useEffect, useState } from "react";

import {HiLink} from 'react-icons/hi'

const LinkItem = ({ link, name, img }) => {
  const [hundleError, setHundleError] = useState(0)
const [statusName, setStatusName] = useState('')
const [message, setMessage] = useState('')
useEffect(() => {
  axios.get("www.facebook.com")
    .then((response) => {
    console.error(response.headers);
    setHundleError(response.data)
    console.log(response.status);
  }).then()
  .catch((err) => {
    console.error(err)
  setStatusName(err.name);
    setMessage(err.message)
  })

}, [])

return (
    <div className="item_box">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={name} className="link_box_img" width="300px" height="180px" />
      </a>
      <a
        href={link}
        target="_blank"
        className="link_box_link"
        rel="noopener noreferrer"
      >
        <strong className="link_box_name">
        {name} <HiLink />
        </strong>
      </a>
      <div className="link_status_info">
        <p className="link_status_infomessage_type">Message type: <strong> {message}  </strong></p>
        <p className="link_status_infomessage_code">Status code: <strong>{hundleError}  </strong></p>
        <p className="link_status_infomessage_name">Message name: <strong>{statusName} </strong></p>
      </div>
    </div>
  );
};

export default LinkItem;
