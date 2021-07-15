import React from 'react'

export default function Card({ item, image }) {
    return (
        <div className="card" style={{ width: 18 + 'rem', marginTop: 20 + 'px' }}>
            {image && <img src={image} className="card-img-top" alt="card_image" />}
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div >
    )
}
