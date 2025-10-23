import axios from 'axios'
import { useEffect, useState } from 'react'
export default function CRUDaxios(){

    // Use State untuk Menyimpan data
    const [data, setData] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [input, setInput] = useState([]);

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

    const handleChange = (event) => {
        let {name, value} = event.target
        setInput({...input, [name]:value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/api/movie', {title: input.title, year:Number(input.year), })
        fetchData()
        fetchDataCategory()
        console.log(input)
        setInput(...input,)
    }

    return (
        <>
            <h1>Hai</h1>
            <h2>CRUD axios</h2>
            <form >
            <label for="title">Title</label>
            <input type="text" id="title" name="title" onChange={handleChange} placeholder="Title" />

            <label for="year">Year</label>
            <input type="number" id="year" name="year" onChange={handleChange} placeholder="Year" min="1980" max="2025"/>

            <label for="category">Category</label>
            <select id="category" name="category" onChange={handleChange}>
                {dataCategory.map((item, index)=>{
                    return (
                        <option key={index} value={item.id}>{item.name}</option>

                )})}
            </select>
            
            <input type="submit" value="Submit" />
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Nomor</th>
                        <th>Title</th>
                        <th>Tahun</th>
                        <th>Kategori</th>
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
                        </tr>
                    )})}
                </tbody>
            </table>
        </>
    )
}