import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryAPI, getCategoryAPI, removeCategoryAPI } from '../services/allAPI';

const Category = () => {

  const [allCategory,setAllCategory] = useState([])
  const [categoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  useEffect(()=>{
    getAllCategory()
  },[])


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getAllCategory = async ()=>{
    const response = await getCategoryAPI()
    if(response.status>=200 && response.status<300){
      setAllCategory(response.data)
    }
  }
  console.log(allCategory);

  const handleAddCategory = async()=>{
    if(categoryName){
      //api call
     await addCategoryAPI({categoryName,allVideos:[]})
      setCategoryName("")
      handleClose()
      getAllCategory()
    }else{
      toast.warning("please fill the form completely!!!")
    }
  }

  const removeCategory = async (categoryId)=>{
    //api call
    await removeCategoryAPI(categoryId)
    getAllCategory()
  }


  return (
    <>
      <div className="d-flex justify-content-around">
        <h5>All Categories</h5>
        <button onClick={handleShow} style={{width:'50px',height:'50px'}} className='btn btn-info rounded-circle fw-bolder fs-5'>+</button>
      </div>

      <div className="container-fluid mt-3">
        {
          allCategory.length>0?
            allCategory?.map(categoryDetails=>(
              <div className="border rounder p-3 mb-2">
                <div className="d-flex justify-content-between">
                  <h5>{categoryDetails?.categoryName}</h5>
                  <button onClick={()=>removeCategory(categoryDetails?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
                </div>
                <div className="row mt-2">
                  <div className="col-lg-6">
                    {/* videos of particular category */}
                  </div>
                </div>
              </div>  
            ))

          :
          <div className="text-danger fw-bolder ms-5">No categories are added yet!!!</div>
        }
      </div>

      <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Category Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingInputName" label="Category Name" className="mb-3">
            <Form.Control onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Category Name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddCategory} className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </>
  )
}

export default Category