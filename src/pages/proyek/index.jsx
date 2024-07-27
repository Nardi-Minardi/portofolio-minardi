import React from 'react';
import listProyek from '../../utils/listProyek.json';
import MainLayout from '@/layouts/mainLayout';

const Proyek = () => {
  return (
    <MainLayout>
      <div className='proyek-section'>
        <div className='container'>
          {listProyek.map((item, index) => {
            return (

              <div className="row" key={index} >
                <div className='col-md-4 mt-3'>
                  <ul key={index}>
                    <li>
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.desc}</p>
                      <p className="card-text">{item.jobDesc}</p>
                    </li>
                  </ul>
                </div>

                <div className='col-md-8' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.proyek.map((v, i) => (
                    <div className="card" key={i}
                      style={{ marginTop: '10px', width: '350px' }}>
                      <div key={v.id} className="card-body" >
                        <img src={v.image} className="card-img-top py-3 h-64" alt="..." />
                        <h5 className="card-title">{v.title}</h5>
                        <a className="btn-swipper" style={{ cursor: 'pointer', float: 'right' }}
                          href={v.url} target="_blank"
                        >lihat</a>
                        {/* <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a> */}
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            )
          })}
        </div>
      </div>
    </MainLayout>
  )
}

export default Proyek;
