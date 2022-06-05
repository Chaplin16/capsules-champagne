import React from 'react';
import { useState } from "react";

const Dropdown = (props) => {
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
      setShowLinks(!showLinks);
    }

    return (
        <section>
            <div className="title">
                <h4 className="title__dash">{props.name}</h4>
                <img
                    className="icon-arrow-down"
                    src="./arrow-down.png"
                    onClick={handleShowLinks}
                    alt="fleche pour faire derouler le menu des liens"
                ></img>
            </div>
            <div className={`footer ${
                showLinks ? "show-footer-links" : "hide-footer-links"
                } `}>
                <ul className="footer-links">
                    {props.list.map((item, index) => (
                        <li key={index}>
                            <a href= {item.link}> 
                            <img
                                className="icon-arrow-right"
                                src="./arrow-right.png" 
                                alt="fleche pour evoquer une liste" />
                            <img className="icon" src={item.img} alt={item.alt} />
                            {item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Dropdown;
















// import { useState } from 'react';
// import ArrowDown from '../assets/img/arrow-down.png'

// const Dropdown = (props) => {
//     const [showLinks, setShowLinks] = useState(false);
//     const handleShowLinks = () => {
//         setShowLinks(!showLinks);
//     }

//     return (
//         <section>
//             <div className="title">
//                 <h4 className="title__dash">{props.name}</h4>
//                 <img
//                     className="icon-arrow"
//                     src={ArrowDown}
//                     onClick={handleShowLinks}
//                 />
//             </div>
//             <div className={`footer ${showLinks ? 'show-footer-links' : 'hide-footer-links'}`}>
//                 <ul className="footer-links">
//                     {props.list.map((item, index) => (
//                         <li key={index}>
//                             <a href={item.link}>{item.name}</a>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </section>
//     );
// }

// export default Dropdown;