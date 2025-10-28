import axios from 'axios'
import { useEffect, useState } from 'react'
export default function CRUDcategory(){

    // Use State untuk Menyimpan data
    const initialInput = {name:"", id:null}
    const [data, setData] = useState([]);
    const [input, setInput] = useState({initialInput});
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    // Use Effect untuk Menampilkan data
    useEffect(() => {
        fetchData()
    }, [])
    
    const fetchData = () => {
        axios.get('http://localhost:3000/api/category').then((response) => {
            setData(response.data.data)
        }).catch(err => {
            console.log(err)
        })
    
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
        console.log(name)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post('http://localhost:3000/api/category', {name: input.name})
            fetchData()
            console.log(input)
            setInput({...input})

            let textSimpan = "Apa anda yakin menyimpan data?"
            let textUpdate = "Data anda yakin memperbarui data?"

            if (id) {
                if(confirm(textUpdate)){
                    await axios.put(`http://localhost:3000/api/category/${id}`, {
                        name: name
                    })
                }
            } else {
                if(confirm(textSimpan)){
                    await axios.post('http://localhost:3000/api/category', {
                        name: name
                    })
                }
            }
            fetchData()
            clearData()
        } catch(err) {
            alert(err)
        }
    }

    const deleteData = async (id) => {
        try {
            let text = "Apa anda yakin menyimpan data?"
            if (confirm(text)) {
                await axios.delete(`http://localhost:3000/api/category/${id}`, {
                    name: name
                })
                fetchData()
            } 
        } catch(err) {
            alert(err)
        }
    }

    const clearData = () => {
        setName('')
        setId('')
    }

    const handleEdit = async (id) => {
        try {
            axios.get(`http://localhost:3000/api/category/${id}`).then((response) => {
            let result = response.data.data
            console.log(result)
            setName(result.name)
            setId(result.id)
        })} catch(err) {
            console.log(err)
        }

    }

    return (
        <>
            <h1 class="judul-crud-axios">Category</h1>
            <form onSubmit={handleSubmit}>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleChangeName} value={name} placeholder="Name Category" />
                <input type="submit" value="Submit" />
            </form>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Nama</th>
                            <th colspan="2">Aksi</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index)=>{
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
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