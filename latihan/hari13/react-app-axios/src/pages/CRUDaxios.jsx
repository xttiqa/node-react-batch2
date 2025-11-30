import axios from 'axios'
import { useEffect, useState } from 'react'

export default function CRUDaxios(){
    // Use State untuk Menyimpan data
    // const initialInput = {title:"",year:0,categoryId:null, id:null}
    const [data, setData] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    // const [input, setInput] = useState({initialInput});
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [id, setId] = useState('');
    const [categoryId, setCategoryId] = useState('');

    // Use Effect untuk Menampilkan data
    useEffect(() => {
        fetchData()
        fetchDataCategory()
    }, [])
    
    const fetchData = () => {
        axios.get('http://localhost:3000/api/movie').then((response) => {
            setData(response.data.movies)
        }).catch(err => {
            console.log(err)
        })
    
    }
    const fetchDataCategory = () => {
        axios.get('http://localhost:3000/api/category').then((response) => {
            // setDataCategory(response.data.data)
            let result = response.data.data
            setDataCategory(result)
        }).catch(err => {
            console.log(err)
        })
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
        console.log(title)
    }

    const handleChangeYear = (event) => {
        setYear(event.target.value)
        console.log(year)
    
    }
    const handleChangeCategoryId = (event) => {
        setCategoryId(event.target.value)
        console.log(categoryId)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {

            let textSimpan = "Apa anda yakin menyimpan data?"
            let textUpdate = "Data anda yakin memperbarui data?"

            if (id) {
                if(confirm(textUpdate)){
                    await axios.put(`http://localhost:3000/api/movie/${id}`, {
                        title: title,
                        year: Number(year),
                        categoryId: Number(categoryId)
                    })
                }
            } else {
                if(confirm(textSimpan)){
                    await axios.post('http://localhost:3000/api/movie', {
                        title: title,
                        year: Number(year),
                        categoryId: Number(categoryId)
                    })
                }
            }
            fetchData()
            fetchDataCategory()
            clearData()
        } catch(err) {
            alert(err)
        }
    }

    const deleteData = async (id) => {
        try {
            let text = "Apa anda yakin menyimpan data?"
            if (confirm(text)) {
                await axios.delete(`http://localhost:3000/api/movie/${id}`, {
                    title: title,
                    year: Number(year),
                    categoryId: Number(categoryId)
                })
                fetchData()
                fetchDataCategory()
            } 
        } catch(err) {
            alert(err)
        }
    }

    const clearData = () => {
        setTitle('')
        setYear('')
        setCategoryId('')
        setId('')
    }

    const handleEdit = async (id) => {
        try {
            axios.get(`http://localhost:3000/api/movie/${id}`).then((response) => {
            let result = response.data.data
            console.log(result)
            setTitle(result.title)
            setYear(result.year)
            setCategoryId(result.categoryId.toString())
            setId(result.id)
        })} catch(err) {
            console.log(err)
        }

    }

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentData = data.slice(indexOfFirst, indexOfLast);


    return (
        <>
            <h1 class="text-5xl font-medium text-sky-50 m-10">Movies</h1>
            <form onSubmit={handleSubmit}>
                <label for="title">Title</label>
                <input type="text" id="title" name="title" onChange={handleChangeTitle} value={title} placeholder="Title" />

                <label for="year">Year</label>
                <input type="number" id="year" name="year" onChange={handleChangeYear} value={year} placeholder="Year" min="1980" max="2025"/>

                <label for="categoryId">Category</label>
                <select id="categoryId" name="categoryId" value={categoryId} onChange={handleChangeCategoryId}>
                    {dataCategory.map((item, index)=>{
                        return (
                            <option key={index} value={item.id}>{item.name}</option>
                    )})}
                </select>

                <input type="submit" value="Submit" />
            </form>

            <div className="overflow-x-auto flex justify-center">
                <table className="table bg-gray-700 rounded-mb">
                    <thead className="">
                        <tr>
                            <th className='text-white'>No.</th>
                            <th className='text-white'>Title</th>
                            <th className='text-white'>Year</th>
                            <th className='text-white'>Category</th>
                            <th colspan="2" className="text-center text-white">Action</th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {currentData.map((item, index)=>{
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.title}</td>
                                <td>{item.year}</td>
                                <td>{item.category.name}</td>
                                <td className="text-center"> 
                                    <button className="btn btn-active btn-error text-white" onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
                                    <button className="btn btn-active btn-success text-white" onClick={() => deleteData(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
                {/* Pagination DaisyUI */}
                <div className="join flex justify-center">
                    <button
                        className="join-item btn"
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        «
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`join-item btn ${
                                currentPage === index + 1 ? 'btn-active' : ''
                            }`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        className="join-item btn"
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        »
                    </button>
                </div>
        </>
    )
}