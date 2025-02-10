import React from 'react'

function DestinationCard({id,name,location,image,description,price}) {
  return (
      <div
          key={id}
          style={{
              border: '1px solid lightgray',
              borderRadius: '10px',
              padding: '16px',
              margin: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              maxWidth: '300px',
              textAlign: 'center',
              backgroundColor: 'white'
          }}
      >
          <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>{name}</h2>
          <p style={{ color: 'dimgray', fontStyle: 'italic', fontSize: '16px' }}>{location}</p>
          <img
              src={image}
              alt={name}
              style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '10px' }}
          />
          <p style={{ fontSize: '14px', color: 'darkgray' }}>{description}</p>
          <p style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '10px' }}>Price: {price}</p>
      </div>
  )
}

export default DestinationCard