import React from "react";
import { Icon } from "react-materialize";
// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
export default function ModalCase({ setIsOpen, data }) {

    return(
        <div className="App">
        <div className="modal-show" onClick={() => setIsOpen(false)}>
        <div id="modal1" className='modal' style={{display: 'block', top:'35%', backgroundColor:'rgba(0, 0, 0, 0)'}}>
            <div className="modal-content">
                <div className="modal-footer" style={{backgroundColor:''}}>
                <a className="modal-close red-text"><Icon className="medium">close</Icon></a>
                </div>
                <h4 className="modal_titl">Video for: {data.name}</h4>
                <p><iframe width="100%" height="400px" src={data.clip} title={data.Title} frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/></p>
            </div>
        </div>
        </div>
        </div>
    )
}