
import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './ServiceItem.css';


const ServiceItem = props => {
    return (
      <li className="service-item">
        <Card className="service-item__content">
          <Link to={`/${props.id}/services`} state={props.id}>
            <div className="service-item__image">
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className="service-item__info">
              <h2>{props.name}</h2>
              <h3>
                {props.servicesCount} {props.servicesCount === 1 ? 'Service' : 'Services'}
              </h3>
            </div>
          </Link>
        </Card>
      </li>
    );
  };

export default ServiceItem;
