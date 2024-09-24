import { useState } from "react";

export default function Ra(){
    const [ra, setRa] = useState('');
    const [show, setShow] = useState('block');

    const insertRA = (e, ra) => {
        e.preventDefault();
        localStorage.setItem('ra', ra);
        setShow('hidden');
    }
    return(
        <div className={`${show} bg-blue-200  p-8 rounded-lg`}>
            <form onSubmit={insertRA} className="flex flex-col">
                <label>RA: 
                    <input
                        placeholder="Digite seu RA"
                        value={ra}
                        onChange={(e) => setRa(e.target.value)}
                        required
                        className="pl-2 ml-2"
                    />
                </label>
                <button type='submit' className="mx-auto bg-white py-1 px-3 rounded mt-4">Gravar RA</button>
            </form>
        </div>
    )
}