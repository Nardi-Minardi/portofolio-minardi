import React, { useState } from 'react';
import listVideo from '../utils/listVideo.json';

const CardVideo = () => {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [vid, setVid] = useState(null);

  const toggle = (index) => {
    // console.log(index);
    if (openCollapse === index) {
      return setOpenCollapse(null);
    }
    setOpenCollapse(index);
  }

  const toggleVideo = (vid) => {
    // console.log(vid);
    if (openCollapse === vid) {
      return setShowVideo(null);
    }
    setShowVideo(vid);
  }

  return (
    <div className='container mt-8 bg-white border-2 border-gray-200 rounded-lg shadow-sm p-4 md:p-8 mb-4'>

      <div className="feature">
        <div className="feature-inner">
          <div className="feature-header mb-16">
            <div className="feature-icon mr-16">
              <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                <g fillRule="nonzero" fill="none">
                  <path d="M4 12H0V5a5.006 5.006 0 0 1 5-5h7v4H5a1 1 0 0 0-1 1v7z" fill="#43F1FF" />
                  <path d="M32 12h-4V5a1 1 0 0 0-1-1h-7V0h7a5.006 5.006 0 0 1 5 5v7zM12 32H5a5.006 5.006 0 0 1-5-5v-7h4v7a1 1 0 0 0 1 1h7v4z" fill="#4353FF" />
                  <path d="M27 32h-7v-4h7a1 1 0 0 0 1-1v-7h4v7a5.006 5.006 0 0 1-5 5z" fill="#43F1FF" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <h5 style={{ color: '#000' }}>Disarankan untuk anda.</h5>
      <p>Tonton beberapa video pembelajaran Programming untuk anda.</p>

      <div className="row list-video-wrapper">

        <div className="col-md-6">
          <ul className="list-group">

            {listVideo.map((item, index) => {
              return (
                <li className="list-group-item" onClick={() => toggle(index)} key={index}>
                  {item.title}
                  <div style={{ float: 'right', cursor: 'pointer' }}>{openCollapse === index ? <div>sembunyikan{' '}<i className="fas fa-chevron-up"></i></div> : <div>lihat{' '}<i className="fas fa-chevron-down"></i></div>}</div>
                  {openCollapse === index ?
                    <ul className="mt-3">{item.video.map(v => (
                      <li key={v.id}>
                        <a className="desc-video" onClick={() => {

                          toggleVideo(v.id);
                          setVid(v.id);
                        }}
                        >
                          {v.desc}
                        </a>
                      </li>
                    ))}
                    </ul>
                    : null}
                </li>
              )
            })

            }
          </ul>
        </div>

        <div className="col-md-6">
          {showVideo === vid ?

            <div className="card card-body">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/videoseries?list=" + vid} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>

            : null
          }
        </div>
      </div>

    </div>
  )
}

export default CardVideo;
