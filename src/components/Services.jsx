import React from 'react'
import { services } from '../constants'
import ServiceCard from '../Section/ServiceCard'

function Services() {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9 max-sm:items-center'>
      {
        services.map((service, index) => {
          return (
            <ServiceCard key={service.label} {...service} />
          )
        })
      }
    </section>
  )
}

export default Services