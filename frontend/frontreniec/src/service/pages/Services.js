import React from 'react';
import ServiceList from '../components/ServiceList';

const Services = () => {
    const SERVICES = [      
        {
            id: 'u1',
            name: 'Documento',
            image: 'https://img.freepik.com/vector-premium/ilustracion-icono-lupa-ilustracion-dibujos-animados-vector-lupa-icono-busqueda-o-zoom_597063-7.jpg',
            servicesCount: 1
        },
        {
            id: 'u2',
            name: 'Nombres/Apellidos',
            image: 'https://static9.depositphotos.com/1000128/1090/i/450/depositphotos_10901525-stock-photo-hard-disk-and-database-icon.jpg',
            servicesCount: 1
        },
        {
            id: 'u3',
            name: 'Nombres/Direccion',
            image: 'https://static9.depositphotos.com/1000128/1090/i/450/depositphotos_10901525-stock-photo-hard-disk-and-database-icon.jpg',
            servicesCount: 1
        },
        {
            id: 'u4',
            name: 'Hermanos',
            image: 'https://static9.depositphotos.com/1000128/1090/i/450/depositphotos_10901525-stock-photo-hard-disk-and-database-icon.jpg',
            servicesCount: 1
        }
    ];

    return <ServiceList items={SERVICES} />;
    //return <h2>HOLI</h2>
};

export default Services;