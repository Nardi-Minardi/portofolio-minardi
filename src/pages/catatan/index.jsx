import React, { useState, useEffect, useMemo } from 'react';
import catatan from '../../utils/catatan.json';
import MainLayout from '@/layouts/mainLayout';

// const baseURL = 'http://localhost/portofolio/';
const baseURL = 'https://nardiminardi.com/';

const Pagination = ({ perPage, totalPost, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPost / perPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a style={{ cursor: 'pointer' }} onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const Catatan = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = () => {
      // const data = catatan;
      setData(catatan);
      // console.log('ini useeffect', data)
    };

    fetchPosts();
  }, [data]);

  const lastPageIndex = currentPage * perPage;
  const firstPageIndex = lastPageIndex - perPage;
  const currentData = data.slice(firstPageIndex, lastPageIndex);


  // Invoke when user click to request another page.
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <MainLayout>
      <div className='catatan-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <h5 style={{ borderBottom: '1px solid rgba(69, 76, 76, 0.5)', paddingBottom: '15px' }}>Catatan</h5>
              <p>Saya senang untuk mencatat semua hal yang saya pelajari, sebagian besar tentang pembelajaran saya di bidang programming.</p>
            </div>

            <div className='col-md-8' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
              {currentData.map((item, index) => {
                return (
                  <div key={index} className="card" style={{ maxHeight: '300px', maxWidth: '350px', marginBottom: '10px' }}>
                    <img style={{ padding: '10px', height: '180px', width: '350px', objectFit: 'contain' }} src={`./images/${item.image}`} className="card-img-top" alt="..." />
                    <div className="card-body">

                      <p className="card-title" >{item.title}</p>
                      <a className="btn-swipper" style={{ cursor: 'pointer', float: 'right' }}
                        href={item.url ? item.url : "./images/" + item.file} target='_blank'
                      >lihat</a>

                    </div>
                  </div>
                )
              })}
              <Pagination perPage={perPage} totalPost={data.length} paginate={paginate} />
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Catatan;
