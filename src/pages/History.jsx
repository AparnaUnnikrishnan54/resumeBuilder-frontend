
import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { getHistoryAPI, deleteHistoryAPI } from '../api/allAPI'
function Histroy() {
  const [downloads, setDownloads] = useState([])

  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async () => {
    const res = await getHistoryAPI()
    // console.log(res.data)
    setDownloads(res.data)
  }

 const deleteHistory = async (historyId) => {
  const res = await deleteHistoryAPI(historyId)
  console.log(res)

  if (res.status === 200) {
    setDownloads(downloads.filter(item => item.id !== historyId))
  }

}

  return (
    <div className='my-5'>
      <h3 className='text-center text-danger'>Downloaded Resumes</h3>
      <Link to={'/'} className=''>Back</Link>
      <div className='row m-3'>
        {
          downloads?.length > 0 ?
            downloads?.map(dwnld => (
              <div className='col-lg-4' key={dwnld.id}>
                <Paper sx={{ padding: '10px' }}>
                  <div className='d-flex align-items-center justify-content-between'>
                    <h4>{dwnld?.timestamp}</h4>
                    <button className='btn text-danger'onClick={() => deleteHistory(dwnld.id)}>
                      <i className='fa-solid fa-trash'></i>
                    </button>
                  </div>
                  <div>
                    <img src={dwnld?.resumeImg} alt="" className='img-fluid' />
                  </div>
                </Paper>
              </div>

            ))
            :
            <p className='text-center text-danger'>No Resumes Downloaded Yet</p>
        }
      </div>
    </div>
  )
}

export default Histroy

