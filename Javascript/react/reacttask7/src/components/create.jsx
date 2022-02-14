
import { useRef } from 'react';
import useCreate from '../hooks/useCreate';

export default function Create() {

    const { CreateList, isLoading } = useCreate()
    const inputRef = useRef(null)

    return <div className="flex flex-col space-y-3 items-center justify-center h-screen">
        <input ref={inputRef} type="text" className="px-3 py-4 bg-black text-white" />
        <button onClick={() => { CreateList(inputRef.current.value) }}>
            {isLoading ? "Yaradılır..." : "Yarat"}
        </button>
    </div>;
}