import uploadFile from '../../../firebase/addImage'
// import { async } from '../../../firebase/util'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import Loader from '../../common/Loader'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <Loader />,
})

export default function BlogForm({ setTitle, title, value, setValue, handleClick, setImage, setAlert, setLoading, image,  link ,setLink, type, setType }) {

    const [file, setFile] = useState(null)
    const uploadImage = async () => {
        setLoading(true)
        if (!file) {
            return setAlert({ isShow: true, duration: 3000, message: "Select image file to upload.", type: "error" })
        }
        const filePath = crypto.randomUUID() + "-" + file.name
        try {
            const url = await uploadFile(file, filePath)
            setImage(url)
        } catch (error) {
            return setAlert({ isShow: true, duration: 3000, message: error.message, type: "error" })
        }
        setLoading(false)
    }
    return (
        <div className="flex flex-col justify-center items-center gap-6 w-full md:px-24 sm:px-12 px-6 h-screen ">
            <div className="w-full">
                <input
                    className='w-full border-2 text-black font-medium rounded-md border-teal-400 py-3 px-6'
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />


            </div>

            <div className="w-full">
                <input
                    className='w-full border-2 text-black font-medium rounded-md border-teal-400 py-3 px-6'
                    type="text"
                    placeholder="Link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />

                
            </div>


            <div className="w-full">
                <input
                    className='w-full border-2 text-black font-medium rounded-md border-teal-400 py-3 px-6'
                    type="text"
                    placeholder="Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />

                
            </div>




            <div className="w-full h-64">
                <QuillNoSSRWrapper theme="snow" className='h-full pb-[2.5rem] border-[2.5px] text-black font-medium rounded-md border-teal-400 hover:border-blue-600' value={value} onChange={setValue} />
            </div>
            <div className='w-full'>
                <div className="w-full flex">
                    <input
                        type="file"
                        id="file"
                        name=""
                        className='text-black font-medium rounded-md border-teal-400 py-3 px-6 border-2 border-r-0 rounded-r-none'
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button type='button' className="rounded-l-none inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 dark:hover:bg-teal-700 dark:hover:text-white" onClick={uploadImage}>
                        Upload Image
                    </button>
                </div>
                <div className='text-xl font-cutiveMono text-center py-2'>or</div>
                <div className='w-full'>
                    <input className='w-full border-2 text-black font-medium rounded-md border-teal-400 py-3 px-6'
                        type="text"
                        placeholder="Image url" onChange={e => setImage(e.target.value)} value={image} />
                </div>
            </div>
            <div className="w-full">
                <button className='inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500 dark:hover:bg-teal-700 dark:hover:text-white' onClick={handleClick}>Publish</button>
            </div>
        </div>
    )
}