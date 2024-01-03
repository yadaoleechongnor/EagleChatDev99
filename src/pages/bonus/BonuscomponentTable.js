import React from 'react';

const Table = () => {
  return (
    <div className="container mx-auto my-8 border rounded-xl overflow-hidden">
      <table className="w-full border border-collapse rounded">
        <thead className='bg-[#00AEEF] text-white'>
          <tr>
            <th className="py-2 px-4 border">ເງິນເດືອນ</th>
            <th className="py-2 px-4 border">ໂບນັດລວມ</th>
            <th className="py-2 px-4 border">ຄ່າແນະນຳ</th>
            <th className="py-2 px-4 border">ຈັບຄູ່</th>
            <th className="py-2 px-4 border"> Cash Back</th>
            <th className="py-2 px-4 border"> Auto Ship </th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="py-5 px-6 border">0.0</td>
            <td className="py-2 px-4 border">0.0</td>
            <td className="py-2 px-4 border">0.0</td>
            <td className="py-2 px-4 border">0.0</td>
            <td className="py-2 px-4 border">0.0</td>
            <td className="py-2 px-4 border">0.0</td>
          </tr>
          <tr className=' bg-[#E3E3E3] '>
            <td className="py-2 px-4 border">0.0</td>
            <td className="py-2 px-4 border">0.0</td>
            <td className="py-2 px-4 border">0.0</td>
            <td className="py-2 px-4 border">0.0</td>
            <td className="py-2 px-4 border">0.0</td>
            <td className="py-2 px-4 border">0.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
