import React from 'react'

function History() {
  return (
    <>
      <div className='p-5'>
        <h1>Watch History</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Video ID</th>
              <th>Title</th>
              <th>Video URL</th>
              <th>Date and Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Heeriye</td>
              <td>https://www.youtube.com/watch/2oiyebdkjhiuuoo2w</td>
              <td>2024-08-24</td>
              <td>
                <button className='btn'>
                  <i className="fa-solid fa-trash" style={{ color: "#df0c36", }} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default History