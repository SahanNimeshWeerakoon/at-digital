import React, { useState } from 'react'
import Service from './Service'

const Services = () => {

    const [ services, setServices ] = useState([
        {
            id: 1,
            title: "Web & Mobile App Development",
            description: "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.",
            img: "monitor.png",
            reverse: false
        },
        {
            id: 2,
            title: "Digital Strategy Consulting",
            description: "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.",
            img: "magnifier.png",
            reverse: true
        }
    ]);

    return (
        <div style={{ marginTop: '100px' }}>
            { services.map(srvs => <Service service={srvs} key={srvs.id} />) }
        </div>
    );
}

export default Services