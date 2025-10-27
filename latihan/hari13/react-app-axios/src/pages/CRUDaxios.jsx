import axios from 'axios'
import { useEffect, useState } from 'react'
export default function CRUDaxios(){

    // Use State untuk Menyimpan data
    const initialInput = {title:"",year:0,categoryId:null, id:null}
    const [data, setData] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [input, setInput] = useState({initialInput});
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
            setData(response.data.data)
        }).catch(err => {
            console.log(err)
        })
    
    }
    const fetchDataCategory = () => {
        axios.get('http://localhost:3000/api/category').then((response) => {
            // setDataCategory(response.data.data)
            let result = response.data.data
            setDataCategory(result)
            if(result > 0){
                setInput({...input, categoryId:result[0].id})
            }
            console.log(response.data.data)
        }).catch(err => {
            console.log(err)
        })
    }

    // const handleChange = (event) => {
    //     let {name, value} = event.target
    //     setInput({...input, [name]:value})
    // }

    // const handleSubmit = (event) => {
    //     try {
    //         event.preventDefault()
    //         axios.post('http://localhost:3000/api/movie', {title: input.title, year:Number(input.year), categoryId:Number(input.category)})
    //         fetchData()
    //         fetchDataCategory()
    //         console.log(input)
    //         setInput(...input)
    //     } catch(err){
    //         alert(err)
    //     }
    // } 

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
            let text = "Apa anda yakin menyimpan data?"
            if (confirm(text)) {
                await axios.post('http://localhost:3000/api/movie', {
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

    const deleteData = async (id) => {
        event.preventDefault()
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

    const handleEdit = async (event) => {
        // setId(event.target.value)
        // // event.preventDefault()
        // await axios.put(`http://localhost:3000/api/movie/${id}`, {
        //     title: title,
        //     year: Number(year),
        //     categoryId: Number(categoryId)
        // })

        try {
            axios.get(`http://localhost:3000/api/movie/${id}`).then((response) => {
            // setDataCategory(response.data.data)
            let result = response.data.data
            console.log(result)
            setTitle(result.title)
            setYear(result.year)
            setCategoryId(result.categoryId)
        })} catch(err) {
            console.log(err)
        }

    }

    return (
        <>
            <h1>Hai</h1>
            <h2>CRUD axios</h2>
            <form onSubmit={handleSubmit}>
                <label for="title">Title</label>
                <input type="text" id="title" name="title" onChange={handleChangeTitle} value={title} placeholder="Title" />

                <label for="year">Year</label>
                <input type="number" id="year" name="year" onChange={handleChangeYear} value={year} placeholder="Year" min="1980" max="2025"/>

                <label for="category">Category</label>
                <select id="category" name="category" onChange={handleChangeCategoryId}>
                    {dataCategory.map((item, index)=>{
                        return (
                            <option key={index} value={item.id}>{item.name}</option>
                    )})}
                </select>

                <input type="submit" value="Submit" />
            </form>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Tahun</th>
                            <th>Kategori</th>
                            <th colspan="2">Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index)=>{
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.title}</td>
                                <td>{item.year}</td>
                                <td>{item.categoryId}</td>
                                <td>
                                    <button className="btn btn-active btn-error" onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
                                    <button className="btn btn-active btn-success" onClick={() => deleteData(item.id)}>Hapus</button>
                                </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </>
    )
}