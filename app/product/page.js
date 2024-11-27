'use client'
import { useState, useEffect } from "react";
export default function Product() {

    //กำหนดตัวแปร url ของ api
    const url = "https://expressjs-wmjd.onrender.com/api/";

    //สร้างตัวแปรเพื่อเก็บข้อมูล
    const [data, setData] = useState([]);

    //สร้างฟังก์ชั่นสำหรับดึงข้อมูล
    const getData = async () => {
        const response = await fetch(url+'products');
        const result = await response.json()
        setData(result)
    }
    //เรียกใช้ฟังก์ชั่น
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <h1 className="my-6 text-4xl font -bold">Hello next js</h1>
            <h1>Product สินค้า</h1>



            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.qty}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.creatdate}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}