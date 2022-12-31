import React from 'react';
import ServiceItem from './ServiceItem'
import Card from '../../shared/components/UIElements/Card';
import './ServiceList.css';


const ServiceList = props => {
    if( props.items.length === 0){
        return (
            <div className="center">
                <Card>
                    <h2>No Services</h2>
                </Card>
            </div>
        )
    }

    return <ul className="service-list">
            {props.items.map(service => (
                <ServiceItem 
                key= {service.id}
                id = {service.id}
                image={service.image}
                name= {service.name}
                servicesCount = {service.servicesCount}
                />
            ))
            }
            </ul>  
}

export default ServiceList;