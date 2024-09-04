import React, { useEffect, useState } from 'react'
import { getCategories, deletecategory, updateCategory } from '../services/allApis'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'


function Categorylist({ response }) {

    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getData()
    }, [response])

    const getData = async () => {
        const result = await getCategories()
        console.log(result)
        if (result.status == 200) {
            setCategoryList(result.data)
        }
    }

    const deleteCat = async (id) => {
        const resullt = await deletecategory(id)
        console.log(resullt)
        if (resullt.status == 200) {
            getData()
        }
    }

    const dropHandler = async (e, category) => {
        console.log("dropped")
        const vid = JSON.parse(e.dataTransfer.getData("video"))
        category.videos.push(vid)
        const result = await updateCategory(category.id, category)
        console.log(result)
        if (result.status == 200) {
            toast.success(`${vid.title} video added to ${category.title}`)
            getData()
        }
        else {
            toast.error("Video-Category Adding Failed!!")
        }
    }

    const dragOverHandler = (e) => {
        console.log("dragging over")
        e.preventDefault()
    }

    return (
        <>
            <div className='container-fluid border border-3 border-light p-2 mt-3'>
                {
                    categoryList.length > 0 ?
                        <div>
                            {
                                categoryList.map(item => (
                                    <div className='border m-1'>
                                        <div className='m-2 p-3 mb-3 d-flex justify-content-between' onDragOver={(e) => { dragOverHandler(e) }} onDrop={(e) => { dropHandler(e, item) }}>
                                            <h3>{item.title}</h3>
                                            <button className='btn' onClick={() => { deleteCat(item.id) }}>
                                                <i className="fa-solid fa-trash" style={{ color: "#df0c36", }} />
                                            </button>
                                        </div>
                                        <div className='border border-light'>
                                            {
                                                item?.videos?.length>0 &&
                                                <>
                                                {item?.videos?.map(vid=>(
                                                    <VideoCard video={vid} cat={true}/>
                                                ))}
                                                </>
                                            }
                                        </div>
                                    </div>

                                ))
                            }
                        </div>
                        :
                        <h5>No Categories</h5>
                }
            </div>
        </>
    )
}

export default Categorylist